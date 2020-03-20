<template>
  <div class="welcome">
    <h1><router-link :to="{ name: 'Main' }">덴버월드</router-link></h1>

    <div class="container">
      <strong class="title">내 정보</strong>
      <p class="description">수정할 정보를 입력해주세요!</p>

      <update :isAuthorized="isAuthorized" :profile="user" @parentSubmit="onSubmit" />
    </div>
  </div>
  <!-- // welcome -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Update from '@/components/member/update/Update'
import api from '@/api'

export default {
  name: 'ProfileUpdate',
  components: { Update },
  computed: {
    ...mapGetters(['isAuthorized']),
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['updateProfile']),
    onSubmit(payload) {
      console.log('[ProfileUpdate.vue] methods() → onSubmit → payload: ', payload)

      this.updateProfile(payload).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>
