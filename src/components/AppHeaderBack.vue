<!-- prettier-ignore -->
<template>
  <div class="header">
    <h1 class="title_logo"><router-link v-bind:to="{ name: 'MainPage' }" class="link_logo">덴버월드</router-link></h1>

    <div class="gnb">
      <router-link v-bind:to="{ name: 'MainPage' }" class="button_history">
        <span class="ico_global ico_history">뒤로가기</span>
      </router-link>
    </div><!-- // gnb -->
  </div><!-- // header -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AppMenu from '@/components/AppMenu'

// prettier-ignore
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
