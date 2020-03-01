<!-- prettier-ignore -->
<template>
  <form method="post" enctype="multipart/form-data" v-on:submit.prevent="submit" novalidate>
    <category-select v-bind:select="select" v-on:parentChange="onChange" />

    <div class="group_board">
      <div class="board_header">
        <span class="group_field">
          <label for="subject" class="label_local">제목</label>
          <span class="field_global">
            <input type="text" name="subject" id="subject" class="field_local" v-model="subject" />
          </span><!-- // field_global -->
        </span><!-- // group_field -->
      </div><!-- // board_header -->

      <div class="board_container">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="content"></vue-editor>
      </div><!-- // board_container -->

      <div v-if="upload2 !== 0" class="board_footer">
        <div class="group_download">
          <span class="group_field">
            <span class="title_local">첨부파일</span>
            <span class="field_global">
              <input type="file" name="download" class="field_local" v-bind:value="download" />
            </span><!-- // field_global -->
          </span><!-- // group_field -->
        </div><!-- // group_download -->

        <div class="group_preview">
          <span class="title_local">대표 이미지</span>

          <ul class="list_preview">
            <li v-for="(item, index) in upload2" v-bind:key="index">
              <span class="box_preview">
                <input type="radio" name="thumbnail" v-bind:id="`thumbnail${index}`" class="input_thumbnail" v-bind:value="item" />
                <label v-bind:for="`thumbnail${index}`" class="label_thumbnail" v-bind:style="{ 'background-image': 'url(\'http://localhost:3000/uploads/' + item + '\')' }">{{ item }}</label>
              </span><!-- // box_preview -->
            </li>
          </ul>
        </div><!-- // group_preview -->
      </div><!-- // board_footer -->
    </div><!-- // group_board -->

    <div class="group_button type_half">
      <div class="inner_local">
        <router-link v-bind:to="{ name: 'PostListPage', params: { service: service, number: page.toString() } }" class="button_global">취소하기</router-link>
      </div><!-- // inner_local -->

      <div class="inner_local">
        <button type="submit" class="button_global type_action">완료하기</button>
      </div><!-- // inner_local -->
    </div><!-- // group_button -->
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'
import CategorySelect from '@/components/CategorySelect'
import api from '@/api'

