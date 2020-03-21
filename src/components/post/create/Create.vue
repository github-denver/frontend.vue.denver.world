<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <design-select
      :attribute="{
        className: 'full'
      }"
      :select="select"
      @parentChange="onChange"
    />

    <div class="post_read">
      <div class="post_header">
        <Input :attribute="{ type: 'text', id: 'subject', title: '제목', className: 'underline' }" v-model="subject" />
      </div>

      <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="content"></vue-editor>

      <div class="post_footer">
        <Input :attribute="{ type: 'file', id: 'thumbnail', title: '대표 이미지', className: 'full' }" v-model="thumbnail" />
      </div>
    </div>

    <div class="group_button">
      <div class="inner_half">
        <router-link
          :to="{
            name: 'PostList',
            params: {
              service: category2,
              number: '1'
            }
          }"
          class="link_global"
          >목록으로</router-link
        >
      </div>

      <div class="inner_half">
        <rectangle-button :attribute="{ type: 'submit', className: 'button_action' }">등록하기</rectangle-button>
      </div>
    </div>
    <!-- // group-button -->
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'

import DesignSelect from '@/components/common/DesignSelect'
import Input from '@/components/common/Input'
import RectangleButton from '@/components/common/RectangleButton'

import api from '@/api'

export default {
  name: 'PostCreateForm',
  components: { DesignSelect, Input, RectangleButton, VueEditor },
  props: {
    category2: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      select: {
        // 카테고리
        category: '',
        data: [
          {
            optgroup: {
              text: '새소식',
              value: 'news',
              option: [
                {
                  text: '공지사항',
                  value: 'notice'
                },
                {
                  text: '업데이트',
                  value: 'update'
                },
                {
                  text: '이벤트',
                  value: 'event'
                }
              ]
            }
          },
          {
            optgroup: {
              text: '커뮤니티',
              value: 'community',
              option: [
                {
                  text: '톡톡 한마디',
                  value: 'talk'
                },
                {
                  text: '이미지 게시판',
                  value: 'gallery'
                }
              ]
            }
          },
          {
            optgroup: {
              text: '자료실',
              value: 'library',
              option: [
                {
                  text: '음악',
                  value: 'music'
                },
                {
                  text: '동영상',
                  value: 'video'
                }
              ]
            }
          }
        ]
      },
      category: '',
      subject: '',
      content: '',
      // download: ''
      thumbnail: ''
    }
  },
  created() {
    console.log('[PostCreateForm.vue] created() → this.category2: ', this.category2)

    this.select.category = this.category2
    console.log('[PostCreateForm.vue] created() → this.category: ', this.category)
  },
  computed: {
    ...mapGetters(['path', 'uploads'])
  },
  methods: {
    submit() {
      const { category, subject, content } = this
      console.log('[PostCreateForm.vue] submit() → category: ', category)
      console.log('[PostCreateForm.vue] submit() → subject: ', subject)
      console.log('[PostCreateForm.vue] submit() → content: ', content)

      const thumbnail = this.thumbnail // this.$refs.picture.files[0]
      console.log('★[PostCreateForm.vue] methods() → submit → thumbnail: ', thumbnail)

      const formData = new FormData()
      formData.append('category', category)
      formData.append('subject', subject)
      formData.append('content', content)
      formData.append('thumbnail', thumbnail)

      this.$emit('parentSubmit', formData)
    },
    onChange(payload) {
      const { text, value } = payload
      console.log('[PostCreateForm.vue] methods() → onChange → payload: ', payload)

      this.category = value
    },
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      console.log('[PostCreateForm.vue] methods() → handleImageAdded → file: ', file)
      console.log('[PostCreateForm.vue] methods() → handleImageAdded → Editor: ', Editor)
      console.log('[PostCreateForm.vue] methods() → handleImageAdded → cursorLocation: ', cursorLocation)
      console.log('[PostCreateForm.vue] methods() → handleImageAdded → resetUploader: ', resetUploader)

      const formData = new FormData()
      formData.append('picture', file)

      api
        .post(`/api/board/${this.category}/upload`, formData)
        .then((result) => {
          console.log('[PostCreateForm.vue] methods() → handleImageAdded → result: ', result)
          console.log('[PostCreateForm.vue] methods() → handleImageAdded → result.data: ', result.data)
          console.log('[PostCreateForm.vue] methods() → handleImageAdded → result.data.image[0]: ', result.data.image[0])
          console.log('[PostCreateForm.vue] methods() → handleImageAdded → result.data.image[0].imageurl: ', result.data.image[0].imageurl)

          const folder = 'uploads'
          const url = result.data.image[0].imageurl
          console.log('[PostCreateForm.vue] methods() → handleImageAdded → url: ', url)

          const name = result.data.image[0].filename
          console.log('[PostCreateForm.vue] methods() → handleImageAdded → name: ', name)

          Editor.insertEmbed(cursorLocation, 'image', `${path}${url}`)

          resetUploader()

          /* console.log(
            "[PostCreateForm.vue] methods() → handleImageAdded → document.querySelector('.list_preview').childNodes: ",
            document.querySelector('.list_preview').childNodes
          ) */
          /* console.log(
            "[PostCreateForm.vue] methods() → handleImageAdded → document.querySelector('.list_preview').childNodes.length: ",
            document.querySelector('.list_preview').childNodes.length
          ) */

          /* let thumbnail = {
            html: '',
            length: document.querySelector('.list_preview').childNodes.length
          } */
          // console.log('[PostCreateForm.vue] methods() → handleImageAdded → thumbnail.length: ', thumbnail.length)

          // thumbnail.html += '<li>'
          // thumbnail.html += '<span class="box_preview">'
          // thumbnail.html += '<input type="radio" name="thumbnail" id="thumbnail' + thumbnail.length + '" class="input_thumbnail" value="' + name + '" checked>'
          /* thumbnail.html +=
            '<label for="thumbnail' +
            thumbnail.length +
            '" class="label_thumbnail" style="background-image:url(\'http://localhost:3000' +
            url +
            '\')">' +
            name +
            '</label>' */
          // thumbnail.html += '</span>'
          // thumbnail.html += '</li>'

          // console.log('[PostCreateForm.vue] methods() → handleImageAdded → thumbnail.html: ', thumbnail.html)

          // $('.board_footer').removeClass('screen_out')
          // $('.list_preview').append(thumbnail.html)
        })
        .catch((error) => {
          alert('실패했어요.. ㅠㅜ')

          console.error(error)
        })
    }
  }
}
</script>

<style>
/*
.quillWrapper {
  padding-top: 10px;
  border-top: 1px solid #e9e9e9;
}
*/
</style>
