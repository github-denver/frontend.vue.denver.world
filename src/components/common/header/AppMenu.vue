<template>
  <div class="menu">
    <div class="inner_menu">
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

      <h2 class="screen_out">주메뉴</h2>
      <navigation @parentOnClose="onClose" />

      <square-button :attribute="{ type: 'button', className: 'btn_close', event: onClose }">
        <template v-slot:icon>
          <icon :attribute="{ className: 'ico_close' }">주메뉴 닫기</icon>
        </template>
      </square-button>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/common/Profile'
import Picture from '@/components/common/Picture'
import Navigation from '@/components/common/header/Navigation'
import SquareButton from '@/components/unit/SquareButton'
import Icon from '@/components/unit/Icon'

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

<style scoped></style>
