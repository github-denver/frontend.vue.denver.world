<template>
  <div id="container">
    <div class="contents">
      <Hgroup>
        <template v-slot:title>
          <h3>
            <router-link
              :to="{
                name: 'GalleryList',
                params: {
                  service: category.value,
                  number: '1'
                }
              }"
            >
              {{ category.text }}</router-link
            >
          </h3>
        </template>
      </Hgroup>

      <Loading
        :attribute="{
          result: !loading
        }"
      >
        <template v-slot:loading>
          <p>읽어들이는 중..</p>
        </template>
      </Loading>

      <Empty
        :attribute="{
          result: loading && !posts.length
        }"
      >
        <template v-slot:empty>
          <p>글이 존재하지 않습니다</p>
        </template>
      </Empty>

      <gallery-list2
        v-if="loading"
        :number="number"
        :posts="posts"
        :category="category"
      />

      <div class="group_button type_half">
        <div class="inner_local"></div>

        <div class="inner_local">
          <link-rectangle
            :data="{
              component: 'PostCreate',
              className: ['button_global', 'type_action'],
              text: '글쓰기',
              type: category.value
            }"
          />
        </div>
      </div>

      <pagination />

      <search :category="category" :number="number" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Hgroup from '@/components/common/Hgroup'
import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

import LinkRectangle from '@/components/link/Rectangle'

import GalleryList2 from '@/components/gallery/list/GalleryList2'
import Pagination from '@/components/common/Pagination'
import Search from '@/components/common/Search'

export default {
  name: 'GalleryList',
  components: {
    Hgroup,
    GalleryList2,
    Pagination,
    Search,
    Loading,
    Empty,
    LinkRectangle
  },
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
              text: '기사',
              value: 'article',
              option: [
                {
                  text: '도서관',
                  value: 'library'
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
  created() {
    console.log('[GalleryList.vue] created() → this.loading: ', this.loading)
    console.log(
      '[GalleryList.vue] created() → this.$route.query.select: ',
      this.$route.query.select
    )
    console.log(
      '[GalleryList.vue] created() → this.$route.query.keyword: ',
      this.$route.query.keyword
    )

    const keyword =
      typeof this.$route.query.keyword !== 'undefined'
        ? this.$route.query.keyword
        : ''
    console.log('[GalleryList.vue] created() → keyword: ', keyword)

    let select2 = ''
    let keyword2 = ''

    if (keyword.length === 0) {
      console.log(
        '[GalleryList.vue] created() → keyword.length === 0: ',
        keyword.length === 0
      )

      this.searchInfo({ select: '', keyword: '' })
    } else {
      console.log(
        '[GalleryList.vue] created() → keyword.length === 0: ',
        keyword.length === 0
      )

      select2 = this.$route.query.select
      keyword2 = this.$route.query.keyword
    }

    console.log('[GalleryList.vue] created() → this.number: ', this.number)

    this.category.value = this.service
    console.log(
      '[GalleryList.vue] created() → this.category.value: ',
      this.category.value
    )

    this.onChange()

    console.log(
      '[GalleryList.vue] created() → this.search.select: ',
      this.search.select
    )
    console.log(
      '[GalleryList.vue] created() → typeof this.search.select: ',
      typeof this.search.select
    )

    console.log(
      '[GalleryList.vue] created() → this.search.keyword: ',
      this.search.keyword
    )
    console.log(
      '[GalleryList.vue] created() → typeof this.search.keyword: ',
      typeof this.search.keyword
    )

    this.fetchPostList({
      category: this.category.value,
      number: this.number,
      select: select2,
      keyword: keyword2
    }).then((response) => {
      console.log('[GalleryList.vue] created() → response: ', response)

      this.loading = true
      console.log('[GalleryList.vue] created() → this.loading: ', this.loading)
    })
  },
  computed: {
    ...mapState(['posts', 'search'])
  },
  methods: {
    ...mapActions(['fetchPostList', 'searchInfo']),
    onChange() {
      loop: for (let i in this.navigation.data) {
        for (let j in this.navigation.data[i].optgroup.option) {
          if (
            this.category.value ===
            this.navigation.data[i].optgroup.option[j].value
          ) {
            this.category.text = this.navigation.data[i].optgroup.option[j].text
            this.category.value = this.navigation.data[i].optgroup.option[
              j
            ].value

            break loop
          }
        }
      }
    }
  }
}
</script>
