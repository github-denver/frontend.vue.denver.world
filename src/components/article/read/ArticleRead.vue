<template>
  <div class="container">
    <div class="wrap_visual" v-if="post">
      <div
        class="thumbnail_visual"
        :style="{
          'background-image': `url('${path}/${uploads}/${post[0].thumbnail}')`
        }"
      ></div>

      <div class="post_header">
        <div class="inner_local outer_cell">
          <Picture
            :attribute="{
              authorized: isAuthorized,
              user: post[0],
              picture: post[0].picture,
              state: 'board'
            }"
          />

          <div class="post_container inner_cell">
            <div class="group_subject">
              <span class="title_local">{{ post[0].subject }}</span>
            </div>

            <div class="post_information">
              <span class="text_local"
                ><span class="screen_out">작성자</span> {{ post[0].name }}</span
              >
              <span class="text_local"
                ><span class="screen_out">등록일</span>
                {{ post[0].regdate | moment('YY.MM.DD') }}</span
              >
              <span class="text_local"
                ><span class="screen_out">조회수</span>
                {{ post[0].count }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // wrap_visual -->

    <div class="contents article">
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
      <!-- // group-button -->
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import Picture from '@/components/common/Picture'
import Hgroup from '@/components/common/Hgroup'
import Read from '@/components/article/read/Read'
import Loading from '@/components/common/Loading'
import RectangleButton from '@/components/common/RectangleButton'

import api from '@/api'

export default {
  name: 'ArticleRead',
  components: { RectangleButton, Picture, Hgroup, Read, Loading },
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

      console.log('[PostRead.vue] created() → error.response: ', error.response)

      this.$router.back()
    })
  },
  computed: {
    ...mapGetters(['isAuthorized', 'path', 'uploads']),
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
          console.log(error.response)

          // UnAuthorized
          if (error.response.status === 401) {
            alert('로그인이 필요해요!')
          } else {
            alert(error.response.data.message)
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
  }
}
</script>

<style>
.wrap_visual {
  overflow: hidden;
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
}

.wrap_visual .thumbnail_visual {
  padding-top: 56.25%;
  background-size: cover;
}

.wrap_visual .post_header {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0);
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0.5))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=0);
}

.wrap_visual .inner_local {
  width: auto;
}

.wrap_visual .group_picture {
  overflow: hidden;
  float: left;
  margin-right: 10px;
}

.wrap_visual .text_local {
  color: #fff;
}
</style>
