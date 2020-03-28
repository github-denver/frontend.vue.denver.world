<template>
  <form
    method="post"
    enctype="multipart/form-data"
    @submit.prevent="submit"
    novalidate
  >
    <design-select
      :attribute="{
        className: 'full'
      }"
      :select="select"
      @parentChange="onChange"
    />

    <div class="group_post">
      <div class="post_header">
        <Input
          :attribute="{
            type: 'text',
            id: 'subject',
            title: '제목',
            className: 'underline'
          }"
          v-model="subject"
        />
      </div>

      <vue-editor
        useCustomImageHandler
        @image-added="handleImageAdded"
        v-model="content"
      ></vue-editor>

      <div class="post_footer">
        <Input
          :attribute="{
            type: 'file',
            id: 'thumbnail',
            title: '대표 이미지',
            className: 'full'
          }"
          v-model="thumbnail"
          @parentChange="onPictureChange"
        />
      </div>
    </div>

    <div class="group_button">
      <div class="inner_half">
        <router-link
          :to="{
            name:
              this.$route.params.service === 'notice' ||
              this.$route.params.service === 'talk'
                ? 'PostList'
                : 'GalleryList',
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
        <rectangle-button
          :attribute="{ type: 'submit', className: 'button_action' }"
          >등록하기</rectangle-button
        >
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
        category: '',
        data: [
          {
            optgroup: {
              text: '새소식',
              value: 'news',
              option: [
                {
                  text: '많이 본 소식',
                  value: 'popular'
                },
                {
                  text: '컴퓨터 &amp; 하드웨어',
                  value: 'hardware'
                },
                {
                  text: '모바일 &amp; 태블릿',
                  value: 'mobile'
                },
                {
                  text: '신작 게임 &amp; 업데이트 동영상',
                  value: 'game'
                },
                {
                  text: '넷플릭스 출시 예정 &amp; 신작 동영상',
                  value: 'video'
                },
                {
                  text: '공지사항 &amp; 업데이트',
                  value: 'notice'
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
                }
              ]
            }
          }
        ]
      },
      category: '',
      subject: '',
      content: '',
      thumbnail: '',
      picture: {
        files: null,
        result: null
      }
    }
  },
  created() {
    this.select.category = this.category2
  },
  computed: {
    ...mapGetters(['path', 'uploads'])
  },
  methods: {
    onPictureChange(payload) {
      this.picture.files = payload.get('files')
      this.picture.result = payload.get('result')
    },
    submit() {
      const { category, subject, content } = this

      const thumbnail = this.picture.files

      const formData = new FormData()
      formData.append('category', category)
      formData.append('subject', subject)
      formData.append('content', content)
      formData.append('thumbnail', thumbnail)

      this.$emit('parentSubmit', formData)
    },
    onChange(payload) {
      const { text, value } = payload

      this.category = value
    },
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('picture', file)

      api
        .post(`/api/board/${this.category}/upload`, formData)
        .then((result) => {
          const folder = 'uploads'
          const url = result.data.image[0].imageurl
          // console.log('[PostCreateForm.vue] methods() → handleImageAdded → url: ', url)

          const name = result.data.image[0].filename
          // console.log('[PostCreateForm.vue] methods() → handleImageAdded → name: ', name)

          Editor.insertEmbed(cursorLocation, 'image', `${this.path}${url}`)

          resetUploader()
        })
        .catch((error) => {
          alert('이미지 업로드에 실패했어요.. ㅠㅜ')

          // console.log(error)
        })
    }
  }
}
</script>
