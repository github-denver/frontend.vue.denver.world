<template>
  <div class="wrap_welcome">
    <h1 class="title_logo">
      <router-link :to="{ name: 'Main' }" class="link_logo"
        >덴버월드</router-link
      >
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">로그인</strong>
      <p class="description_welcome">로그인해주세요!</p>

      <login-form @parentSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LoginForm from '@/components/member/read/LoginForm'

export default {
  name: 'Login',
  components: { LoginForm },
  methods: {
    ...mapActions(['signin']),
    onSubmit(payload) {
      console.log('[Login.vue] methods() → onSubmit → payload: ', payload)

      this.signin(payload)
        .then((response) => {
          console.log('[Login.vue] methods() → onSubmit → 로그인에 성공했어요!')
          console.log('[Login.vue] methods() → onSubmit → response: ', response)

          alert('로그인에 성공했어요!')

          console.log('[Login.vue] methods() → onSubmit → 메인으로 이동해요!')

          this.$router.push({
            name: 'Main'
          })
        })
        .catch((error) => {
          if (error.response.status === 401) {
            alert('로그인해주세요!')
          } else {
            alert(error.response.data.message)
          }
          console.log('[Login.vue] 로그인에 실패했어요.. ㅠㅜ error: ', error)
          console.log(
            '[Login.vue] 로그인에 실패했어요.. ㅠㅜ error.message: ',
            error.message
          )
          console.log(
            '[Login.vue] 로그인에 실패했어요.. ㅠㅜ error.response: ',
            error.response
          )
          console.log(
            '[Login.vue] 로그인에 실패했어요.. ㅠㅜ error.response.data: ',
            error.response.data
          )

          alert('로그인에 실패했어요.. ㅠㅜ')
        })
    }
  }
}
</script>
