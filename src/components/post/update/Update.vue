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
            className: 'underline',
            value: subject
          }"
          v-model="subject"
        />
      </div>

      <div class="board_container">
        <vue-editor
          useCustomImageHandler
          @image-added="handleImageAdded"
          v-model="content"
        ></vue-editor>
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
        <rectangle-button
          :attribute="{ type: 'submit', className: 'button_action' }"
          >완료하기</rectangle-button
        >
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
      page: 1
    }
  },
  created() {
    const post = async () => {
      await this.fetchPost({
        category: this.$route.params.service,
        number: this.$route.params.number,
        select: this.$route.select,
        keyword: this.$route.keyword
      }).catch((error) => {
        alert(error)

        console.error(error)

        console.log('[PostRead.vue] created() → error: ', error)
        console.log(
          '[PostRead.vue] created() → error.response: ',
          error.response
        )

        this.$router.back()
      })

      await data()
    }

    const data = () => {
      this.category = this.post.category
      this.subject = this.post.subject
      this.content = this.post.content
    }

    if (this.post === null) {
      console.log('[Update.vue] created() → 수정할 정보를 읽어들이는 중입니다!')

      post()
    } else {
      console.log(
        '[Update.vue] created() → 전달받은 정보를 읽어들이는 중입니다!'
      )

      data()
    }

    this.select.category = this.service

    this.page = this.$route.query.page
  },
  methods: {
    ...mapActions(['fetchPost']),
    submit() {
      const { category, subject, content } = this

      this.$emit('parentSubmit', {
        category,
        subject,
        content
      })
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
          const url = result.data.image.imageurl
          console.log('[Update.vue] methods() → handleImageAdded → url: ', url)

          const name = result.data.image.filename
          console.log(
            '[Update.vue] methods() → handleImageAdded → name: ',
            name
          )

          Editor.insertEmbed(cursorLocation, 'image', `${this.path}${url}`)

          resetUploader()
        })
        .catch((error) => {
          alert('이미지 업로드에 실패했어요.. ㅠㅜ')

          console.error(error)
        })
    }
  }
}
</script>
