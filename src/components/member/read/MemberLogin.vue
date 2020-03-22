<template>
  <div class="wrap_welcome">
    <h1 class="title_local">
      <router-link :to="{ name: 'Main' }" class="link_local">소담</router-link>
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">로그인</strong>
      <p class="description_welcome">로그인해주세요!</p>

      <login @parentSubmit="onSubmit" />
    </div>
  </div>
  <!-- // wrap_welcome -->
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
      this.signin(payload)
        .then((response) => {
          alert('로그인에 성공했어요!')

          console.log('[Login.vue] methods() → onSubmit → 로그인에 성공했어요!')
          console.log('[Login.vue] methods() → onSubmit → response: ', response)

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

          alert('로그인에 실패했어요.. ㅠㅜ')

          console.log('[Login.vue] 로그인에 실패했어요.. ㅠㅜ')
          console.log('[Login.vue] error: ', error)
          console.log('[Login.vue] error.message: ', error.message)
          console.log('[Login.vue] error.response: ', error.response)
          console.log('[Login.vue] error.response.data: ', error.response.data)
        })
    }
  }
}
</script>
