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
        <Input :attribute="{ type: 'text', id: 'subject', title: '제목', className: 'underline', value: subject }" v-model="subject" />
      </div>

      <div class="board_container">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="content"></vue-editor>
      </div>
    </div>

    <div class="group_button">
      <div class="inner_half">
        <router-link
          :to="{
            name: 'PostList',
            params: {
              service: service,
              number: page.toString()
            }
          }"
          class="link_global"
          >취소하기</router-link
        >
      </div>

      <div class="inner_half">
        <rectangle-button :attribute="{ type: 'submit', className: 'button_action' }">완료하기</rectangle-button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'

import DesignSelect from '@/components/common/DesignSelect'
import Input from '@/components/common/Input'
import RectangleButton from '@/components/common/RectangleButton'

import api from '@/api'

export default {
  name: 'Update',
  components: { DesignSelect, Input, RectangleButton, VueEditor },
  props: {
    service: {
      type: String,
      required: true
    },
    post: {
      type: Object
      // required: true,
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
      // download: '',
      // thumbnail: '',
      // upload2: [],
      page: 1
    }
  },
  created() {
    console.clear()
    console.log('[Update.vue] created() → this.$route.params: ', this.$route.params)
    console.log('[Update.vue] created() → this.$route.query: ', this.$route.query)

    console.log(' ')

    console.log('[Update.vue] created() → this.post: ', this.post)
    console.log('[Update.vue] created() → this.post === null: ', this.post === null)
    console.log('[Update.vue] created() → typeof this.post: ', typeof this.post)

    const post = async () => {
      await this.fetchPost({
        category: this.$route.params.service,
        number: this.$route.params.number,
        select: this.$route.select,
        keyword: this.$route.keyword
      }).catch((error) => {
        console.error('[PostRead.vue] created() → error: ', error)

        console.log('[PostRead.vue] created() → error.response: ', error.response)

        alert(error)

        this.$router.back()
      })

      await data()
    }

    const data = () => {
      this.category = this.post.category
      this.subject = this.post.subject
      console.log(' ')
      console.log(' ')
      console.log(' ')
      console.log('this.post.subject : ', this.post.subject)
      console.log('this.subject : ', this.subject)
      console.log(' ')
      console.log(' ')
      console.log(' ')
      this.content = this.post.content
      // this.download = this.post.download
      // this.thumbnail = this.post.thumbnail
      // this.upload2 = this.post.upload2.split(',')

      console.log('[Update.vue] created() → this.post: ', this.post)
      // console.log('[Update.vue] created() → this.upload2: ', this.upload2)
    }

    if (this.post === null) {
      console.log('[Update.vue] created() → 수정할 정보를 읽어들이는 중입니다!')

      post()
    } else {
      console.log('[Update.vue] created() → 전달받은 정보를 읽어들이는 중입니다!')

      data()
    }

    this.select.category = this.service
    console.log('[Update.vue] created() → this.category: ', this.category)

    console.log('[Update.vue] created() → this.$route.params: ', this.$route.params)

    this.page = this.$route.query.page
    console.log('[Update.vue] created() → this.$route.query.page: ', this.$route.query.page)
  },
  methods: {
    ...mapActions(['fetchPost']),
    submit() {
      // const { category, subject, content, download } = this
      const { category, subject, content } = this
      console.log('★ this: ', this)

      console.log('[Update.vue] submit() → category: ', category)
      console.log('[Update.vue] submit() → subject: ', subject)
      console.log('[Update.vue] submit() → content: ', content)

      /* alert('중지')
      return */

      // console.log('[Update.vue] submit() → download: ', download)

      // const thumbnail = document.querySelector('.input_thumbnail:checked').value
      // console.log('[Update.vue] submit() → thumbnail: ', thumbnail)

      // let upload2 = ''
      // console.log("[Update.vue] submit() → $('.list_preview li').length: ", $('.list_preview li').length)

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
      console.log('[Update.vue] methods() → onChange → payload: ', payload)

      this.category = value
    },
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      console.log('[Update.vue] methods() → handleImageAdded → file: ', file)
      console.log('[Update.vue] methods() → handleImageAdded → Editor: ', Editor)
      console.log('[Update.vue] methods() → handleImageAdded → cursorLocation: ', cursorLocation)
      console.log('[Update.vue] methods() → handleImageAdded → resetUploader: ', resetUploader)

      const formData = new FormData()
      formData.append('picture', file)

      console.log('[Update.vue] methods() → handleImageAdded → this.category: ', this.category)

      api
        .post(`/api/board/${this.category}/upload`, formData)
        .then((result) => {
          console.log('[Update.vue] methods() → handleImageAdded → result: ', result)
          console.log('[Update.vue] methods() → handleImageAdded → result.data: ', result.data)
          console.log('[Update.vue] methods() → handleImageAdded → result.data.image: ', result.data.image)
          console.log('[Update.vue] methods() → handleImageAdded → result.data.image.imageurl: ', result.data.image.imageurl)

          const folder = 'uploads'
          const url = result.data.image.imageurl
          console.log('[Update.vue] methods() → handleImageAdded → url: ', url)

          const name = result.data.image.filename
          console.log('[Update.vue] methods() → handleImageAdded → name: ', name)

          Editor.insertEmbed(cursorLocation, 'image', `${this.path}${url}`)

          resetUploader()

          /* console.log(
            "[Update.vue] methods() → handleImageAdded → document.querySelector('.list_preview').childNodes: ",
            document.querySelector('.list_preview').childNodes
          ) */
          /* console.log(
            "[Update.vue] methods() → handleImageAdded → document.querySelector('.list_preview').childNodes.length: ",
            document.querySelector('.list_preview').childNodes.length
          ) */

          /* let thumbnail = {
            html: '',
            length: document.querySelector('.list_preview').childNodes.length
          } */
          // console.log('[Update.vue] methods() → handleImageAdded → thumbnail.length: ', thumbnail.length)

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

          // console.log('[Update.vue] methods() → handleImageAdded → thumbnail.html: ', thumbnail.html)

          // $('.board_footer').removeClass('screen_out')
          // $('.list_preview').append(thumbnail.html)
        })
        .catch((error) => {
          console.error('[Update.vue] methods() → handleImageAdded → error: ', error)
        })
    }
  }
}
</script>
