<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <div class="profile">
      <div class="inner">
        <Picture
          :attribute="{
            authorized: isAuthorized,
            user: user,
            className: 'register'
          }"
        />

        <Upload :attribute="{ className: 'picture' }">
          <template v-slot:text>프로필 사진</template>
        </Upload>
      </div>
    </div>

    <input-component :attribute="{ className: 'full' }">
      <label for="nickname">닉네임</label>
      <span>
        <input type="text" name="name" id="nickname" v-model="user.name" />
      </span>
    </input-component>

    <input-component :attribute="{ className: 'full' }">
      <label for="email">이메일</label>
      <span>
        <input type="text" name="email" id="email" v-model="user.email" />
      </span>
    </input-component>

    <group-button-component :attribute="{ className: 'half' }">
      <div class="inner">
        <rectangle-link :attribute="{ className: '' }">
          <router-link :to="{ name: 'Main' }">홈으로</router-link>
        </rectangle-link>
      </div>

      <div class="inner">
        <rectangle-button :attribute="{ type: 'submit', className: 'action' }">수정하기</rectangle-button>
      </div>
    </group-button-component>
  </form>
</template>

<script>
import Picture from '@/components/common/Picture'
import Upload from '@/components/common/Upload'
export default {
  name: 'ProfileEditForm',
  components: { Picture, Upload },
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
      user: {
        name: '',
        email: ''
      }
    }
  },
  created() {
    console.log('[ProfileEditForm.vue] created() → this.profile: ', this.profile)

    this.user.name = this.profile.name
    this.user.email = this.profile.email
    this.user.picture = this.profile.picture
  },
  mounted() {
    $('.box_photo .field_local').on('change', function() {
      var $parent = $(this)
        .closest('.box_photo')
        .siblings('.group_picture')
      console.log('[ProfileEditForm.vue] $parent: ', $parent)

      console.log(' ')

      console.log('[ProfileEditForm.vue] window.FileReader: ', window.FileReader)
      if (window.FileReader) {
        console.log('[ProfileEditForm.vue] if (window.FileReader) { .. }: true')

        console.log(' ')

        console.log('[ProfileEditForm.vue] $(this)[0].files[0]: ', $(this)[0].files[0])
        console.log('[ProfileEditForm.vue] $(this)[0].files[0].type: ', $(this)[0].files[0].type)

        console.log(' ')

        console.log('[ProfileEditForm.vue] $(this)[0].files[0].type.match(/image/): ', $(this)[0].files[0].type.match(/image\//))
        console.log('[ProfileEditForm.vue] !$(this)[0].files[0].type.match(/image/): ', !$(this)[0].files[0].type.match(/image\//))

        console.log(' ')

        if (!$(this)[0].files[0].type.match(/image\//)) {
          // 이미지 파일만..
          return
        }

        // 읽기..
        var reader = new FileReader()
        reader.readAsDataURL($(this)[0].files[0])
        console.log('[ProfileEditForm.vue] $(this)[0].files[0]: ', $(this)[0].files[0])

        console.log(' ')

        // 로드 한 후
        reader.onload = function(event) {
          var result = event.target.result
          // console.log('[ProfileEditForm.vue] result: ', result)

          console.log(' ')

          $parent.children('.thumbnail_picture').attr('src', result)

          /*
          clearTimeout(timeout)

          timeout = setTimeout(function () {
            console.log("[ProfileEditForm.vue] $('form')[0]: ", $('form')[0])
            console.log("[ProfileEditForm.vue] $('form')[0].email: ", $('form')[0].email)
            console.log("[ProfileEditForm.vue] $('form')[0].picture: ", $('form')[0].picture)

            console.log(' ')

            var formData = new FormData($('form')[0])
            // formData.append('', .value)
            console.log('[ProfileEditForm.vue] formData: ', formData)

            $.ajax({
              type: 'post',
              url: '/member/picture',
              data: formData,
              processData: false,
              contentType: false,
              success: function (response) {
                console.log('[ProfileEditForm.vue] 성공하였습니다.')
                console.log('[ProfileEditForm.vue] response: ', response)

                console.log(' ')
              },
              error: function () {
                console.log('[ProfileEditForm.vue] 실패하였습니다.')

                console.log(' ')
              },
            })
          }, 400)
          */
        }
      } else {
        console.log('[ProfileEditForm.vue] if (window.FileReader) { .. }: false')

        console.log(' ')

        var $picture = $(this)
          .closest('.box_photo')
          .siblings('.group_picture')
          .children('.thumbnail_picture')
        var text = document.selection.createRange().text
        console.log('[ProfileEditForm.vue] $picture: ', $picture)
        console.log('[ProfileEditForm.vue] text: ', text)

        console.log(' ')

        $picture[0].src = text
      }
    })
  },
  methods: {
    submit() {
      const { name, email } = this.user
      console.log('[ProfileEditForm.vue] methods() → submit → name: ', name)
      console.log('[ProfileEditForm.vue] methods() → submit → email: ', email)

      // const picture = this.$refs.picture.files[0]
      const picture = ''
      console.log('[ProfileEditForm.vue] methods() → submit → picture: ', picture)

      const formData = new FormData()
      formData.append('picture', picture)
      formData.append('name', name)
      formData.append('email', email)

      this.$emit('parentSubmit', formData)
    }
  }
}
</script>
