<template>
  <div id="container">
    <div class="contents type_write">
      <post-edit-form
        v-bind:service="service"
        v-bind:post="post"
        v-on:parentSubmit="onSubmit"
      />
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import { mapState } from 'vuex'
import PostEditForm from '@/components/PostEditForm'
import api from '@/api'

export default {
  name: 'PostEditPage',
  components: { PostEditForm },
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
      const { category, subject, content, download, thumbnail, upload2 } = payload // prettier-ignore
      console.log('[PostEditPage.vue] methods() → onSubmit → payload: ', payload) // prettier-ignore

      const { number } = this.post[0]
      console.log('[PostEditPage.vue] methods() → onSubmit → this.post[0]: ', this.post[0]) // prettier-ignore

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
          console.log('[PostEditPage.vue] 글 수정에 성공했어요! response: ', response) // prettier-ignore

          alert('글 수정에 성공했어요!')

          console.log('[PostEditPage.vue] 글 수정에 성공했어요! response.data.number.toString(): ', response.data.number.toString()) // prettier-ignore
          console.log('[PostEditPage.vue] 글 수정에 성공했어요! typeof response.data.number.toString() || 1: ', response.data.number.toString() || 1) // prettier-ignore
          console.log('[PostEditPage.vue] 글 수정에 성공했어요! typeof response.data.number.toString(): ', typeof response.data.number.toString()) // prettier-ignore

          this.$router.push({
            name: 'PostViewPage',
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
          console.log('[PostEditPage.vue] 글 수정에 실패했어요.. ㅠㅜ error: ', error) // prettier-ignore
          console.log('[PostEditPage.vue] 글 수정에 실패했어요.. ㅠㅜ error.message: ', error.message) // prettier-ignore
          console.log('[PostEditPage.vue] 글 수정에 실패했어요.. ㅠㅜ error.response: ', error.response) // prettier-ignore
          console.log('[PostEditPage.vue] 글 수정에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data) // prettier-ignore
          console.log('[PostEditPage.vue] 글 수정에 실패했어요.. ㅠㅜ error.response.status: ', error.response.status) // prettier-ignore

          if (error.response.status === 401) {
            alert('로그인해주세요!')
          } else {
            alert('오류.. ㅠㅜ')

            console.log('[PostEditPage.vue] error.response.status: ', error.response.status) // prettier-ignore
          }

          alert('글 수정에 실패했어요.. ㅠㅜ')
        })
    }
  }
}
</script>
