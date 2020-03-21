<template>
  <div class="container">
    <div class="contents edit">
      <update :service="service" :post="post[0]" @parentSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Update from '@/components/post/update/Update'
import api from '@/api'

export default {
  name: 'PostUpdate',
  components: { Update },
  props: {
    service: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['post'])
  },
  methods: {
    onSubmit(payload) {
      const { category, subject, content, download, thumbnail, upload2 } = payload
      console.log('[PostUpdate.vue] methods() → onSubmit → payload: ', payload)

      const { number } = this.post[0]
      console.log('[PostUpdate.vue] methods() → onSubmit → this.post[0]: ', this.post[0])

      api
        .post(`/api/board/${category}/modify/${number}`, {
          number,
          category,
          subject,
          content,
          download,
          thumbnail,
          upload2
        })
        .then((response) => {
          console.log('[PostUpdate.vue] 글 수정에 성공했어요! response: ', response)

          alert('글 수정에 성공했어요!')

          console.log('[PostUpdate.vue] 글 수정에 성공했어요! response.data.number.toString(): ', response.data.number.toString())
          console.log('[PostUpdate.vue] 글 수정에 성공했어요! typeof response.data.number.toString() || 1: ', response.data.number.toString() || 1)
          console.log('[PostUpdate.vue] 글 수정에 성공했어요! typeof response.data.number.toString(): ', typeof response.data.number.toString())

          this.$router.push({
            name: 'PostRead',
            params: {
              service: response.data.service,
              number: response.data.number.toString()
            },
            query: {
              page: this.$route.query.page.toString() || 1
            }
          })
        })
        .catch((error) => {
          console.log('[PostUpdate.vue] 글 수정에 실패했어요.. ㅠㅜ error: ', error)
          console.log('[PostUpdate.vue] 글 수정에 실패했어요.. ㅠㅜ error.message: ', error.message)
          console.log('[PostUpdate.vue] 글 수정에 실패했어요.. ㅠㅜ error.response: ', error.response)
          console.log('[PostUpdate.vue] 글 수정에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data)
          console.log('[PostUpdate.vue] 글 수정에 실패했어요.. ㅠㅜ error.response.status: ', error.response.status)

          if (error.response.status === 401) {
            alert('로그인해주세요!')
          } else {
            alert('오류.. ㅠㅜ')

            console.log('[PostUpdate.vue] error.response.status: ', error.response.status)
          }

          alert('글 수정에 실패했어요.. ㅠㅜ')
        })
    }
  }
}
</script>
