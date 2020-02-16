<template>
  <div class="wrap_welcome">
    <h1 class="title_logo">
      <router-link
        v-bind:to="{
          name: 'MainPage'
        }"
        class="link_logo"
        >덴버월드</router-link
      >
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">로그인</strong>
      <p class="description_welcome">로그인해주세요!</p>

      <login-form v-on:parentSubmit="onSubmit" />
    </div>
    <!-- // inner_welcome -->
  </div>
  <!-- // wrap_welcome -->
</template>

<script>
import { mapActions } from 'vuex'
import LoginForm from '@/components/LoginForm'

export default {
  name: 'LoginPage',
  components: { LoginForm },
  methods: {
    ...mapActions(['signin']),
    onSubmit(payload) {
      console.log('[LoginPage.vue] methods() → onSubmit → payload: ', payload)

      this.signin(payload)
        .then((response) => {
          console.log('[LoginPage.vue] methods() → onSubmit → 로그인에 성공했어요!') // prettier-ignore
          console.log('[LoginPage.vue] methods() → onSubmit → response: ', response) // prettier-ignore

          alert('로그인에 성공했어요!')

          console.log('[LoginPage.vue] methods() → onSubmit → 메인으로 이동해요!') // prettier-ignore

          this.$router.push({
            name: 'MainPage'
          })
        })
        .catch((error) => {
          if (error.response.status === 401) {
            alert('로그인해주세요!')
          } else {
            alert(error.response.data.message)
          }
          console.log('[LoginPage.vue] 로그인에 실패했어요.. ㅠㅜ error: ', error) // prettier-ignore
          console.log('[LoginPage.vue] 로그인에 실패했어요.. ㅠㅜ error.message: ', error.message) // prettier-ignore
          console.log('[LoginPage.vue] 로그인에 실패했어요.. ㅠㅜ error.response: ', error.response) // prettier-ignore
          console.log('[LoginPage.vue] 로그인에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data) // prettier-ignore

          alert('로그인에 실패했어요.. ㅠㅜ')
        })
    }
  }
}
</script>
