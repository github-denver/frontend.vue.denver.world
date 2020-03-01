<!-- prettier-ignore -->
<template>
  <div class="header">
    <h1 class="title_logo"><router-link v-bind:to="{ name: 'MainPage' }" class="link_logo">덴버월드</router-link></h1>

    <div class="gnb">
      <button type="button" class="button_gnb" v-on:click="onClickClose">
        <span class="ico_global ico_menu">주메뉴 열기</span>
      </button>

      <ul class="list_state" v-if="isAuthorized">
        <li>
          <router-link v-bind:to="{ name: 'ProfileEditPage' }" class="link_state">
            <span class="ico_global ico_profile">내 정보</span>
          </router-link>
        </li>
        <li>
          <a href="javascript:;" class="link_state" v-on:click="onClickSignout">
            <span class="ico_global ico_logout">로그아웃</span>
          </a>
        </li>
      </ul>

      <ul class="list_state" v-else>
        <li>
          <router-link v-bind:to="{ name: 'LoginPage' }" class="link_state">
            <span class="ico_global ico_login">로그인</span>
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="{ name: 'WelcomePage' }" class="link_state">
            <span class="ico_global ico_join">회원가입</span>
          </router-link>
        </li>
      </ul>

      <app-menu v-if="isActive" v-bind:isAuthorized="isAuthorized" v-bind:user="user" v-on:parentClose="onClickClose" />
    </div><!-- // gnb -->
  </div><!-- // header -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AppMenu from '@/components/AppMenu'

// prettier-ignore
export default {
  name: 'AppHeader',
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
