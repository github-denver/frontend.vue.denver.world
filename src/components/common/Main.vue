<template>
  <div id="container">
    <Carousel
      v-bind:article="article"
      v-bind:options="{
        className: 'carousel',
        slider: {
          items: 1,
          margin: 10,
          stagePadding: 10,
          nav: false,
          dots: false
        },
        board: {
          view: 'ArticleRead'
        },
        message: {
          loading: '읽어들이는 중..',
          empty: '글이 존재하지 않습니다.'
        }
      }"
    />

    <div class="contents">
      <Category
        v-bind:category="category"
        v-bind:options="{
          className: 'category',
          slider: {
            items: 1,
            margin: 10,
            stagePadding: 10,
            nav: false,
            dots: false
          },
          board: {
            title: '카테고리',
            type: 'gallery',
            list: 'GalleryList',
            view: 'ArticleRead'
          },
          message: {
            loading: '읽어들이는 중..',
            empty: '카테고리가 존재하지 않습니다.'
          }
        }"
      />

      <Gallery
        v-bind:gallery="gallery"
        v-bind:options="{
          className: 'gallery',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          board: {
            title: '이미지 게시판',
            type: 'gallery',
            list: 'GalleryList',
            view: 'PostRead'
          },
          message: {
            loading: '읽어들이는 중..',
            empty: '이미지가 존재하지 않습니다.'
          }
        }"
      />

      <List
        v-bind:list="talk"
        v-bind:options="{
          className: 'trisection',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          board: {
            title: '톡톡 한마디',
            type: 'talk',
            list: 'PostList',
            view: 'PostRead'
          },
          message: {
            loading: '읽어들이는 중..',
            empty: '글이 존재하지 않습니다.'
          }
        }"
      />

      <List
        v-bind:list="update"
        v-bind:options="{
          className: 'trisection',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          board: {
            title: '업데이트',
            type: 'update',
            list: 'PostList',
            view: 'PostRead'
          },
          message: {
            loading: '읽어들이는 중..',
            empty: '글이 존재하지 않습니다.'
          }
        }"
      />

      <List
        v-bind:list="notice"
        v-bind:options="{
          className: 'trisection',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          board: {
            title: '공지사항',
            type: 'notice',
            list: 'PostList',
            view: 'PostRead'
          },
          message: {
            loading: '읽어들이는 중..',
            empty: '글이 존재하지 않습니다.'
          }
        }"
      />
    </div>
  </div>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'
import Carousel from '@/components/common/Carousel'
import Category from '@/components/common/Category'
import Gallery from '@/components/common/Gallery'
import List from '@/components/common/List'

import api from '@/api'

export default {
  name: 'Main',
  components: { Carousel, Category, Gallery, List },
  data() {
    return {
      notice: {
        loading: false,
        list: []
      },
      update: {
        loading: false,
        list: []
      },
      talk: {
        loading: false,
        list: []
      },
      gallery: {
        loading: false,
        list: []
      },
      article: {
        loading: false,
        list: []
      },
      category: {
        loading: false,
        list: []
      }
    }
  },
  created() {
    api
      .get(`/api/`)
      .then((response) => {
        console.log('[Main.vue] created() → response.data: ', response.data)

        this.notice.list = response.data.notice
        this.notice.loading = true
        console.log('[Main.vue] created() → this.notice.list: ', this.notice.list)

        this.update.list = response.data.update
        this.update.loading = true
        console.log('[Main.vue] created() → this.update.list: ', this.update.list)

        this.talk.list = response.data.talk
        this.talk.loading = true
        console.log('[Main.vue] created() → this.talk.list: ', this.talk.list)

        this.gallery.list = response.data.gallery
        this.gallery.loading = true
        console.log('[Main.vue] created() → this.gallery.list: ', this.gallery.list)

        this.article.list = response.data.article
        this.article.loading = true
        console.log('[Main.vue] created() → this.article.list: ', this.article.list)

        this.category.list = response.data.category
        this.category.loading = true
        console.log('[Main.vue] created() → this.category.list: ', this.category.list)
      })
      .catch((error) => {
        console.log('[Main.vue] created() → error: ', error)
      })
  },
  computed: {
    localhost() {
      return localhost
    },
    uploads() {
      return uploads
    }
  }
}
</script>
