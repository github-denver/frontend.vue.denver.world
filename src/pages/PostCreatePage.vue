<template>
  <div id="container">
    <div class="contents type_write">
      <post-create-form
        v-bind:category2="service"
        v-on:parentSubmit="onSubmit"
      />
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import PostCreateForm from '@/components/PostCreateForm'
import api from '@/api'

export default {
  name: 'PostCreatePage',
  props: {
    service: {
      type: String,
      required: true
    }
  },
  components: { PostCreateForm },
  // prettier-ignore
  methods: {
    onSubmit(payload) {
      const { category, subject, content, download, thumbnail, upload2 } = payload
      console.log('[PostCreatePage.vue] methods() → onSubmit → payload: ', payload)

      api.post(`/api/board/${category}/write`, {
        subject,
        content,
        download,
        thumbnail,
        upload2
      }).then((response) => {
        console.log('[PostCreatePage.vue] 글 등록에 성공했어요! response: ', response)

        alert('글 등록에 성공했어요!')

        console.log('[PostCreatePage.vue] 글 등록에 성공했어요! response.data.number.toString(): ', response.data.number.toString())
        console.log('[PostCreatePage.vue] 글 등록에 성공했어요! typeof response.data.number.toString() || 1: ', response.data.number.toString() || 1)
        console.log('[PostCreatePage.vue] 글 등록에 성공했어요! typeof response.data.number.toString(): ', typeof response.data.number.toString())

        this.$router.push({
          name: 'PostViewPage',
          params: {
            service: response.data.service,
            number: response.data.number.toString()
          },
          query: {
            page: '1'
          }
        })
      }).catch((error) => {
        console.log('[PostCreatePage.vue] 글 등록에 실패했어요.. ㅠㅜ error: ', error)
        console.log('[PostCreatePage.vue] 글 등록에 실패했어요.. ㅠㅜ error.message: ', error.message)
        console.log('[PostCreatePage.vue] 글 등록에 실패했어요.. ㅠㅜ error.response: ', error.response)
        console.log('[PostCreatePage.vue] 글 등록에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data)
        console.log('[PostCreatePage.vue] 글 등록에 실패했어요.. ㅠㅜ error.response.status: ', error.response.status)

        if (error.response.status === 401) {
          alert('로그인해주세요!')
        } else {
          console.log('[PostCreatePage.vue] 글 등록에 실패했어요.. ㅠㅜ')
          console.log('[PostCreatePage.vue] error.response.data: ', error.response.data)

          alert(error.response.data.message)
        }
      })
    }
  }
}
</script>
