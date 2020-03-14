<template>
  <menu-component>
    <Profile
      :attribute="{
        authorized: attribute.authorized,
        user: attribute.user,
        component: {
          success: 'ProfileUpdate',
          failure: 'Login'
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

      <template v-if="attribute.user" v-slot:text>{{ attribute.user }}</template>
      <template v-else v-slot:text>로그인해주세요.</template>
    </Profile>

    <Navigation :attribute="{ event: close }" />

    <square-button :attribute="{ type: 'button', event: close }">
      <icon-image :attribute="{ width: 30, height: 30, icon: 'close' }">주메뉴 닫기</icon-image>
    </square-button>
  </menu-component>
</template>

<script>
import Profile from '@/components/common/Profile'
import Picture from '@/components/common/Picture'

import Navigation from '@/components/common/Navigation'
import ButtonSquare from '@/components/button/Square'

export default {
  name: 'AppMenu',
  components: { Profile, Picture, Navigation, ButtonSquare },
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('parentClose')
    }
  }
}
</script>
