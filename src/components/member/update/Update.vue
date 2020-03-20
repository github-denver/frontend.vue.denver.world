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

    <Input :attribute="{ type: 'text', id: 'name', title: '닉네임 *' }" v-model="name" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="name">닉네임 *</label>
      <span>
        <input type="text" id="name" v-model="name" />
      </span>
    </input-component> -->

    <Input :attribute="{ type: 'text', id: 'email', title: '이메일 *' }" v-model="email" />

    <!-- <input-component :attribute="{ className: 'full' }">
      <label for="email">이메일 *</label>
      <span>
        <input type="text" id="email" v-model="email" />
      </span>
    </input-component> -->

    <div class="group-button" :attribute="{ className: 'half' }">
      <div class="inner">
        <rectangle-link :attribute="{ className: '' }">
          <router-link :to="{ name: 'Main' }">홈으로</router-link>
        </rectangle-link>
      </div>

      <div class="inner">
        <rectangle-button :attribute="{ type: 'submit', className: 'action' }">수정하기</rectangle-button>
      </div>
    </div>
    <!-- // group-button -->
  </form>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import Picture from '@/components/common/Picture'
import Upload from '@/components/common/Upload'
import Input from '@/components/common/Input'
import RectangleButton from '@/components/common/RectangleButton'
import RectangleLink from '@/components/common/RectangleLink'

export default {
  name: 'ProfileEditForm',
  components: { Picture, Upload, Input, RectangleButton, RectangleLink },
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

        this.$refs.name.focus()

        return false
      }

      if (!emailCheck.test(email)) {
        alert('이메일을 바르게 입력해 주세요!')

        this.$refs.email.focus()

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
