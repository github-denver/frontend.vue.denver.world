<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <div class="group_profile">
      <div class="inner_profile">
        <Picture :isAuthorized="isAuthorized" :user="user" />

        <Upload :data="{ type: 'file', className: 'picture', text: '프로필 사진' }" />
      </div>
    </div>

    <div class="group_field">
      <label for="nickname" class="label_local">닉네임</label>

      <span class="field_global">
        <input type="text" name="name" id="nickname" class="field_local" value="덴버" v-model="user.name" />
      </span>

      <div class="box_result"></div>
    </div>

    <div class="group_field">
      <label for="email" class="label_local">이메일</label>

      <span class="field_global"><input type="text" name="email" id="email" class="field_local" value="denver.html@daum.net" v-model="user.email"/></span>
    </div>

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
            text: '수정하기'
          }"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Picture from '@/components/picture/Picture'
import Upload from '@/components/picture/Upload'

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
