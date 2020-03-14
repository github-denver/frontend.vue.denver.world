<template>
  <form method="post" @submit.prevent="submit" novalidate>
    <Input
      :data="{ type: 'text', className: 'local', text: '아이디', label: 'id' }"
      v-model="id"
    />

    <Input
      :data="{
        type: 'password',
        className: 'local',
        text: '패스워드',
        label: 'password'
      }"
      v-model="password"
    />

    <div class="group_button type_half">
      <div class="inner_local">
        <link-rectangle
          :data="{
            component: 'Main',
            className: 'button_global',
            text: '홈으로'
          }"
        />
      </div>

      <div class="inner_local">
        <button-rectangle
          :data="{
            type: 'submit',
            className: ['button_global', 'type_action'],
            text: '로그인하기'
          }"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Input from '@/components/common/Input'
import LinkRectangle from '@/components/link/Rectangle'
import ButtonRectangle from '@/components/button/Rectangle'

export default {
  name: 'LoginForm',
  components: { Input, LinkRectangle, ButtonRectangle },
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
