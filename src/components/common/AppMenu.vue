<template>
  <div class="wrap_menu">
    <Profile
      :attribute="{
        authorized: attribute.authorized,
        component: {
          success: 'ProfileUpdate',
          failure: 'MemberLogin'
        }
      }"
    >
      <template v-slot:picture>
        <Picture
          :attribute="{
            authorized: attribute.authorized,
            user: attribute.user
          }"
        />
      </template>

      <template v-if="attribute.user" v-slot:text>{{ attribute.user.name }}</template>
      <template v-else v-slot:text>로그인해주세요.</template>
    </Profile>

    <navigation @parentOnClose="onClose" />

    <square-button :attribute="{ type: 'button', className: 'button_close', event: onClose }">
      <template v-slot:icon>
        <icon :attribute="{ className: 'icon_close' }">주메뉴 닫기</icon>
      </template>
    </square-button>
  </div>
</template>

<script>
import Profile from '@/components/common/Profile'
import Picture from '@/components/common/Picture'
import Navigation from '@/components/common/Navigation'
import SquareButton from '@/components/common/SquareButton'
import Icon from '@/components/common/Icon'

export default {
  name: 'AppMenu',
  components: { Profile, Picture, Navigation, SquareButton, Icon },
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClose() {
      this.$emit('parentOnClose')
    }
  }
}
</script>

<style>
.wrap_menu {
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
</style>
