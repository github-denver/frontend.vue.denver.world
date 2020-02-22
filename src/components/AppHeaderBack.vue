<template>
  <router-link
    v-bind:to="{
      name: 'MainPage'
    }"
    class="button_history"
    ><span class="ico_global ico_history">뒤로가기</span></router-link
  >
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AppMenu from '@/components/AppMenu'

export default {
  name: 'AppHeader',
  components: { AppMenu },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthorized'])
  },
  // prettier-ignore
  methods: {
    onClickSignout() {
      this.signout()

      alert('로그아웃 됐어요!')
    },
    onClickClose() {
      this.isActive = !this.isActive
      console.log('[AppHeader.vue] methods() → onClickClose → this.isActive: ', this.isActive)
    },
    ...mapActions(['signout'])
  }
}
</script>
