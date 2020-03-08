<template>
  <form method="post" enctype="multipart/form-data" v-on:submit.prevent="submit" novalidate>
    <select2 v-bind:select="select" v-on:parentChange="onChange" />

    <div class="group_board">
      <div class="board_header">
        <span class="group_field">
          <label for="subject" class="label_local">제목</label>
          <span class="field_global"> <input type="text" name="subject" id="subject" class="field_local" v-model="subject" /> </span
        ></span>
      </div>

      <div class="board_container">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="content"></vue-editor>
      </div>

      <!-- <div class="board_footer screen_out">
        <div class="group_download">
          <span class="group_field">
            <span class="title_local">첨부파일</span>
            <span class="field_global"> <input type="file" name="download" class="field_local" v-bind:value="download"/></span>
          </span>
        </div>

        <div class="group_preview">
          <span class="title_local">대표 이미지</span>

          <ul class="list_preview">
            <li>
              <span class="box_preview">
                <input type="radio" name="thumbnail" id="thumbnail" class="input_thumbnail" v-model="thumbnail" />
                <label for="thumbnail" class="label_thumbnail"></label>
              </span>
            </li>
          </ul>
        </div>
      </div> -->
    </div>

    <div class="group_button type_half">
      <div class="inner_local">
        <link-rectangle
          v-bind:data="{
            component: 'PostList',
            className: 'button_global',
            text: 'rectangle: 목록으로',
            type: category2,
            number: '1'
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
import { VueEditor } from 'vue2-editor'
import Select2 from '@/components/common/Select'

import LinkRectangle from '@/components/link/Rectangle'
import ButtonRectangle from '@/components/button/Rectangle'

import api from '@/api'

export default {
  name: 'PostCreateForm',
  components: { Select2, VueEditor, LinkRectangle, ButtonRectangle },
  props: {
    category2: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      select: {
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
      // download: '',
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

      this.$emit('parentSubmit', {
        category,
        subject,
        content
        // download,
        // thumbnail,
        // upload2
      })
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
