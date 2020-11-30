<template>
  <div class="wrap_welcome">
    <h1 class="tit_comm">
      <router-link :to="{ name: 'Main' }" class="link_comm">덴버월드</router-link>
    </h1>

    <h2 class="screen_out">본문 영역</h2>
    <div class="inner_welcome">
      <strong class="tit_welcome">환영합니다!</strong>
      <p class="desc_welcome">덴버월드에서 사용할 닉네임과 나머지 정보들을<br />입력해 주실수있으세요?</p>

      <div class="grp_gravity">
        <div class="inner_half">
          <router-link :to="{ name: 'Main' }" class="link_g">싫어요</router-link>
        </div>

        <div class="inner_half">
          <router-link :to="{ name: 'MemberCreate' }" class="link_g link_action">좋아요</router-link>
        </div>
      </div>
      <!-- // group-button -->
    </div>
  </div>
  <!-- // welcome -->
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style scoped></style>
