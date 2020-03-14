<template>
  <div class="wrap_welcome">
    <h1 class="title_logo">
      <router-link :to="{ name: 'Main' }" class="link_logo">덴버월드</router-link>
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">내 정보</strong>
      <p class="description_welcome">수정할 정보를 입력해주세요!</p>

      <profile-edit-form :isAuthorized="isAuthorized" :profile="user" @parentSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ProfileEditForm from '@/components/member/update/ProfileEditForm'
import api from '@/api'

export default {
  name: 'ProfileUpdate',
  components: { ProfileEditForm },
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
