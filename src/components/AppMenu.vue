<!-- prettier-ignore -->
<template>
  <div class="menu">
    <div class="group_profile" v-if="isAuthorized">
      <router-link v-bind:to="{ name: 'ProfileEditPage' }" class="link_profile">
        <div class="group_picture">
          <img v-if="typeof user.picture !== 'undefined' || user.picture !== null || user.picture !== ''" v-bind:src="`${localhost}/${uploads}/${user.picture}`" v-bind:alt="user.name" class="thumbnail_picture" />

          <img v-else v-bind:src="`${localhost}/${uploads}/default_picture.png`" alt="기본 이미지" class="thumbnail_picture" />
        </div><!-- // group_picture -->

        <span class="text_profile">
          <router-link v-bind:to="{ name: 'ProfileEditPage' }">{{ user.name }}</router-link>
        </span><!-- // text_profile -->
      </router-link>
    </div><!-- // group_profile -->

    <div class="group_profile" v-else>
      <router-link v-bind:to="{ name: 'LoginPage' }" class="link_profile">
        <div class="group_picture">
          <img v-bind:src="`${localhost}/${uploads}/default_picture.png`" alt="기본 이미지" class="thumbnail_picture" />
        </div><!-- // group_picture -->

        <span class="text_profile">로그인해주세요.</span>
      </router-link>
    </div><!-- // group_profile -->

    <div class="group_menu">
      <ul class="list_menu">
        <li>
          <span class="text_menu">새소식</span>
          <ul class="list_lnb">
            <li>
              <router-link v-bind:to="{ name: 'PostListPage', params: { service: 'notice', number: '1' } }" v-on:click.native="onClickClose" class="link_lnb">공지사항</router-link>
            </li>
            <li>
              <router-link v-bind:to="{ name: 'PostListPage', params: { service: 'update', number: '1' } }" v-on:click.native="onClickClose" class="link_lnb">업데이트</router-link>
            </li>
          </ul>
        </li>
        <li>
          <span class="text_menu">여행</span>
          <ul class="list_lnb">
            <li>
              <router-link v-bind:to="{ name: 'GalleryListPage', params: { service: 'article', number: '1' } }" v-on:click.native="onClickClose" class="link_lnb">기사</router-link>
            </li>
          </ul>
        </li>
        <li>
          <span class="text_menu">커뮤니티</span>

          <ul class="list_lnb">
            <li>
              <router-link v-bind:to="{ name: 'PostListPage', params: { service: 'talk', number: '1' } }" v-on:click.native="onClickClose" class="link_lnb">톡톡 한마디</router-link>
            </li>
            <li>
              <router-link v-bind:to="{ name: 'GalleryListPage', params: { service: 'gallery', number: '1' } }" v-on:click.native="onClickClose" class="link_lnb">이미지 게시판</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div><!-- // group_menu -->

    <button type="button" class="button_close" v-on:click="onClickClose">
      <span class="ico_global ico_close">주 메뉴 닫기</span>
    </button>
  </div><!-- // menu -->
</template>

<script>
import { localhost, uploads } from '../../config/setting.js'

// prettier-ignore
export default {
  name: 'AppMenu',
  props: {
    isAuthorized: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: false
    }
  },
  computed: {
    localhost() {
      return localhost
    },
    uploads() {
      return uploads
    }
  },
  methods: {
    onClickClose() {
      this.$emit('parentClose')
    }
  }
}
</script>
