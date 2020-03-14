<template>
  <header-component>
    <heading-component><router-link :to="{ name: 'Main' }" class="router-link">덴버월드</router-link></heading-component>

    <square-button :attribute="{ type: 'button', className: 'hamburger', event: close }">
      <icon-image :attribute="{ width: 30, height: 30, icon: 'menu' }">주메뉴 열기</icon-image>
    </square-button>

    <utility-component v-if="isAuthorized">
      <item-component>
        <router-link :to="{ name: 'ProfileUpdate' }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'profile' }">내 정보</icon-image>
        </router-link>
      </item-component>
      <item-component>
        <square-button :attribute="{ type: 'button', event: logout }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'logout' }">로그아웃</icon-image>
        </square-button>
      </item-component>
    </utility-component>

    <utility-component v-else>
      <item-component>
        <router-link :to="{ name: 'Login' }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'login' }">로그인</icon-image>
        </router-link>
      </item-component>
      <item-component>
        <router-link :to="{ name: 'Welcome' }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'join' }">회원가입</icon-image>
        </router-link>
      </item-component>
    </utility-component>

    <app-menu
      v-if="active"
      :attribute="{
        authorized: isAuthorized,
        user: user
      }"
      @parentClose="close"
    />
  </header-component>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AppMenu from '@/components/common/AppMenu'

export default {
  name: 'AppHeader',
  components: { AppMenu },
  data() {
    return {
      active: false
    }
  },
  computed: {
    ...mapGetters(['isAuthorized']),
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['signout']),
    logout() {
      this.signout()

      alert('로그아웃 됐어요!')
    },
    close() {
      this.active = !this.active
    }
  }
}
</script>
