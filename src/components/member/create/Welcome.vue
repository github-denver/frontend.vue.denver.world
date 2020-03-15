<template>
  <welcome-component>
    <h1><router-link :to="{ name: 'Main' }">덴버월드</router-link></h1>

    <div class="container">
      <strong class="title">환영합니다!</strong>
      <p class="description">덴버월드에서 사용할 닉네임과 나머지 정보들을<br />입력해 주실수있으세요?</p>

      <group-button-component :attribute="{ className: 'half' }">
        <div class="inner">
          <rectangle-link :attribute="{ className: '' }">
            <router-link :to="{ name: 'Main' }">싫어요</router-link>
          </rectangle-link>
        </div>

        <div class="inner">
          <rectangle-link :attribute="{ className: 'action' }">
            <router-link :to="{ name: 'MemberCreate' }">좋아요</router-link>
          </rectangle-link>
        </div>
      </group-button-component>
    </div>
  </welcome-component>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
