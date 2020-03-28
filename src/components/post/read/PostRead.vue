<template>
  <div class="container">
    <div class="contents">
      <Hgroup
        :attribute="{
          title: category.text,
          component: 'PostList',
          params: {
            service: category.value,
            number: '1'
          }
        }"
      />

      <Loading
        :attribute="{
          result: !post
        }"
      >
        <template v-slot:loading>
          <p class="text_message">읽어들이는 중..</p>
        </template>
      </Loading>

      <read v-if="post" :post="post" />

      <div class="group_button">
        <div class="inner_half">
          <router-link
            v-if="search.keyword"
            :to="{
              name:
                this.$route.params.service === 'notice' ||
                this.$route.params.service === 'talk'
                  ? 'PostList'
                  : 'GalleryList',
              params: { service: category.value, number: page.toString() },
              query: { select: search.select, keyword: search.keyword }
            }"
            class="link_global"
            >목록으로</router-link
          >

          <router-link
            v-else
            :to="{
              name:
                this.$route.params.service === 'notice' ||
                this.$route.params.service === 'talk'
                  ? 'PostList'
                  : 'GalleryList',
              params: { service: category.value, number: page.toString() }
            }"
            class="link_global"
            >목록으로</router-link
          >
        </div>

        <div class="inner_half">
          <router-link
            :to="{
              name: 'PostUpdate',
              params: { service: category.value, number: number.toString() },
              query: { page: page.toString() }
            }"
            class="link_global link_action"
            >수정하기</router-link
          >

          <rectangle-button
            :attribute="{
              type: 'button',
              className: 'button_delete',
              event: onDelete
            }"
            >삭제하기</rectangle-button
          >
        </div>
      </div>
      <!-- // group_button -->
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Hgroup from '@/components/common/Hgroup'
import Loading from '@/components/common/Loading'

import Read from '@/components/post/read/Read'

import RectangleButton from '@/components/common/RectangleButton'
import api from '@/api'

export default {
  name: 'PostRead',
  components: { Read, Hgroup, Loading, RectangleButton },
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
      category: {
        text: '',
        value: ''
      },
      page: 1
    }
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
          alert('게시물이 삭제됐어요!')

          this.$router.push({
            name:
              this.$route.params.service === 'notice' ||
              this.$route.params.service === 'talk'
                ? 'PostList'
                : 'GalleryList',
            params: {
              service: response.data.service,
              number: '1'
            }
          })
        })
        .catch((error) => {
          // console.log(error.response)

          if (error.response.status === 401) {
            // UnAuthorized
            alert('로그인이 필요해요!')
          } else {
            // alert(error.response.data.message)
          }
        })
    },
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
    this.page = this.$route.query.page

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

    this.fetchPost({
      category: this.category.value,
      number: parseInt(this.number),
      select: select2,
      keyword: keyword2
    }).catch((error) => {
      alert(error)

      // console.error(error)

      // console.log('[PostRead.vue] created() → error.response: ', error.response)

      this.$router.back()
    })
  }
}
</script>
