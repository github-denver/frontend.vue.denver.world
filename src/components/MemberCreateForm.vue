<template>
  <form
    method="post"
    enctype="multipart/form-data"
    v-on:submit.prevent="submit"
    novalidate
  >
    <div class="group_profile">
      <div class="inner_profile">
        <div class="box_picture">
          <img
            src="http://localhost:3000/uploads/default_picture.png"
            alt="기본 이미지"
            class="img_picture"
          />
        </div>
        <!-- // box_picture -->

        <div class="box_photo">
          <label for="picture" class="label_local"
            ><span class="ico_global ico_picture">프로필 사진</span></label
          >
          <input
            type="file"
            name="picture"
            id="picture"
            class="field_local"
            ref="picture"
          />
        </div>
        <!-- // box_photo -->
      </div>
      <!-- // inner_profile -->
    </div>
    <!-- // group_profile -->

    <div class="group_field">
      <label for="id" class="label_local">아이디 *</label>
      <span class="field_global"
        ><input type="text" id="id" class="field_local" v-model="id"/></span
      ><!-- // field_global -->

      <div class="box_result"></div>
    </div>
    <!-- // group_field -->

    <div class="group_field">
      <label for="password" class="label_local">패스워드 *</label>
      <span class="field_global"
        ><input
          type="password"
          id="password"
          class="field_local"
          v-model="password"/></span
      ><!-- // field_global -->
    </div>
    <!-- // group_field -->

    <div class="group_field">
      <label for="confirm" class="label_local">패스워드 확인 *</label>
      <span class="field_global"
        ><input
          type="password"
          id="confirm"
          class="field_local"
          v-model="confirm"/></span
      ><!-- // field_global -->
    </div>
    <!-- // group_field -->

    <div class="group_field">
      <label for="name" class="label_local">닉네임 *</label>
      <span class="field_global"
        ><input type="text" id="name" class="field_local" v-model="name"/></span
      ><!-- // field_global -->

      <div class="box_result"></div>
    </div>
    <!-- // group_field -->

    <div class="group_field">
      <label for="email" class="label_local">이메일</label>
      <span class="field_global"
        ><input
          type="text"
          id="email"
          class="field_local"
          v-model="email"/></span
      ><!-- // field_global -->
    </div>
    <!-- // group_field -->

    <div class="group_button type_half">
      <div class="inner_local">
        <router-link v-bind:to="{ name: 'MainPage' }" class="button_global"
          >홈으로</router-link
        >
      </div>
      <!-- // inner_local -->

      <div class="inner_local">
        <button type="submit" class="button_global">등록하기</button>
      </div>
      <!-- // inner_local -->
    </div>
    <!-- // group_button -->
  </form>
</template>

<script>
export default {
  name: 'MemberCreateForm',
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
    // prettier-ignore
    $('.box_photo .field_local').on('change', function () {
      var $parent = $(this).closest('.box_photo').siblings('.box_picture')
      console.log('$parent: ', $parent)

      console.log(' ')

      console.log('window.FileReader: ', window.FileReader)
      if (window.FileReader) {
        console.log('if (window.FileReader) { .. }: true')

        console.log(' ')

        console.log('$(this)[0].files[0]: ', $(this)[0].files[0])
        console.log('$(this)[0].files[0].type: ', $(this)[0].files[0].type)

        console.log(' ')

        console.log('$(this)[0].files[0].type.match(/image/): ', $(this)[0].files[0].type.match(/image\//))
        console.log('!$(this)[0].files[0].type.match(/image/): ', !$(this)[0].files[0].type.match(/image\//))

        console.log(' ')

        if (!$(this)[0].files[0].type.match(/image\//)) {
          // 이미지 파일만..
          return
        }

        // 읽기..
        var reader = new FileReader()
        reader.readAsDataURL($(this)[0].files[0])
        console.log('$(this)[0].files[0]: ', $(this)[0].files[0])

        console.log(' ')

        // 로드 한 후
        reader.onload = function(event) {
          var result = event.target.result
          // console.log('result: ', result)

          console.log(' ')

          $parent.children('.img_picture').attr('src', result)

          /*
          clearTimeout(timeout)

          timeout = setTimeout(function () {
            console.log("$('form')[0]: ", $('form')[0])
            console.log("$('form')[0].email: ", $('form')[0].email)
            console.log("$('form')[0].picture: ", $('form')[0].picture)

            console.log(' ')

            var formData = new FormData($('form')[0])
            // formData.append('', .value)
            console.log('formData: ', formData)

            $.ajax({
              type: 'post',
              url: '/member/picture',
              data: formData,
              processData: false,
              contentType: false,
              success: function (response) {
                console.log('성공하였습니다.')
                console.log('response: ', response)

                console.log(' ')
              },
              error: function () {
                console.log('실패하였습니다.')

                console.log(' ')
              },
            })
          }, 400)
          */
        }
      } else {
        console.log('if (window.FileReader) { .. }: false')

        console.log(' ')

        var $picture = $(this).closest('.box_photo').siblings('.box_picture').children('.img_picture')
        var text = document.selection.createRange().text
        console.log('$picture: ', $picture)
        console.log('text: ', text)

        console.log(' ')

        $picture[0].src = text
      }
    })
  },
  methods: {
    submit() {
      const { id, password, confirm, name, email } = this
      console.log('[MemberCreateForm.vue] methods() → submit → id: ', id)
      console.log('[MemberCreateForm.vue] methods() → submit → password: ', password) // prettier-ignore
      console.log('[MemberCreateForm.vue] methods() → submit → confirm: ', confirm) // prettier-ignore
      console.log('[MemberCreateForm.vue] methods() → submit → name: ', name)
      console.log('[MemberCreateForm.vue] methods() → submit → email: ', email)

      const picture = this.$refs.picture.files[0]
      console.log('[MemberCreateForm.vue] methods() → submit → picture: ', picture) // prettier-ignore

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
