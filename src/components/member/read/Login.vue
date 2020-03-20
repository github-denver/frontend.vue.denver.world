<template>
  <form method="post" @submit.prevent="submit" novalidate>
    <Input :attribute="{ type: 'text', id: 'id', title: '아이디 *' }" v-model="id" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="id">아이디 *</label>
      <span>
        <input type="text" id="id" v-model="id" />
      </span>
    </input-component> -->

    <Input :attribute="{ type: 'password', id: 'password', title: '패스워드 *' }" v-model="password" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="password">패스워드 *</label>
      <span>
        <input type="password" id="password" v-model="password" />
      </span>
    </input-component> -->

    <div class="group-button" :attribute="{ className: 'half' }">
      <div class="inner">
        <rectangle-link :attribute="{ className: '' }">
          <router-link :to="{ name: 'Main' }">홈으로</router-link>
        </rectangle-link>
      </div>

      <div class="inner">
        <rectangle-button :attribute="{ type: 'submit', className: 'action' }">로그인하기</rectangle-button>
      </div>
    </div>
    <!-- // group-button -->
  </form>
</template>

<script>
import Input from '@/components/common/Input'
import RectangleButton from '@/components/common/RectangleButton'
import RectangleLink from '@/components/common/RectangleLink'

export default {
  name: 'LoginForm',
  components: { Input, RectangleButton, RectangleLink },
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
