<template>
  <div class="wrap_welcome">
    <h1 class="tit_local">
      <router-link :to="{ name: 'Main' }" class="link_local">덴버월드</router-link>
    </h1>

    <h2 class="screen_out">본문 영역</h2>
    <div class="inner_welcome">
      <strong class="tit_welcome">로그인</strong>
      <p class="desc_welcome">로그인해주세요!</p>

      <read @parentSubmit="onSubmit" />
    </div>
  </div>
  <!-- // wrap_welcome -->
</template>

<script>
import { mapActions } from 'vuex'
import Read from '@/components/member/read/Read'

export default {
  name: 'MemberLogin',
  components: { Read },
  methods: {
    ...mapActions(['signin']),
    onSubmit(payload) {
      this.signin(payload)
        .then((response) => {
          alert('로그인에 성공했어요!')

          // console.log('[Login.vue] methods() → onSubmit → 로그인에 성공했어요!')
          // console.log('[Login.vue] methods() → onSubmit → response: ', response)

          // console.log('[Login.vue] methods() → onSubmit → 메인으로 이동해요!')

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

          // console.log('[Login.vue] 로그인에 실패했어요.. ㅠㅜ')
          // console.log('[Login.vue] error: ', error)
          // console.log('[Login.vue] error.message: ', error.message)
          // console.log('[Login.vue] error.response: ', error.response)
          // console.log('[Login.vue] error.response.data: ', error.response.data)
        })
    }
  }
}
</script>
