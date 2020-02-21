<template>
  <div class="wrap_welcome">
    <h1 class="title_logo">
      <router-link v-bind:to="{ name: 'MainPage' }" class="link_logo"
        >덴버월드</router-link
      >
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">얼마 안 남았어요!</strong>
      <p class="description_welcome">나머지 정보를 입력해주세요!</p>

      <member-create-form v-on:parentSubmit="onSubmit" />
    </div>
    <!-- // inner_welcome -->
  </div>
  <!-- // wrap_welcome -->
</template>

<script>
import MemberCreateForm from '@/components/MemberCreateForm'
import api from '@/api'

export default {
  name: 'MemberCreatePage',
  components: { MemberCreateForm },
  // prettier-ignore
  methods: {
    onSubmit(payload) {
      console.log('[MemberCreatePage.vue] methods() → onSubmit → payload: ', payload)

      api.post('/api/register', payload).then((response) => {
        console.log('[MemberCreatePage.vue] 회원가입에 성공했어요! response: ', response)

        alert('회원가입에 성공했어요!')

        this.$router.push({ name: 'LoginPage' })
      }).catch((error) => {
        console.log('[MemberCreatePage.vue] 회원가입에 실패했어요.. ㅠㅜ error: ', error)
        console.log('[MemberCreatePage.vue] 회원가입에 실패했어요.. ㅠㅜ error.message: ', error.message)
        console.log('[MemberCreatePage.vue] 회원가입에 실패했어요.. ㅠㅜ error.response: ', error.response)
        console.log('[MemberCreatePage.vue] 회원가입에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data)

        alert(error.response.data.message)
      })
    }
  }
}
</script>
