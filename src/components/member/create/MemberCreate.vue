<template>
  <welcome-component>
    <h1><router-link :to="{ name: 'Main' }">덴버월드</router-link></h1>

    <div class="container">
      <strong class="title">얼마 안 남았어요!</strong>
      <p class="description">나머지 정보를 입력해주세요!</p>

      <create :isAuthorized="isAuthorized" @parentSubmit="onSubmit" />
    </div>
  </welcome-component>
</template>

<script>
import { mapGetters } from 'vuex'
import Create from '@/components/member/create/Create'
import api from '@/api'

export default {
  name: 'MemberCreate',
  components: { Create },
  computed: {
    ...mapGetters(['isAuthorized'])
  },
  methods: {
    onSubmit(payload) {
      console.log('[MemberCreate.vue] methods() → onSubmit → payload: ', payload)

      api
        .post('/api/register', payload)
        .then((response) => {
          console.log('[MemberCreate.vue] 회원가입에 성공했어요! response: ', response)

          alert('회원가입에 성공했어요!')

          this.$router.push({ name: 'MemberLogin' })
        })
        .catch((error) => {
          console.log('[MemberCreate.vue] 회원가입에 실패했어요.. ㅠㅜ error: ', error)
          console.log('[MemberCreate.vue] 회원가입에 실패했어요.. ㅠㅜ error.message: ', error.message)
          console.log('[MemberCreate.vue] 회원가입에 실패했어요.. ㅠㅜ error.response: ', error.response)
          console.log('[MemberCreate.vue] 회원가입에 실패했어요.. ㅠㅜ error.response.data: ', error.response.data)

          alert(error.response.data.message)
        })
    }
  }
}
</script>
