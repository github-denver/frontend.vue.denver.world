<template>
  <application-header>
    <heading>
      <router-link :to="{ name: 'Main' }">
        덴버월드
      </router-link>
    </heading>

    <square-button :attribute="{ type: 'button', event: onClickClose }">
      <icon-image :attribute="{ width: 30, height: 30, icon: 'menu' }">
        주메뉴 열기
      </icon-image>
    </square-button>

    <ul v-if="isAuthorized">
      <li>
        <router-link :to="{ name: 'ProfileUpdate' }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'profile' }">
            내 정보
          </icon-image>
        </router-link>
      </li>
      <li>
        <square-button :attribute="{ type: 'button', event: onClickSignout }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'logout' }">
            로그아웃
          </icon-image>
        </square-button>
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link :to="{ name: 'Login' }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'login' }">
            로그인
          </icon-image>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Welcome' }">
          <icon-image :attribute="{ width: 30, height: 30, icon: 'join' }">
            회원가입
          </icon-image>
        </router-link>
      </li>
    </ul>

    <app-menu
      v-if="isActive"
      :isAuthorized="isAuthorized"
      :user="user"
      @parentClose="onClickClose"
    />
  </application-header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import ButtonSquare from '@/components/button/Square'
import LinkSquare from '@/components/link/Square'

import AppMenu from '@/components/common/AppMenu'

export default {
  name: 'AppHeader',
  components: { ButtonSquare, LinkSquare, AppMenu },
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
    }
  }
}
</script>

<style scoped>
ul {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0;
}

li {
  display: inline-block;
  vertical-align: top;
}

li + li {
  margin-left: 10px;
}
</style>
