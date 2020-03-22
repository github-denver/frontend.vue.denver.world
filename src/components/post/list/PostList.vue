<template>
  <div class="container">
    <div class="contents">
      <Hgroup
        :attribute="{
          component: 'PostList',
          params: {
            service: category.value,
            number: '1'
          }
        }"
      >
        {{ category.text }}
      </Hgroup>

      <Loading
        :attribute="{
          result: !loading
        }"
      >
        <template v-slot:loading>
          <p class="text_message">읽어들이는 중..</p>
        </template>
      </Loading>

      <Empty
        :attribute="{
          result: loading && !posts.length
        }"
      >
        <template v-slot:empty>
          <p class="text_message">글이 존재하지 않습니다</p>
        </template>
      </Empty>

      <list
        v-if="loading"
        :number="number"
        :posts="posts"
        :category="category"
      />

      <div class="group_button">
        <div class="inner_half"></div>

        <div class="inner_half">
          <router-link
            :to="{ name: 'PostCreate', params: { service: category.value } }"
            class="link_global link_action"
            >글쓰기</router-link
          >
        </div>
      </div>
      <!-- // group-button -->

      <pagination />

      <search :category="category" :number="number" />
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
import List from '@/components/post/list/List'
import Pagination from '@/components/common/Pagination'
import Search from '@/components/common/Search'

import Hgroup from '@/components/common/Hgroup'
import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

export default {
  name: 'PostList',
  components: {
    List,
    Pagination,
    Search,
    Hgroup,
    Loading,
    Empty
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
      category: {
        text: '',
        value: ''
      }
    }
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
  },
  created() {
    const keyword =
      typeof this.$route.query.keyword !== 'undefined'
        ? this.$route.query.keyword
        : ''

    let select2 = ''
    let keyword2 = ''

    if (keyword.length === 0) {
      this.searchInfo({ select: '', keyword: '' })
    } else {
      select2 = this.$route.query.select
      keyword2 = this.$route.query.keyword
    }

    this.category.value = this.service

    this.onChange()

    this.fetchPostList({
      category: this.category.value,
      number: this.number,
      select: select2,
      keyword: keyword2
    }).then((response) => {
      // console.log('[PostList.vue] created() → response: ', response)

      this.loading = true
    })
  }
}
</script>
