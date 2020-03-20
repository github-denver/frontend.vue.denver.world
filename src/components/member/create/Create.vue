<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <div class="profile">
      <div class="inner">
        <Picture
          :attribute="{
            className: 'register',
            authorized: isAuthorized,
            picture: picture.result
          }"
        >
          <template v-slot:upload>
            <Upload :attribute="{ className: 'picture' }" @parentChange="onPictureChange">
              <template v-slot:text>프로필 사진</template>
            </Upload>
          </template>
        </Picture>
      </div>
    </div>

    <Input :attribute="{ type: 'text', id: 'id', title: '아이디 *' }" v-model="id" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="id">아이디 *</label>
      <span>
        <input type="text" id="id" v-model="id" ref="id" />
      </span>
    </input-component> -->

    <Input :attribute="{ type: 'password', id: 'password', title: '패스워드 *' }" v-model="password" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="password">패스워드 *</label>
      <span>
        <input type="password" id="password" v-model="password" ref="password" />
      </span>
    </input-component> -->

    <Input :attribute="{ type: 'password', id: 'confirm', title: '패스워드 확인 *' }" v-model="confirm" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="confirm">패스워드 확인 *</label>
      <span>
        <input type="password" id="confirm" v-model="confirm" ref="confirm" />
      </span>
    </input-component> -->

    <Input :attribute="{ type: 'text', id: 'name', title: '닉네임 *' }" v-model="name" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="name">닉네임 *</label>
      <span>
        <input type="text" id="name" v-model="name" ref="name" />
      </span>
    </input-component> -->

    <Input :attribute="{ type: 'text', id: 'email', title: '이메일 *' }" v-model="email" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="email">이메일 *</label>
      <span>
        <input type="text" id="email" v-model="email" ref="email" />
      </span>
    </input-component> -->

    <div class="group-button" :attribute="{ className: 'half' }">
      <div class="inner">
        <rectangle-link :attribute="{ className: '' }">
          <router-link :to="{ name: 'Main' }">홈으로</router-link>
        </rectangle-link>
      </div>

      <div class="inner">
        <rectangle-button :attribute="{ type: 'submit', className: 'action' }">등록하기</rectangle-button>
      </div>
    </div>
    <!-- // group-button -->
  </form>
</template>

<script>
import Picture from '@/components/common/Picture'
import Upload from '@/components/common/Upload'
import Input from '@/components/common/Input'
import RectangleButton from '@/components/common/RectangleButton'
import RectangleLink from '@/components/common/RectangleLink'

export default {
  name: 'MemberCreateForm',
  components: { Picture, Upload, Input, RectangleButton, RectangleLink },
  props: {
    isAuthorized: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      id: '',
      password: '',
      confirm: '',
      name: '',
      email: '',
      picture: {
        files: null,
        result: null
      }
    }
  },
  methods: {
    onPictureChange(payload) {
      this.picture.files = payload.get('files')
      this.picture.result = payload.get('result')
    },
    submit() {
      const { id, password, confirm, name, email } = this
      const picture = this.picture.files

      const idCheck = RegExp(/^[A-Za-z0-9_\.\-]{4,12}$/)
      const passwordCheck = RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/)
      const nameCheck = RegExp(/^[가-힣a-zA-Z0-9]{2,6}$/)
      const emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/)

      if (!id || !password || !confirm || !name || !email) {
        alert('필수 정보를 입력해주세요!')

        return false
      }

      if (!idCheck.test(id)) {
        alert('아이디는 알파벳 소·대문자 / 숫자 / - / . / _만 입력 가능하고 4자리 이상 8자리 이하로 입력해 주세요!')

        this.$refs.id.focus()

        return false
      }

      if (!passwordCheck.test(password)) {
        alert('패스워드는 알파벳 소문자 / 숫자 / 특수문자를 하나 이상 포함하고 6자리 이상 12자리 이하로 입력해 주세요!')

        this.$refs.password.focus()

        return false
      }

      if (password !== confirm) {
        alert('입력하신 패스워드가 일치하지 않아요!')

        this.$refs.confirm.focus()

        return false
      }

      if (!nameCheck.test(name)) {
        alert('닉네임은 한글과 알파벳 / 숫자만 입력 가능하고 2자리 이상 6자리 이하로 입력해 주세요!')

        this.$refs.name.focus()

        return false
      }

      if (!emailCheck.test(email)) {
        alert('이메일을 바르게 입력해 주세요!')

        this.$refs.email.focus()

        return false
      }

      const formData = new FormData()
      formData.append('id', id)
      formData.append('name', name)
      formData.append('password', password)
      formData.append('email', email)
      formData.append('picture', picture)

      this.$emit('parentSubmit', formData)
    }
  }
}
</script>
