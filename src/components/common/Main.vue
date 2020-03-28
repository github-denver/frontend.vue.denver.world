<template>
  <div class="container">
    <div class="contents">
      <main-carousel
        :article="popular"
        :attribute="{
          title: '많이 본 소식',
          style: {
            paddingTop: '56.25%',
            backgroundPosition: '50% 50%'
          },
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
            service: 'popular',
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
            service: 'category',
            number: '1'
          }
        }"
      />

      <main-gallery
        :gallery="hardware"
        :attribute="{
          title: '컴퓨터 &amp; 하드웨어',
          className: 'gallery',
          style: {
            paddingTop: '56.25%',
            backgroundPosition: '50% 50%'
          },
          slider: {
            items: 1,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'GalleryList',
            read: 'ArticleRead'
          },
          params: {
            service: 'hardware',
            number: '1'
          }
        }"
      />

      <main-gallery
        :gallery="mobile"
        :attribute="{
          title: '모바일 &amp; 태블릿',
          className: 'gallery',
          style: {
            paddingTop: '56.25%',
            backgroundPosition: '50% 50%'
          },
          slider: {
            items: 1,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'GalleryList',
            read: 'ArticleRead'
          },
          params: {
            service: 'mobile',
            number: '1'
          }
        }"
      />

      <main-gallery
        :gallery="game"
        :attribute="{
          title: '신작 게임 &amp; 업데이트 동영상',
          className: 'gallery',
          style: {
            paddingTop: '56.25%',
            backgroundPosition: '50% 50%'
          },
          slider: {
            items: 1,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'GalleryList',
            read: 'ArticleRead'
          },
          params: {
            service: 'game',
            number: '1'
          }
        }"
      />

      <main-gallery
        :gallery="video"
        :attribute="{
          title: '넷플릭스 출시 예정 &amp; 신작 동영상',
          className: 'gallery',
          style: {
            paddingTop: '133.3333333333333%',
            backgroundPosition: '50% 50%'
          },
          slider: {
            items: 2,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: false
          },
          component: {
            index: 'GalleryList',
            read: 'ArticleRead'
          },
          params: {
            service: 'video',
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

      <!-- <main-post
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
      /> -->

      <main-post
        :list="notice"
        :attribute="{
          title: '공지사항 &amp; 업데이트',
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
      category: {
        loading: false,
        list: []
      },
      gallery: {
        loading: false,
        list: []
      },
      game: {
        loading: false,
        list: []
      },
      hardware: {
        loading: false,
        list: []
      },
      mobile: {
        loading: false,
        list: []
      },
      notice: {
        loading: false,
        list: []
      },
      popular: {
        loading: false,
        list: []
      },
      talk: {
        loading: false,
        list: []
      },
      update: {
        loading: false,
        list: []
      },
      video: {
        loading: false,
        list: []
      }
    }
  },
  created() {
    api
      .get('/api/', { headers: { Pragma: 'no-cache' } })
      .then((response) => {
        this.category.list = response.data.category
        this.category.loading = true

        this.gallery.list = response.data.gallery
        this.gallery.loading = true

        this.game.list = response.data.game
        this.game.loading = true

        this.hardware.list = response.data.hardware
        this.hardware.loading = true

        this.mobile.list = response.data.mobile
        this.mobile.loading = true

        this.notice.list = response.data.notice
        this.notice.loading = true

        this.popular.list = response.data.popular
        this.popular.loading = true

        this.talk.list = response.data.talk
        this.talk.loading = true

        this.update.list = response.data.update
        this.update.loading = true

        this.video.list = response.data.video
        this.video.loading = true
      })
      .catch((error) => {
        console.log('[Main.vue] created() → error: ', error)
      })
  }
}
</script>
