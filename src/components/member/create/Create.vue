<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <fieldset>
      <legend class="screen_out">회원가입 양식</legend>
      <Picture
        :attribute="{
          authorized: isAuthorized,
          picture: picture.result,
          className: 'register'
        }"
      >
        <template v-slot:upload>
          <Upload :attribute="{ id: 'picture', icon: 'ico_picture' }" @parentChange="onPictureChange">
            <template v-slot:text>프로필 사진</template>
          </Upload>
        </template>
      </Picture>

      <Input :attribute="{ type: 'text', id: 'id', className: 'full', title: '아이디 *' }" v-model="id" />

      <Input :attribute="{ type: 'password', id: 'password', className: 'full', title: '패스워드 *' }" v-model="password" />

      <Input :attribute="{ type: 'password', id: 'confirm', className: 'full', title: '패스워드 확인 *' }" v-model="confirm" />

      <Input :attribute="{ type: 'text', id: 'name', className: 'full', title: '닉네임 *' }" v-model="name" />

      <Input :attribute="{ type: 'text', id: 'email', className: 'full', title: '이메일 *' }" v-model="email" />

      <div class="grp_gravity">
        <div class="inner_half">
          <router-link :to="{ name: 'Main' }" class="link_global">홈으로</router-link>
        </div>

        <div class="inner_half">
          <rectangle-button :attribute="{ type: 'submit', className: 'btn_action' }">등록하기</rectangle-button>
        </div>
      </div>
      <!-- // grp_gravity -->
    </fieldset>
  </form>
</template>

<script>
import Picture from '@/components/common/Picture'
import Upload from '@/components/common/Upload'
import Input from '@/components/unit/Input'
import RectangleButton from '@/components/unit/RectangleButton'

export default {
  name: 'MemberCreateForm',
  components: { Picture, Upload, Input, RectangleButton },
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

        // this.$refs.id.focus()
        document.querySelector('#id').focus()

        return false
      }

      if (!passwordCheck.test(password)) {
        alert('패스워드는 알파벳 소문자 / 숫자 / 특수문자를 하나 이상 포함하고 6자리 이상 12자리 이하로 입력해 주세요!')

        // this.$refs.password.focus()
        document.querySelector('#password').focus()

        return false
      }

      if (password !== confirm) {
        alert('입력하신 패스워드가 일치하지 않아요!')

        // this.$refs.confirm.focus()
        document.querySelector('#confirm').focus()

        return false
      }

      if (!nameCheck.test(name)) {
        alert('닉네임은 한글과 알파벳 / 숫자만 입력 가능하고 2자리 이상 6자리 이하로 입력해 주세요!')

        // this.$refs.name.focus()
        document.querySelector('#name').focus()

        return false
      }

      if (!emailCheck.test(email)) {
        alert('이메일을 바르게 입력해 주세요!')

        // this.$refs.email.focus()
        document.querySelector('#email').focus()

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
