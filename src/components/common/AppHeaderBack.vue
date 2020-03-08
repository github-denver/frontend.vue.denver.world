<template>
  <div class="header">
    <h1 class="title_logo"><router-link v-bind:to="{ name: 'Main' }" class="link_logo">덴버월드</router-link></h1>

    <div class="gnb">
      <link-square
        v-bind:data="{
          component: 'Main',
          className: 'button_history',
          text: 'square: 뒤로가기',
          event: onClickClose,
          icon: 'ico_history'
        }"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import LinkSquare from '@/components/link/Square'
import AppMenu from '@/components/common/AppMenu'

export default {
  name: 'AppHeaderBack',
  components: { AppMenu },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters(['isAuthorized']),
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['signout']),
    onClickSignout() {
      this.signout()

      alert('로그아웃 됐어요!')
    },
    onClickClose() {
      this.isActive = !this.isActive

      console.log('[AppHeader.vue] methods() → onClickClose → this.isActive: ', this.isActive)
    }
  }
}
</script>