// prettier-ignore
export default {
  name: 'PostEditForm',
  components: { CategorySelect, VueEditor },
  props: {
    service: {
      type: String,
      required: true
    },
    post: {
      type: Array
      // required: true,
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
      content: '',
      download: '',
      thumbnail: '',
      upload2: [],
      page: 1
    }
  },
  created() {
    console.log('[PostEditForm.vue] created() → this.$route.params: ', this.$route.params)
    console.log('[PostEditForm.vue] created() → this.$route.query: ', this.$route.query)

    console.log(' ')

    console.log('[PostEditForm.vue] created() → this.post: ', this.post)
    console.log('[PostEditForm.vue] created() → this.post === null: ', this.post === null)
    console.log('[PostEditForm.vue] created() → typeof this.post: ', typeof this.post)

    const data = () => {
      this.category = this.post[0].category
      this.subject = this.post[0].subject
      this.content = this.post[0].content
      this.download = this.post[0].download
      this.thumbnail = this.post[0].thumbnail
      this.upload2 = this.post[0].upload2.split(',')

      console.log('[PostEditForm.vue] created() → this.post[0]: ', this.post[0])
      console.log('[PostEditForm.vue] created() → this.upload2: ', this.upload2)
    }

    const post = async () => {
      await this.fetchPost({
        category: this.$route.params.service,
        number: this.$route.params.number,
        select: this.$route.select,
        keyword: this.$route.keyword
      }).catch((error) => {
        console.error('[PostViewPage.vue] created() → error: ', error)

        console.log('[PostViewPage.vue] created() → error.response: ', error.response)

        alert(error)

        this.$router.back()
      })

      await data()
    }

    if (this.post === null) {
      console.log('[PostEditForm.vue] created() → 수정할 정보를 읽어들이는 중입니다!')

      post()
    } else {
      console.log('[PostEditForm.vue] created() → 전달받은 정보를 읽어들이는 중입니다!')

      data()
    }

    this.select.category = this.service
    console.log('[PostEditForm.vue] created() → this.category: ', this.category)

    console.log('[PostEditForm.vue] created() → this.$route.params: ', this.$route.params)

    this.page = this.$route.query.page
    console.log('[PostEditForm.vue] created() → this.$route.query.page: ', this.$route.query.page)
  },
  methods: {
    ...mapActions(['fetchPost']),
    submit() {
      const { category, subject, content, download } = this

      console.log('[PostEditForm.vue] submit() → category: ', category)
      console.log('[PostEditForm.vue] submit() → subject: ', subject)
      console.log('[PostEditForm.vue] submit() → content: ', content)
      console.log('[PostEditForm.vue] submit() → download: ', download)

      const thumbnail = document.querySelector('.input_thumbnail:checked').value
      console.log('[PostEditForm.vue] submit() → thumbnail: ', thumbnail)

      let upload2 = ''
      console.log("[PostEditForm.vue] submit() → $('.list_preview li').length: ", $('.list_preview li').length)

      let i
      let limit = $('.list_preview li').length
      for (i = 0; i < limit; i++) {
        upload2 += $('.list_preview').find('li').eq(i).find('.input_thumbnail').val()

        if (i < limit - 1) {
          upload2 += ','
        }
      }

      this.$emit('parentSubmit', {
        category,
        subject,
        content,
        download,
        thumbnail,
        upload2
      })
    },
    onChange(payload) {
      const { text, value } = payload
      console.log('[PostEditForm.vue] methods() → onChange → payload: ', payload)

      this.category = value
    },
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      console.log('[PostEditForm.vue] methods() → handleImageAdded → file: ', file)
      console.log('[PostEditForm.vue] methods() → handleImageAdded → Editor: ', Editor)
      console.log('[PostEditForm.vue] methods() → handleImageAdded → cursorLocation: ', cursorLocation)
      console.log('[PostEditForm.vue] methods() → handleImageAdded → resetUploader: ', resetUploader)

      const formData = new FormData()
      formData.append('picture', file)

      console.log('[PostEditForm.vue] methods() → handleImageAdded → this.category: ', this.category)

      api.post(`/api/board/${this.category}/upload`, formData).then((result) => {
        console.log('[PostEditForm.vue] methods() → handleImageAdded → result: ', result)
        console.log('[PostEditForm.vue] methods() → handleImageAdded → result.data: ', result.data)
        console.log('[PostEditForm.vue] methods() → handleImageAdded → result.data.image[0]: ', result.data.image[0])
        console.log('[PostEditForm.vue] methods() → handleImageAdded → result.data.image[0].imageurl: ', result.data.image[0].imageurl)

        const folder = 'uploads'
        const url = result.data.image[0].imageurl
        console.log('[PostEditForm.vue] methods() → handleImageAdded → url: ', url)

        const name = result.data.image[0].filename
        console.log('[PostEditForm.vue] methods() → handleImageAdded → name: ', name)

        Editor.insertEmbed(cursorLocation, 'image', `http://localhost:3000${url}`)

        resetUploader()

        console.log("[PostEditForm.vue] methods() → handleImageAdded → document.querySelector('.list_preview').childNodes: ", document.querySelector('.list_preview').childNodes)
        console.log("[PostEditForm.vue] methods() → handleImageAdded → document.querySelector('.list_preview').childNodes.length: ", document.querySelector('.list_preview').childNodes.length)

        let thumbnail = {
          html: '',
          length: document.querySelector('.list_preview').childNodes.length
        }
        console.log("[PostEditForm.vue] methods() → handleImageAdded → thumbnail.length: ", thumbnail.length)

        thumbnail.html += '<li>'
        thumbnail.html += '<span class="box_preview">'
        thumbnail.html += '<input type="radio" name="thumbnail" id="thumbnail' + thumbnail.length + '" class="input_thumbnail" value="' + name + '" checked>'
        thumbnail.html += '<label for="thumbnail' + thumbnail.length + '" class="label_thumbnail" style="background-image:url(\'http://localhost:3000' + url + '\')">' + name + '</label>'
        thumbnail.html += '</span>'
        thumbnail.html += '</li>'

        console.log('[PostEditForm.vue] methods() → handleImageAdded → thumbnail.html: ', thumbnail.html)

        $('.board_footer').removeClass('screen_out')
        $('.list_preview').append(thumbnail.html)
      }).catch((error) => {
        console.error('[PostEditForm.vue] methods() → handleImageAdded → error: ', error)
      })
    }
  }
}
</script>
