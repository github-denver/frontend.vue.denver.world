<template>
  <div class="menu">
    <Profile
      :isAuthorized="isAuthorized"
      :user="user"
      :attribute="{
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

    <Navigation :attribute="{ event: onClickClose }" />

    <square-button :attribute="{ type: 'button', event: onClickClose }">
      <icon-image :attribute="{ width: 30, height: 30, icon: 'close' }">
        주메뉴 닫기
      </icon-image>
    </square-button>
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

<style scoped>
.menu {
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 320px;
  margin: 0 auto;
  padding-bottom: 40px;
  background-color: #f1f1f1;
}

button {
  position: absolute;
  top: 20px;
  right: 10px;
}
</style>
