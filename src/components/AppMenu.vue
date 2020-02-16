<template>
  <div class="area_gnb">
    <div class="group_profile" v-if="isAuthorized">
      <router-link v-bind:to="{ name: 'ProfileEditPage' }" class="box_picture">
        <div class="inner_picture">
          <div class="test ">
            <img
              v-if="
                typeof user.picture !== 'undefined' ||
                  user.picture !== null ||
                  user.picture !== ''
              "
              v-bind:src="'http://localhost:3000/uploads/' + user.picture"
              v-bind:alt="user.name"
              class="img_picture"
            />
            <img
              v-else
              src="http://localhost:3000/uploads/default_picture.png"
              alt="기본 이미지"
              class="img_picture"
            />
          </div>
          <!-- // test -->
        </div>
        <!-- // inner_picture -->
      </router-link>
      <span class="text_profile">
        <router-link v-bind:to="{ name: 'ProfileEditPage' }">{{
          user.name
        }}</router-link> </span
      ><!-- // text_profile -->
    </div>
    <!-- // group_profile -->

    <div class="group_profile" v-else>
      <router-link
        v-bind:to="{
          name: 'LoginPage'
        }"
        class="link_profile"
      >
        <div class="box_picture">
          <img
            src="http://localhost:3000/uploads/default_picture.png"
            alt="기본 이미지"
            class="img_picture"
          />
        </div>
        <!-- // box_picture -->
        <span class="text_profile">로그인해주세요.</span>
      </router-link>
    </div>
    <!-- // group_profile -->

    <div class="group_gnb">
      <ul class="list_gnb">
        <li>
          <span class="link_gnb">새소식</span>

          <ul class="list_lnb">
            <li>
              <router-link
                v-bind:to="{
                  name: 'PostListPage',
                  params: { service: 'notice', number: '1' }
                }"
                v-on:click.native="onClickClose"
                class="link_lnb"
                >공지사항</router-link
              >
            </li>
            <li>
              <router-link
                v-bind:to="{
                  name: 'PostListPage',
                  params: { service: 'update', number: '1' }
                }"
                v-on:click.native="onClickClose"
                class="link_lnb"
                >업데이트</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <span href="javascript:;" class="link_gnb">커뮤니티</span>

          <ul class="list_lnb">
            <li>
              <router-link
                v-bind:to="{
                  name: 'PostListPage',
                  params: { service: 'talk', number: '1' }
                }"
                v-on:click.native="onClickClose"
                class="link_lnb"
                >톡톡 한마디</router-link
              >
            </li>
            <li>
              <router-link
                v-bind:to="{
                  name: 'GalleryListPage',
                  params: { service: 'gallery', number: '1' }
                }"
                v-on:click.native="onClickClose"
                class="link_lnb"
                >이미지 게시판</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- // group_gnb -->

    <button type="button" class="button_close" v-on:click="onClickClose">
      <span class="ico_global ico_close">주 메뉴 닫기</span>
    </button>
  </div>
  <!-- // area_gnb -->
</template>

<script>
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
  methods: {
    onClickClose() {
      this.$emit('parentClose')
    }
  }
}
</script>
