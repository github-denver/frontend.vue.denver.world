<template>
  <div class="container">
    <h2 class="screen_out">본문 영역</h2>

    <div class="contents edit">
      <update :service="service" :post="post[0]" @parentSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Update from '@/components/community/update/Update'
import api from '@/api'

export default {
  name: 'CommunityUpdate',
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
      const { number } = this.post[0]

      api
        .post(`/api/board/${payload.get('category')}/modify/${number}`, payload)
        .then((response) => {
          alert('글 수정에 성공했어요!')

          // console.log('[CommunityUpdate.vue] 글 수정에 성공했어요!')
          // console.log('[CommunityUpdate.vue] response: ', response)
          // console.log('[CommunityUpdate.vue] response.data.number.toString(): ', response.data.number.toString())
          // console.log('[CommunityUpdate.vue] typeof response.data.number.toString() || 1: ', response.data.number.toString() || 1)
          // console.log('[CommunityUpdate.vue] typeof response.data.number.toString(): ', typeof response.data.number.toString())

          this.$router.push({
            name: 'CommunityRead',
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
          if (error.response.status === 401) {
            alert('로그인해 주세요!')
          } else {
            alert('글 수정에 실패했어요.. ㅠㅜ')

            // console.log('[CommunityUpdate.vue] error.response.status: ', error.response.status)
          }

          // console.log('[CommunityUpdate.vue] error: ', error)
          // console.log('[CommunityUpdate.vue] error.message: ', error.message)
          // console.log('[CommunityUpdate.vue] error.response: ', error.response)
          // console.log('[CommunityUpdate.vue] error.response.data: ', error.response.data)
          // console.log('[CommunityUpdate.vue] error.response.status: ', error.response.status)
        })
    }
  }
}
</script>
