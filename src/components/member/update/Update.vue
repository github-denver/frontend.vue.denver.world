<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <Picture
      :attribute="{
        authorized: isAuthorized,
        picture: picture.result,
        className: 'register'
      }"
    >
      <template v-slot:upload>
        <Upload :attribute="{ id: 'picture', icon: 'icon_picture' }" @parentChange="onPictureChange">
          <template v-slot:text>프로필 사진</template>
        </Upload>
      </template>
    </Picture>

    <Input
      :attribute="{
        type: 'text',
        id: 'name',
        className: 'full',
        title: '닉네임 *',
        value: user.name
      }"
      v-model="name"
    />

    <Input
      :attribute="{
        type: 'text',
        id: 'email',
        className: 'full',
        title: '이메일 *',
        value: user.email
      }"
      v-model="email"
    />

    <div class="group_button" :attribute="{ className: 'half' }">
      <div class="inner_half">
        <router-link :to="{ name: 'Main' }" class="link_global">홈으로</router-link>
      </div>

      <div class="inner_half">
        <rectangle-button :attribute="{ type: 'submit', className: 'button_action' }">수정하기</rectangle-button>
      </div>
    </div>
    <!-- // group_button -->
  </form>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import Picture from '@/components/common/Picture'
import Upload from '@/components/common/Upload'
import Input from '@/components/common/Input'
import RectangleButton from '@/components/common/RectangleButton'

export default {
  name: 'ProfileEditForm',
  components: { Picture, Upload, Input, RectangleButton },
  props: {
    profile: {
      type: Object,
      required: true
    },
    isAuthorized: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: '',
      email: '',
      picture: {
        files: null,
        result: null
      }
    }
  },
  created() {
    this.name = this.user.name
    this.email = this.user.email
  },
  computed: {
    ...mapGetters(['path', 'uploads']),
    ...mapState(['user'])
  },
  methods: {
    onPictureChange(payload) {
      this.picture.files = payload.get('files')
      this.picture.result = payload.get('result')
    },
    submit() {
      const { name, email } = this
      const picture = this.picture.files

      const idCheck = RegExp(/^[A-Za-z0-9_\.\-]{4,12}$/)
      const passwordCheck = RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/)
      const nameCheck = RegExp(/^[가-힣a-zA-Z0-9]{2,6}$/)
      const emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/)

      if (!name || !email) {
        alert('필수 정보를 입력해주세요!')

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
      formData.append('name', name)
      formData.append('email', email)
      formData.append('picture', picture)

      this.$emit('parentSubmit', formData)
    }
  }
}
</script>
