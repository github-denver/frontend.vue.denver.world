<template>
  <div id="container">
    <div class="visual_carousel">
      <div class="inner_carousel">
        <img :src="`${localhost}/${uploads}/${post[0].upload2}`" class="thumbnail_carousel" />
      </div>
    </div>

    <div class="contents">
      <article-content v-if="post" :post="post" />

      <div class="error_global" v-else>
        <p class="text_error">읽어들이는 중..</p>
      </div>

      <div class="group_button">
        <link-rectangle
          v-if="search.keyword"
          :data="{
            component: this.$route.params.service !== 'library' ? 'PostList' : 'GalleryList',
            className: 'button_global',
            text: '목록으로',
            type: category.value,
            number: page.toString(),
            select: search.select,
            keyword: search.keyword
          }"
        />
        <link-rectangle
          v-else
          :data="{
            component: this.$route.params.service !== 'library' ? 'PostList' : 'GalleryList',
            className: 'button_global',
            text: '목록으로',
            type: category.value,
            number: page.toString()
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import LinkRectangle from '@/components/link/Rectangle'
import ArticleContent from '@/components/article/read/ArticleContent'

import api from '@/api'

export default {
  name: 'ArticleRead',
  components: { ArticleContent, LinkRectangle },
  props: {
    service: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      navigation: {
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
      category: {
        text: '',
        value: ''
      },
      page: 1
    }
  },
  created() {
    console.log('[PostRead.vue] created() → this.$route.params: ', this.$route.params)
    console.log('[PostRead.vue] created() → this.$route.query: ', this.$route.query)

    this.page = this.$route.query.page

    const keyword = typeof this.$route.query.keyword !== 'undefined' ? this.$route.query.keyword : ''
    console.log('[PostRead.vue] created() → keyword: ', keyword)

    let select2 = ''
    let keyword2 = ''

    if (keyword.length === 0) {
      console.log('[PostRead.vue] kcreated() → eyword.length === 0: ', keyword.length === 0)

      this.searchInfo({ select: '', keyword: '' })
    } else {
      console.log('[PostRead.vue] created() → keyword.length === 0: ', keyword.length === 0)

      select2 = this.$route.query.select
      keyword2 = this.$route.query.keyword
    }

    console.log('[PostRead.vue] created() → this.search.keyword: ', this.search.keyword)

    this.category.value = this.service
    console.log('[PostRead.vue] created() → this.category.value: ', this.category.value)

    this.onChange()

    console.log('[PostRead.vue] created() → typeof this.number: ', typeof this.number)
    console.log('[PostRead.vue] created() → typeof parseInt(this.number): ', typeof parseInt(this.number))

    this.fetchPost({
      category: this.category.value,
      number: parseInt(this.number),
      select: select2,
      keyword: keyword2
    }).catch((error) => {
      console.error(error)
      console.log('[PostRead.vue] created() → error.response: ', error.response)

      alert(error)

      this.$router.back()
    })
  },
  computed: {
    ...mapState(['post', 'search'])
  },
  methods: {
    ...mapActions(['fetchPost', 'searchInfo']),
    onDelete() {
      const category = this.category.value
      const number = this.post[0].number

      api
        .get(`/api/board/${category}/delete/${number}`)
        .then((response) => {
          alert('게시물이 성공적으로 삭제되었습니다.')

          this.$router.push({
            name: this.$route.params.service !== 'gallery' ? 'PostList' : 'GalleryList',
            params: {
              service: response.data.service,
              number: '1'
            }
          })
        })
        .catch((error) => {
          console.error(error.response)

          if (error.response.status === 401) {
            // UnAuthorized
            alert('로그인이 필요합니다.')
          } else {
            alert(error.response.data.message)
          }
        })
    },
    onChange() {
      loop: for (let i in this.navigation.data) {
        for (let j in this.navigation.data[i].optgroup.option) {
          if (this.category.value === this.navigation.data[i].optgroup.option[j].value) {
            this.category.text = this.navigation.data[i].optgroup.option[j].text
            this.category.value = this.navigation.data[i].optgroup.option[j].value

            break loop
          }
        }
      }
    }
  }
}
</script>
