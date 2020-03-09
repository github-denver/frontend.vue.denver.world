<template>
  <div id="container">
    <div class="contents type_write">
      <post-create-form v-bind:category2="service" v-on:parentSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import PostCreateForm from '@/components/post/create/PostCreateForm'
import api from '@/api'

export default {
  name: 'PostCreate',
  props: {
    service: {
      type: String,
      required: true
    }
  },
  components: { PostCreateForm },
  methods: {
    onSubmit(payload) {
      /* const {
        category,
        subject,
        content,
        // download,
        // thumbnail,
        // upload2,
        thumb
      } = payload */
      // console.log('★[PostCreate.vue] methods() → onSubmit → payload: ', payload)
      console.log('★[PostCreate.vue] methods() → onSubmit → payload: ', payload)

      api
        /* .post(`/api/board/${category}/write`, {
          subject,
          content,
          // download,
          // thumbnail,
          // upload2
          formData
        }) */
        .post(`/api/board/${payload.get('category')}/write`, payload)
        .then((response) => {
          console.log('[PostCreate.vue] 글 등록에 성공했어요! response: ', response)

          alert('글 등록에 성공했어요!')

          console.log('[PostCreate.vue] 글 등록에 성공했어요! response.data.number.toString(): ', response.data.number.toString())
          console.log('[PostCreate.vue] 글 등록에 성공했어요! typeof response.data.number.toString() || 1: ', response.data.number.toString() || 1)
          console.log('[PostCreate.vue] 글 등록에 성공했어요! typeof response.data.number.toString(): ', typeof response.data.number.toString())

          this.$router.push({
            name: 'PostRead',
            params: {
              service: response.data.service,
              number: response.data.number.toString()
            },
            query: {
              page: '1'
            }
          })
        })
        .catch((error) => {
          console.log('[PostCreate.vue] 글 등록에 실패했어요.. ㅠㅜ error: ', error)
          console.log('[PostCreate.vue] 글 등록에 실패했어요.. ㅠㅜ error.message: ', error.message)
          console.log('[PostCreate.vue] 글 등록에 실패했어요.. ㅠㅜ error.response: ', error.response)
          console.log('[PostCreate.vue] 글 등록에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data)
          console.log('[PostCreate.vue] 글 등록에 실패했어요.. ㅠㅜ error.response.status: ', error.response.status)

          if (error.response.status === 401) {
            alert('로그인해주세요!')
          } else {
            console.log('[PostCreate.vue] 글 등록에 실패했어요.. ㅠㅜ')
            console.log('[PostCreate.vue] error.response.data: ', error.response.data)

            alert(error.response.data.message)
          }
        })
    }
  }
}
</script>
