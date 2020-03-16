<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <div class="profile">
      <div class="inner">
        <Picture
          :attribute="{
            authorized: isAuthorized,
            className: 'register',
            picture: picture
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

    <input-component :attribute="{ className: 'full' }">
      <label for="confirm">패스워드 확인 *</label>
      <span>
        <input type="password" id="confirm" v-model="confirm" />
      </span>
    </input-component>

    <input-component :attribute="{ className: 'full' }">
      <label for="name">닉네임 *</label>
      <span>
        <input type="text" id="name" v-model="name" />
      </span>
    </input-component>

    <input-component :attribute="{ className: 'full' }">
      <label for="email">이메일 *</label>
      <span>
        <input type="text" id="email" v-model="email" />
      </span>
    </input-component>

    <group-button-component :attribute="{ className: 'half' }">
      <div class="inner">
        <rectangle-link :attribute="{ className: '' }">
          <router-link :to="{ name: 'Main' }">홈으로</router-link>
        </rectangle-link>
      </div>

      <div class="inner">
        <rectangle-button :attribute="{ type: 'submit', className: 'action' }">등록하기</rectangle-button>
      </div>
    </group-button-component>
  </form>
</template>

<script>
import Picture from '@/components/common/Picture'
import Upload from '@/components/common/Upload'

export default {
  name: 'MemberCreateForm',
  components: { Picture, Upload },
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
      picture: ''
    }
  },
  mounted() {
    $('.box_photo .field_local').on('change', function() {
      var $parent = $(this)
        .closest('.box_photo')
        .siblings('.group_picture')
      console.log('[MemberCreateForm.vue] $parent: ', $parent)

      console.log(' ')

      console.log('[MemberCreateForm.vue] window.FileReader: ', window.FileReader)
      if (window.FileReader) {
        console.log('[MemberCreateForm.vue] if (window.FileReader) { .. }: true')

        console.log(' ')

        console.log('[MemberCreateForm.vue] $(this)[0].files[0]: ', $(this)[0].files[0])
        console.log('[MemberCreateForm.vue] $(this)[0].files[0].type: ', $(this)[0].files[0].type)

        console.log(' ')

        console.log('[MemberCreateForm.vue] $(this)[0].files[0].type.match(/image/): ', $(this)[0].files[0].type.match(/image\//))
        console.log('[MemberCreateForm.vue] !$(this)[0].files[0].type.match(/image/): ', !$(this)[0].files[0].type.match(/image\//))

        console.log(' ')

        if (!$(this)[0].files[0].type.match(/image\//)) {
          // 이미지 파일만..
          return
        }

        // 읽기..
        var reader = new FileReader()
        reader.readAsDataURL($(this)[0].files[0])
        console.log('[MemberCreateForm.vue] $(this)[0].files[0]: ', $(this)[0].files[0])

        console.log(' ')

        // 로드 한 후
        reader.onload = function(event) {
          var result = event.target.result
          // console.log('[MemberCreateForm.vue] result: ', result)

          console.log(' ')

          $parent.children('.thumbnail_picture').attr('src', result)

          /*
          clearTimeout(timeout)

          timeout = setTimeout(function () {
            console.log("[MemberCreateForm.vue] $('form')[0]: ", $('form')[0])
            console.log("[MemberCreateForm.vue] $('form')[0].email: ", $('form')[0].email)
            console.log("[MemberCreateForm.vue] $('form')[0].picture: ", $('form')[0].picture)

            console.log(' ')

            var formData = new FormData($('form')[0])
            // formData.append('', .value)
            console.log('[MemberCreateForm.vue] formData: ', formData)

            $.ajax({
              type: 'post',
              url: '/member/picture',
              data: formData,
              processData: false,
              contentType: false,
              success: function (response) {
                console.log('[MemberCreateForm.vue] 성공하였습니다.')
                console.log('[MemberCreateForm.vue] response: ', response)

                console.log(' ')
              },
              error: function () {
                console.log('[MemberCreateForm.vue] 실패하였습니다.')

                console.log(' ')
              },
            })
          }, 400)
          */
        }
      } else {
        console.log('[MemberCreateForm.vue] if (window.FileReader) { .. }: false')

        console.log(' ')

        var $picture = $(this)
          .closest('.box_photo')
          .siblings('.group_picture')
          .children('.thumbnail_picture')
        var text = document.selection.createRange().text
        console.log('[MemberCreateForm.vue] $picture: ', $picture)
        console.log('[MemberCreateForm.vue] text: ', text)

        console.log(' ')

        $picture[0].src = text
      }
    })
  },
  methods: {
    onPictureChange(payload) {
      console.log('payload: ', payload)
      console.log("payload.get('url'): ", payload.get('url'))
      this.picture = payload.get('url')
      console.log('this.picture : ', this.picture)
    },
    submit() {
      const { id, password, confirm, name, email } = this
      console.log('[MemberCreateForm.vue] methods() → submit → id: ', id)
      console.log('[MemberCreateForm.vue] methods() → submit → password: ', password)
      console.log('[MemberCreateForm.vue] methods() → submit → confirm: ', confirm)
      console.log('[MemberCreateForm.vue] methods() → submit → name: ', name)
      console.log('[MemberCreateForm.vue] methods() → submit → email: ', email)

      // const picture = this.$refs.picture.files[0]
      const picture = ''
      console.log('[MemberCreateForm.vue] methods() → submit → picture: ', picture)

      if (!id || !password || !confirm || !name) {
        alert('필수 정보를 입력해주세요!')

        return false
      }

      if (password !== confirm) {
        alert('입력하신 패스워드가 일치하지 않아요!')

        return false
      }

      const formData = new FormData()
      formData.append('picture', picture)
      formData.append('id', id)
      formData.append('password', password)
      formData.append('name', name)
      formData.append('email', email)

      this.$emit('parentSubmit', formData)
    }
  }
}
</script>
