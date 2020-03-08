<template>
  <form method="post" enctype="multipart/form-data" v-on:submit.prevent="submit" novalidate>
    <div class="group_profile">
      <div class="inner_profile">
        <Picture v-bind:isAuthorized="isAuthorized" />

        <Upload
          v-bind:data="{
            type: 'file',
            className: 'picture',
            text: 'Upload: 프로필 사진'
          }"
        />
      </div>
    </div>

    <div class="group_field">
      <label for="id" class="label_local">아이디 *</label>
      <span class="field_global">
        <input type="text" id="id" class="field_local" v-model="id" />
      </span>

      <div class="box_result"></div>
    </div>

    <div class="group_field">
      <label for="password" class="label_local">패스워드 *</label>
      <span class="field_global">
        <input type="password" id="password" class="field_local" v-model="password" />
      </span>
    </div>

    <div class="group_field">
      <label for="confirm" class="label_local">패스워드 확인 *</label>
      <span class="field_global">
        <input type="password" id="confirm" class="field_local" v-model="confirm" />
      </span>
    </div>

    <div class="group_field">
      <label for="name" class="label_local">닉네임 *</label>
      <span class="field_global">
        <input type="text" id="name" class="field_local" v-model="name" />
      </span>

      <div class="box_result"></div>
    </div>

    <div class="group_field">
      <label for="email" class="label_local">이메일</label>
      <span class="field_global">
        <input type="text" id="email" class="field_local" v-model="email" />
      </span>
    </div>

    <div class="group_button type_half">
      <div class="inner_local">
        <link-rectangle
          v-bind:data="{
            component: 'Main',
            className: 'button_global',
            text: 'rectangle: 홈으로'
          }"
        />
      </div>

      <div class="inner_local">
        <button-rectangle
          v-bind:data="{
            type: 'submit',
            className: ['button_global', 'type_action'],
            text: 'rectangle: 등록하기'
          }"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Picture from '@/components/common/Picture'
import Upload from '@/components/common/Upload'
import LinkRectangle from '@/components/link/Rectangle'
import ButtonRectangle from '@/components/button/Rectangle'

export default {
  name: 'MemberCreateForm',
  components: { Picture, Upload, LinkRectangle, ButtonRectangle },
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
      email: ''
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
