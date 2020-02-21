<template>
  <div id="container">
    <div class="contents">
      <div class="hgroup">
        <h2 class="title_local">
          <router-link
            v-bind:to="{
              name: 'PostListPage',
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

      <post-list
        v-if="loading"
        v-bind:number="number"
        v-bind:posts="posts"
        v-bind:category="category"
      />
      <div class="error_global" v-if="!loading">
        <p class="text_error">읽어들이는 중..</p>
      </div>
      <!-- // error_global -->

      <div class="group_button type_half">
        <div class="inner_local"></div>

        <div class="inner_local">
          <router-link
            v-bind:to="{
              name: 'PostCreatePage',
              params: {
                service: category.value
              }
            }"
            class="button_global"
            >등록하기</router-link
          >
        </div>
      </div>
      <!-- // group_button -->

      <post-pagination />

      <post-search v-bind:category="category" v-bind:number="number" />
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PostList from '@/components/PostList'
import PostPagination from '@/components/PostPagination'
import PostSearch from '@/components/PostSearch'

export default {
  name: 'PostListPage',
  components: { PostList, PostPagination, PostSearch },
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
      loading: false,
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
      }
    }
  },
  // prettier-ignore
  methods: {
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
    },
    ...mapActions(['fetchPostList', 'searchInfo'])
  },
  // prettier-ignore
  created() {
    console.log('[PostListPage.vue] created() → this.loading: ', this.loading)
    console.log('[PostListPage.vue] created() → this.$route.query.select: ', this.$route.query.select)
    console.log('[PostListPage.vue] created() → this.$route.query.keyword: ', this.$route.query.keyword)

    const keyword = typeof this.$route.query.keyword !== 'undefined' ? this.$route.query.keyword : ''
    console.log('[PostListPage.vue] created() → keyword: ', keyword)

    let select2 = ''
    let keyword2 = ''

    if (keyword.length === 0) {
      console.log('[PostListPage.vue] created() → keyword.length === 0: ', keyword.length === 0)

      this.searchInfo({ select: '', keyword: '' })
    } else {
      console.log('[PostListPage.vue] created() → keyword.length === 0: ', keyword.length === 0)

      select2 = this.$route.query.select
      keyword2 = this.$route.query.keyword
    }

    console.log('[PostListPage.vue] created() → this.number: ', this.number)

    this.category.value = this.service
    console.log('[PostListPage.vue] created() → this.category.value: ', this.category.value)

    this.onChange()

    console.log('[PostListPage.vue] created() → this.search.select: ', this.search.select)
    console.log('[PostListPage.vue] created() → typeof this.search.select: ', typeof this.search.select)

    console.log('[PostListPage.vue] created() → this.search.keyword: ', this.search.keyword)
    console.log('[PostListPage.vue] created() → typeof this.search.keyword: ', typeof this.search.keyword)

    this.fetchPostList({
      category: this.category.value,
      number: this.number,
      select: select2,
      keyword: keyword2
    }).then((response) => {
      console.log('[PostListPage.vue] created() → response: ', response)

      this.loading = true
      console.log('[PostListPage.vue] created() → this.loading: ', this.loading)
    })
  },
  computed: {
    ...mapState(['posts', 'search'])
  }
}
</script>
