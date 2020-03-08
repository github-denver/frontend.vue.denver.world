<template>
  <div class="menu">
    <Profile
      v-bind:isAuthorized="isAuthorized"
      v-bind:user="user"
      v-bind:data="{
        component: {
          success: 'ProfileUpdate',
          failure: 'Login'
        },
        className: 'profile',
        message: {
          success: '',
          failure: '로그인해주세요.'
        }
      }"
    />

    <Navigation v-bind:data="{ event: onClickClose }" />

    <button-square
      v-bind:data="{
        type: 'button',
        className: 'button_close',
        text: 'square: 주메뉴 닫기',
        event: onClickClose,
        icon: 'ico_close'
      }"
    />
  </div>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'
import Profile from '@/components/common/Profile'
import Navigation from '@/components/common/Navigation'
import ButtonSquare from '@/components/button/Square'

export default {
  name: 'AppMenu',
  components: { Profile, Navigation, ButtonSquare },
  props: {
    isAuthorized: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: false
    }
  },
  computed: {
    localhost() {
      return localhost
    },
    uploads() {
      return uploads
    }
  },
  methods: {
    onClickClose() {
      this.$emit('parentClose')
    }
  }
}
</script>
