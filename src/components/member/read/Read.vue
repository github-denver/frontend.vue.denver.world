<template>
  <form method="post" @submit.prevent="submit" novalidate>
    <Input :attribute="{ type: 'text', id: 'id', className: 'full', title: '아이디 *' }" v-model="id" />

    <Input :attribute="{ type: 'password', id: 'password', className: 'full', title: '패스워드 *' }" v-model="password" />

    <div class="grp_gravity">
      <div class="inner_half">
        <router-link :to="{ name: 'Main' }" class="link_g">홈으로</router-link>
      </div>

      <div class="inner_half">
        <rectangle-button :attribute="{ type: 'submit', className: 'btn_action' }">로그인하기</rectangle-button>
      </div>
    </div>
    <!-- // group-button -->
  </form>
</template>

<script>
import Input from '@/components/unit/Input'
import RectangleButton from '@/components/unit/RectangleButton'

export default {
  name: 'Read',
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

<style scoped></style>
