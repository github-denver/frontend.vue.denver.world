<template>
  <form method="post" @submit.prevent="submit" novalidate>
    <Input :attribute="{ type: 'text', id: 'id', className: 'full', title: '아이디 *' }" v-model="id" />

    <Input :attribute="{ type: 'password', id: 'password', className: 'full', title: '패스워드 *' }" v-model="password" />

    <div class="group_button">
      <div class="inner_half">
        <router-link :to="{ name: 'Main' }" class="link_global">홈으로</router-link>
      </div>

      <div class="inner_half">
        <rectangle-button :attribute="{ type: 'submit', className: 'button_action' }">로그인하기</rectangle-button>
      </div>
    </div>
    <!-- // group-button -->
  </form>
</template>

<script>
import Input from '@/components/common/Input'
import RectangleButton from '@/components/common/RectangleButton'

export default {
  name: 'LoginForm',
  components: { Input, RectangleButton },
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
