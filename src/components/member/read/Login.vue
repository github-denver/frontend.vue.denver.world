<template>
  <form method="post" @submit.prevent="submit" novalidate>
    <input-component :attribute="{ className: 'full' }">
      <label for="id">아이디 *</label>
      <span>
        <input type="text" id="id" v-model="id" />
      </span>
    </input-component>

    <input-component :attribute="{ className: 'full' }">
      <label for="password">패스워드 *</label>
      <span>
        <input type="password" id="password" v-model="password" />
      </span>
    </input-component>

    <group-button-component :attribute="{ className: 'half' }">
      <div class="inner">
        <rectangle-link :attribute="{ className: '' }">
          <router-link :to="{ name: 'Main' }">홈으로</router-link>
        </rectangle-link>
      </div>

      <div class="inner">
        <rectangle-button :attribute="{ type: 'submit', className: 'action' }">로그인하기</rectangle-button>
      </div>
    </group-button-component>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  components: {},
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
