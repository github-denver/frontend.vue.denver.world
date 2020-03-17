<template>
  <menu-component>
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

export default {
  name: 'AppMenu',
  components: { Profile, Picture, Navigation },
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
