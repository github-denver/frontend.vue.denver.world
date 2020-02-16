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

      <gallery-list
        v-bind:number="number"
        v-bind:posts="posts"
        v-bind:category="category"
      />

      <div class="group_button type_half">
        <div class="inner_local"></div>
        <!-- // inner_local -->

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
        <!-- // inner_local -->
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
import GalleryList from '@/components/GalleryList'
import PostPagination from '@/components/PostPagination'
import PostSearch from '@/components/PostSearch'

export default {
  name: 'GalleryListPage',
  components: { GalleryList, PostPagination, PostSearch },
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
      }
    }
  },
  methods: {
    onChange() {
      loop: for (let i in this.navigation.data) {
        for (let j in this.navigation.data[i].optgroup.option) {
          // prettier-ignore
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
  created() {
    console.log('[PostListPage.vue] created() → this.$route.query.select: ', this.$route.query.select) // prettier-ignore
    console.log('[PostListPage.vue] created() → this.$route.query.keyword: ', this.$route.query.keyword) // prettier-ignore

    // prettier-ignore
    const keyword = typeof this.$route.query.keyword !== 'undefined' ? this.$route.query.keyword : ''
    console.log('[PostListPage.vue] created() → keyword: ', keyword)

    let select2 = ''
    let keyword2 = ''

    if (keyword.length === 0) {
      console.log('[PostListPage.vue] created() → keyword.length === 0: ', keyword.length === 0) // prettier-ignore

      this.searchInfo({ select: '', keyword: '' })
    } else {
      console.log('[PostListPage.vue] created() → keyword.length === 0: ', keyword.length === 0) // prettier-ignore

      select2 = this.$route.query.select
      keyword2 = this.$route.query.keyword
    }

    console.log('[PostListPage.vue] created() → this.number: ', this.number)

    this.category.value = this.service
    console.log('[PostListPage.vue] created() → this.category.value: ', this.category.value) // prettier-ignore

    this.onChange()

    console.log('[PostListPage.vue] created() → this.search.select: ', this.search.select) // prettier-ignore
    console.log('[PostListPage.vue] created() → typeof this.search.select: ', typeof this.search.select) // prettier-ignore

    console.log('[PostListPage.vue] created() → this.search.keyword: ', this.search.keyword) // prettier-ignore
    console.log('[PostListPage.vue] created() → typeof this.search.keyword: ', typeof this.search.keyword) // prettier-ignore

    this.fetchPostList({
      category: this.category.value,
      number: this.number,
      select: select2,
      keyword: keyword2
    })
  },
  computed: {
    ...mapState(['posts', 'search'])
  }
}
</script>
