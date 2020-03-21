<template>
  <div class="container">
    <div class="contents">
      <main-carousel
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
            index: 'GalleryList',
            read: 'ArticleRead'
          },
          params: {
            service: 'library',
            number: '1'
          }
        }"
      />

      <main-category
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
            index: 'GalleryList',
            read: 'ArticleRead'
          },
          params: {
            service: 'library',
            number: '1'
          }
        }"
      />

      <main-gallery
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

      <main-post
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

      <main-post
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

      <main-post
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
    <!-- // contents -->
  </div>
  <!-- // container -->
</template>

<script>
import MainCarousel from '@/components/common/MainCarousel'
import MainCategory from '@/components/common/MainCategory'
import MainGallery from '@/components/common/MainGallery'
import MainPost from '@/components/common/MainPost'

import api from '@/api'

export default {
  name: 'Main',
  components: { MainCarousel, MainCategory, MainGallery, MainPost },
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
        this.notice.list = response.data.notice
        this.notice.loading = true

        this.update.list = response.data.update
        this.update.loading = true

        this.talk.list = response.data.talk
        this.talk.loading = true

        this.gallery.list = response.data.gallery
        this.gallery.loading = true

        this.article.list = response.data.article
        this.article.loading = true

        this.category.list = response.data.category
        this.category.loading = true
      })
      .catch((error) => {
        console.error('[Main.vue] created() → error: ', error)
      })
  }
}
</script>
