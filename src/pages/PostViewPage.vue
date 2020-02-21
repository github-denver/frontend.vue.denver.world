<template>
  <div id="container">
    <div class="contents">
      <div class="hgroup">
        <h2 class="title_local">
          <router-link
            v-bind:to="{
              name: this.$route.params.service !== 'gallery' ? 'PostListPage' : 'GalleryListPage', // prettier-ignore
              params: {
                service: category.value,
                number: '1'
              }
            }"
            class="link_title"
            >{{ category.text }}</router-link
          >
        </h2>
      </div>
      <!-- // hgroup -->

      <post-view v-if="post" v-bind:post="post" />
      <div class="error_global" v-else>
        <p class="text_error">읽어들이는 중..</p>
      </div>
      <!-- // error_global -->

      <div class="group_button type_half">
        <div class="inner_local">
          <router-link
            v-if="search.keyword"
            v-bind:to="{
              name: this.$route.params.service !== 'gallery' ? 'PostListPage' : 'GalleryListPage', // prettier-ignore
              params: {
                service: category.value,
                number: page.toString()
              },
              query: {
                select: search.select,
                keyword: search.keyword
              }
            }"
            class="button_global"
            >목록으로</router-link
          >
          <router-link
            v-else
            v-bind:to="{
              name: this.$route.params.service !== 'gallery' ? 'PostListPage' : 'GalleryListPage', // prettier-ignore
              params: {
                service: category.value,
                number: page.toString()
              }
            }"
            class="button_global"
            >목록으로</router-link
          >
        </div>
        <!-- //inner_local -->

        <div class="inner_local">
          <router-link
            v-bind:to="{
              name: 'PostEditPage',
              params: {
                service: category.value,
                number: number.toString()
              },
              query: {
                page: page.toString()
              }
            }"
            class="button_global"
            >수정하기</router-link
          >
          <button type="button" class="button_global" v-on:click="onDelete">
            삭제하기
          </button>
        </div>
        <!-- //inner_local -->
      </div>
      <!-- // group_button -->
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PostView from '@/components/PostView'
import api from '@/api'

export default {
  name: 'PostViewPage',
  components: { PostView },
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
  // prettier-ignore
  methods: {
    ...mapActions(['fetchPost', 'searchInfo']),
    onDelete() {
      const category = this.category.value
      const number = this.post[0].number

      api.get(`/api/board/${category}/delete/${number}`).then((response) => {
        alert('게시물이 성공적으로 삭제되었습니다.')

        this.$router.push({
          name: this.$route.params.service !== 'gallery' ? 'PostListPage' : 'GalleryListPage',
          params: {
            service: response.data.service,
            number: '1'
          }
        })
      }).catch((error) => {
        console.error(error.response)

        if (error.response.status === 401) { // UnAuthorized
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
  },
  // prettier-ignore
  created() {
    console.log('[PostViewPage.vue] created() → this.$route.params: ', this.$route.params)
    console.log('[PostViewPage.vue] created() → this.$route.query: ', this.$route.query)

    this.page = this.$route.query.page

    const keyword = typeof this.$route.query.keyword !== 'undefined' ? this.$route.query.keyword : ''
    console.log('[PostViewPage.vue] created() → keyword: ', keyword)

    let select2 = ''
    let keyword2 = ''

    if (keyword.length === 0) {
      console.log('[PostViewPage.vue] kcreated() → eyword.length === 0: ', keyword.length === 0)

      this.searchInfo({ select: '', keyword: '' })
    } else {
      console.log('[PostViewPage.vue] created() → keyword.length === 0: ', keyword.length === 0)

      select2 = this.$route.query.select
      keyword2 = this.$route.query.keyword
    }

    console.log('[PostViewPage.vue] created() → this.search.keyword: ', this.search.keyword)

    this.category.value = this.service
    console.log('[PostViewPage.vue] created() → this.category.value: ', this.category.value)

    this.onChange()

    console.log('[PostViewPage.vue] created() → typeof this.number: ',typeof this.number)
    console.log('[PostViewPage.vue] created() → typeof parseInt(this.number): ', typeof parseInt(this.number))

    this.fetchPost({
      category: this.category.value,
      number: parseInt(this.number),
      select: select2,
      keyword: keyword2
    }).catch((error) => {
      console.error(error)
      console.log('[PostViewPage.vue] created() → error.response: ', error.response)

      alert(error)

      this.$router.back()
    })
  },
  computed: {
    ...mapState(['post', 'search'])
  }
}
</script>
