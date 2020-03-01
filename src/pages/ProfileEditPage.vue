<!-- prettier-ignore -->
<template>
  <div class="wrap_welcome">
    <h1 class="title_logo">
      <router-link v-bind:to="{ name: 'MainPage' }" class="link_logo">덴버월드</router-link>
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">내 정보</strong>
      <p class="description_welcome">수정할 정보를 입력해주세요!</p>

      <profile-edit-form v-bind:profile="user" v-on:parentSubmit="onSubmit" />
    </div><!-- // inner_welcome -->
  </div><!-- // wrap_welcome -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProfileEditForm from '@/components/ProfileEditForm'
import api from '@/api'

// prettier-ignore
export default {
  name: 'ProfileEditPage',
  components: { ProfileEditForm },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['updateProfile']),
    onSubmit(payload) {
      console.log('[ProfileEditPage.vue] methods() → onSubmit → payload: ', payload)

      this.updateProfile(payload).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>
