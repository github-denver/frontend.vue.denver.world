<template>
  <div id="container">
    <div class="contents">
      <Carousel
        :article="article"
        :attribute="{
          title: '도서관',
          slider: {
            items: 1,
            margin: 10,
            stagePadding: 10,
            nav: false,
            dots: false
          },
          component: {
            index: 'ArticleList',
            read: 'ArticleRead'
          },
          params: {
            service: 'gallery',
            number: '1'
          }
        }"
      />

      <Category
        :category="category"
        :attribute="{
          title: '카테고리',
          slider: {
            items: 1,
            margin: 10,
            stagePadding: 10,
            nav: false,
            dots: false
          },
          component: {
            index: 'ArticleList',
            read: 'ArticleRead'
          },
          params: {
            service: 'gallery',
            number: '1'
          }
        }"
      />

      <Gallery
        :gallery="gallery"
        :attribute="{
          title: '이미지 게시판',
          className: 'gallery',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'GalleryList',
            read: 'PostRead'
          },
          params: {
            service: 'gallery',
            number: '1'
          }
        }"
      />

      <List
        :list="talk"
        :attribute="{
          title: '톡톡 한마디',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'PostList',
            read: 'PostRead'
          },
          params: {
            service: 'talk',
            number: '1'
          }
        }"
      />

      <List
        :list="update"
        :attribute="{
          title: '업데이트',
          className: 'trisection',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'PostList',
            read: 'PostRead'
          },
          params: {
            service: 'update',
            number: '1'
          }
        }"
      />

      <List
        :list="notice"
        :attribute="{
          title: '공지사항',
          className: 'trisection',
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'PostList',
            read: 'PostRead'
          },
          params: {
            service: 'notice',
            number: '1'
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
        console.log(
          '[Main.vue] created() → this.notice.list: ',
          this.notice.list
        )

        this.update.list = response.data.update
        this.update.loading = true
        console.log(
          '[Main.vue] created() → this.update.list: ',
          this.update.list
        )

        this.talk.list = response.data.talk
        this.talk.loading = true
        console.log('[Main.vue] created() → this.talk.list: ', this.talk.list)

        this.gallery.list = response.data.gallery
        this.gallery.loading = true
        console.log(
          '[Main.vue] created() → this.gallery.list: ',
          this.gallery.list
        )

        this.article.list = response.data.article
        this.article.loading = true
        console.log(
          '[Main.vue] created() → this.article.list: ',
          this.article.list
        )

        this.category.list = response.data.category
        this.category.loading = true
        console.log(
          '[Main.vue] created() → this.category.list: ',
          this.category.list
        )
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
