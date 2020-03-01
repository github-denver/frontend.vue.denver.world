<!-- prettier-ignore -->
<template>
  <form method="post" enctype="multipart/form-data" v-on:submit.prevent="submit" novalidate>
    <div class="group_profile">
      <div class="inner_profile">
        <div class="group_picture">
          <img v-if="typeof user.picture !== 'undefined' || user.picture !== null || user.picture !== ''" v-bind:src="'http://localhost:3000/uploads/' + user.picture" v-bind:alt="user.name" class="thumbnail_picture" />

          <img v-else src="http://localhost:3000/uploads/default_picture.png" alt="기본 이미지" class="thumbnail_picture" />
        </div><!-- // group_picture -->

        <div class="box_photo">
          <label for="picture" class="label_local">
            <span class="ico_global ico_picture">프로필 사진</span>
          </label>

          <input type="file" name="picture" id="picture" class="field_local" ref="picture" />
        </div><!-- // box_photo -->
      </div><!-- // inner_profile -->
    </div><!-- // group_profile -->

    <div class="group_field">
      <label for="nickname" class="label_local">닉네임</label>

      <span class="field_global">
        <input type="text" name="name" id="nickname" class="field_local" value="덴버" v-model="user.name" />
      </span>

      <div class="box_result"></div>
    </div><!-- // group_field -->

    <div class="group_field">
      <label for="email" class="label_local">이메일</label>

      <span class="field_global">
        <input type="text" name="email" id="email" class="field_local" value="denver.html@daum.net" v-model="user.email" />
      </span><!-- // field_global -->
    </div><!-- // group_field -->

    <div class="group_button type_half">
      <div class="inner_local">
        <router-link v-bind:to="{ name: 'MainPage' }" class="button_global">홈으로</router-link>
      </div><!-- // inner_local -->

      <div class="inner_local">
        <button type="submit" class="button_global type_action">수정하기</button>
      </div><!-- // inner_local -->
    </div><!-- // group_button -->
  </form>
</template>

<script>
// prettier-ignore
export default {
  name: 'ProfileEditForm',
  props: {
    profile: {
      type: Object,
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
    $('.box_photo .field_local').on('change', function () {
      var $parent = $(this).closest('.box_photo').siblings('.group_picture')
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

        var $picture = $(this).closest('.box_photo').siblings('.group_picture').children('.thumbnail_picture')
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

      const picture = this.$refs.picture.files[0]
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
