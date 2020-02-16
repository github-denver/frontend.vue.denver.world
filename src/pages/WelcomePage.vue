<template>
  <div class="wrap_welcome">
    <h1 class="title_logo">
      <router-link v-bind:to="{ name: 'MainPage' }" class="link_logo"
        >덴버월드</router-link
      >
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">환영합니다!</strong>
      <p class="description_welcome"></p>
      <p class="description_welcome">
        덴버월드에서 사용할 닉네임과 나머지 정보들을<br />입력해 주실 수
        있으세요?
      </p>

      <div class="group_button type_half">
        <div class="inner_local">
          <router-link v-bind:to="{ name: 'MainPage' }" class="button_global"
            >싫어요</router-link
          >
        </div>
        <!-- //inner_local -->

        <div class="inner_local">
          <router-link
            v-bind:to="{ name: 'MemberCreatePage' }"
            class="button_global"
            >좋아요</router-link
          >
        </div>
        <!-- //inner_local -->
      </div>
      <!-- // group_button -->
    </div>
    <!-- // inner_welcome -->
  </div>
  <!-- // wrap_welcome -->
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>
