<template>
  <div class="wrap_welcome">
    <h1 class="title_local"><router-link :to="{ name: 'Main' }" class="link_local">소담</router-link></h1>

    <div class="inner_welcome">
      <strong class="title_welcome">환영합니다!</strong>
      <p class="description_welcome">소담에서 사용할 닉네임과 나머지 정보들을<br />입력해 주실수있으세요?</p>

      <div class="group_button">
        <div class="inner_half">
          <router-link :to="{ name: 'Main' }" class="link_global">싫어요</router-link>
        </div>

        <div class="inner_half">
          <router-link :to="{ name: 'MemberCreate' }" class="link_global link_action">좋아요</router-link>
        </div>
      </div>
      <!-- // group-button -->
    </div>
  </div>
  <!-- // welcome -->
</template>

<script>
export default {
  name: 'Welcome',
  components: {}
}
</script>

<style></style>
