<template>
  <form method="post" v-on:submit.prevent="submit" novalidate>
    <div class="group_field">
      <label for="id" class="label_local">아이디</label>
      <span class="field_global"
        ><input type="text" id="id" class="field_local" v-model="id"/></span
      ><!-- // field_global -->
    </div>
    <!-- // group_field -->

    <div class="group_field">
      <label for="password" class="label_local">패스워드</label>
      <span class="field_global"
        ><input
          type="password"
          id="password"
          class="field_local"
          v-model="password"/></span
      ><!-- // field_global -->
    </div>
    <!-- // group_field -->

    <div class="group_button type_half">
      <div class="inner_local">
        <router-link v-bind:to="{ name: 'MainPage' }" class="button_global"
          >홈으로</router-link
        >
      </div>
      <!-- // inner_local -->

      <div class="inner_local">
        <button type="submit" class="button_global type_action">
          로그인하기
        </button>
      </div>
      <!-- // inner_local -->
    </div>
    <!-- // group_button -->
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    submit() {
      const { id, password } = this

      this.$emit('parentSubmit', { id, password })
    }
  }
}
</script>
