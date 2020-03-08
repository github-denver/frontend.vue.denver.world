<template>
  <div class="header">
    <h1 class="title_logo"><router-link v-bind:to="{ name: 'Main' }" class="link_logo">덴버월드</router-link></h1>

    <div class="gnb">
      <button-square
        v-bind:data="{
          type: 'button',
          className: 'button_gnb',
          text: 'square: 주메뉴 열기',
          event: onClickClose,
          icon: 'ico_menu'
        }"
      />

      <ul class="list_state" v-if="isAuthorized">
        <li>
          <link-square
            v-bind:data="{
              component: 'ProfileUpdate',
              className: 'link_state',
              text: 'square: 내 정보',
              event: onClickClose,
              icon: 'ico_profile'
            }"
          />
        </li>
        <li>
          <link-square
            v-bind:data="{
              type: 'button',
              text: 'square: 로그아웃',
              event: onClickSignout,
              icon: 'ico_logout'
            }"
          />
        </li>
      </ul>

      <ul class="list_state" v-else>
        <li>
          <link-square
            v-bind:data="{
              component: 'Login',
              className: 'link_state',
              text: 'square: 로그인',
              event: onClickClose,
              icon: 'ico_login'
            }"
          />
        </li>
        <li>
          <link-square
            v-bind:data="{
              component: 'Welcome',
              className: 'link_state',
              text: 'square: 회원가입',
              event: onClickClose,
              icon: 'ico_join'
            }"
          />
        </li>
      </ul>

      <app-menu v-if="isActive" v-bind:isAuthorized="isAuthorized" v-bind:user="user" v-on:parentClose="onClickClose" />
    </div>
  </div>
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

      console.log('[AppHeader.vue] methods() → onClickClose → this.isActive: ', this.isActive)
    }
  }
}
</script>
