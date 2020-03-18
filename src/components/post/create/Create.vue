<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="submit" novalidate>
    <select2 :select="select" @parentChange="onChange" />

    <div class="group_board">
      <div class="board_header">
        <input-component :attribute="{ className: 'write' }">
          <label for="subject">제목</label>
          <span>
            <input type="text" id="subject" v-model="subject" />
          </span>
        </input-component>
      </div>

      <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="content"></vue-editor>

      <div class="board_footer screen_out">
        <div class="group_download">
          <!-- <span class="group_field">
            <span class="title_local">대표 이미지</span>
            <span class="field_global"><input type="file" name="Thumbnail" class="field_local" ref="thumb"/></span>
          </span> -->

          <input-component :attribute="{ className: 'full' }">
            <label for="thumbnail">대표 이미지</label>
            <span>
              <input type="file" id="thumbnail" />
            </span>
          </input-component>
        </div>
      </div>
    </div>

    <group-button-component :attribute="{ className: 'half' }">
      <div class="inner">
        <rectangle-link :attribute="{ className: '' }">
          <router-link
            :to="{
              name: 'PostList',
              params: {
                service: category2,
                number: '1'
              }
            }"
            >목록으로</router-link
          >
        </rectangle-link>
      </div>

      <div class="inner">
        <rectangle-button :attribute="{ type: 'submit', className: 'action' }">등록하기</rectangle-button>
      </div>
    </group-button-component>
  </form>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import Select2 from '@/components/common/Select'

import api from '@/api'

export default {
  name: 'PostCreateForm',
  components: { Select2, VueEditor },
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
      content: ''
      // download: ''
      // thumbnail: ''
    }
  },
  created() {
    console.log('[PostCreateForm.vue] created() → this.category2: ', this.category2)

    this.select.category = this.category2
    console.log('[PostCreateForm.vue] created() → this.category: ', this.category)
  },
  methods: {
    submit() {
      // const { category, subject, content, download } = this
      const { category, subject, content } = this
      console.log('[PostCreateForm.vue] submit() → category: ', category)
      console.log('[PostCreateForm.vue] submit() → subject: ', subject)
      console.log('[PostCreateForm.vue] submit() → content: ', content)
      // console.log('[PostCreateForm.vue] submit() → download: ', download)

      // const inputThumbnail = document.getElementsByClassName('input_thumbnail')
      // console.log('[PostCreateForm.vue] inputThumbnail: ', inputThumbnail)

      /* const getValues = (() => {
        console.log('[PostCreateForm.vue] inputThumbnail.length: ', inputThumbnail.length)

        for (let i = 0; i < inputThumbnail.length; i++) {
          console.log('[PostCreateForm.vue] inputThumbnail[i].checked: ', inputThumbnail[i].checked)

          if (inputThumbnail[i].checked) {
            console.log('[PostCreateForm.vue] inputThumbnail[i].value: ', inputThumbnail[i].value)

            return inputThumbnail[i].value
          }
        }
      })() */

      // console.log(`[PostCreateForm.vue] getValues:, ${getValues}`)

      // const thumbnail = getValues && getValues
      // console.log('[PostCreateForm.vue] submit() → thumbnail: ', thumbnail)

      // let upload2 = ''
      // console.log("[PostCreateForm.vue] submit() → $('.list_preview li').length: ", $('.list_preview li').length)

      // let i
      // let limit = $('.list_preview li').length
      /* for (i = 0; i < limit; i++) {
        upload2 += $('.list_preview')
          .find('li')
          .eq(i)
          .find('.input_thumbnail')
          .val()

        if (i < limit - 1) {
          upload2 += ','
        }
      } */
      // console.log('[PostCreateForm.vue] submit() → upload2: ', upload2)

      // const picture = this.$refs.picture.files[0]
      const thumb = this.$refs.thumb.files[0]
      console.log('★[PostCreateForm.vue] methods() → submit → thumb: ', thumb)

      const formData = new FormData()
      formData.append('category', category)
      formData.append('subject', subject)
      formData.append('content', content)
      formData.append('thumb', thumb)

      this.$emit('parentSubmit', formData)

      /* this.$emit('parentSubmit', {
        // category,
        // subject,
        // content,
        // thumb
        // download
        // thumbnail,
        // upload2
      }) */
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

          Editor.insertEmbed(cursorLocation, 'image', `http://localhost:3000${url}`)

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

<style scoped>
.quillWrapper {
  padding-top: 10px;
  border-top: 1px solid #e9e9e9;
}
</style>
