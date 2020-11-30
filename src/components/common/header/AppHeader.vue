<template>
  <header class="header">
    <div class="inner_global inner_local">
      <h1 class="tit_local">
        <router-link :to="{ name: 'Main' }" class="link_local">덴버월드</router-link>
      </h1>

      <square-button
        :attribute="{
          type: 'button',
          className: 'btn_hamburger',
          event: onClose
        }"
      >
        <template v-slot:icon>
          <Icon :attribute="{ className: 'ico_hamburger' }">주메뉴 열기</Icon>
        </template>
      </square-button>

      <h2 class="screen_out">로그인 정보</h2>
      <ul class="list_utility" v-if="isAuthorized">
        <li>
          <router-link :to="{ name: 'ProfileUpdate' }">
            <icon :attribute="{ className: 'ico_profile' }">내 정보</icon>
          </router-link>
        </li>
        <li>
          <square-button :attribute="{ type: 'button', event: onSignout }">
            <template v-slot:icon>
              <icon :attribute="{ className: 'ico_logout' }">로그아웃</icon>
            </template>
          </square-button>
        </li>
      </ul>

      <ul class="list_utility" v-else>
        <li>
          <router-link :to="{ name: 'MemberLogin' }">
            <icon :attribute="{ className: 'ico_login' }">로그인</icon>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Welcome' }">
            <icon :attribute="{ className: 'ico_join' }">회원가입</icon>
          </router-link>
        </li>
      </ul>

      <app-menu
        v-if="active"
        :attribute="{
          authorized: isAuthorized,
          user: user
        }"
        @parentOnClose="onClose"
      />
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import SquareButton from '@/components/unit/SquareButton'
import Icon from '@/components/unit/Icon'
import AppMenu from '@/components/common/header/AppMenu'

export default {
  name: 'AppHeader',
  components: { SquareButton, Icon, AppMenu },
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
    onSignout() {
      this.signout()

      alert('로그아웃 됐어요!')
    },
    onClose() {
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
}

.header > .inner_local {
  padding: 10px;
  box-sizing: border-box;
  background-color: #0074c2;
}

.header .tit_local {
  display: table;
  margin: 0 auto;
  text-align: center;
}

.header .link_local {
  display: table-cell;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  vertical-align: middle;
}

.header .list_utility {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0;
}

.header .list_utility li {
  display: inline-block;
  vertical-align: top;
}

.header .list_utility li + li {
  margin-left: 10px;
}
</style>
