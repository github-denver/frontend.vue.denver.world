<template>
  <welcome-component>
    <h1><router-link :to="{ name: 'Main' }">덴버월드</router-link></h1>

    <div class="container">
      <strong class="title">로그인</strong>
      <p class="description">로그인해주세요!</p>

      <login @parentSubmit="onSubmit" />
    </div>
  </welcome-component>
</template>

<script>
import { mapActions } from 'vuex'
import Login from '@/components/member/read/Login'

export default {
  name: 'MemberLogin',
  components: { Login },
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
          console.log('[Login.vue] 로그인에 실패했어요.. ㅠㅜ error.message: ', error.message)
          console.log('[Login.vue] 로그인에 실패했어요.. ㅠㅜ error.response: ', error.response)
          console.log('[Login.vue] 로그인에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data)

          alert('로그인에 실패했어요.. ㅠㅜ')
        })
    }
  }
}
</script>
