<!-- prettier-ignore -->
<template>
  <div id="container">
    <div class="view_local">
      <div class="error_global" v-if="true || !article.loading">
        <p class="text_error">읽어들이는 중..</p>
      </div><!-- // error_global -->

      <div class="error_global" v-if="true || article.loading && !article.list.length">
        <p class="text_error">글이 존재하지 않습니다.</p>
      </div><!-- // error_global -->

      <div v-if="article.list.length && article.list.length">
        <carousel :items="1" :margin="10" :nav="false" :dots="false" :stagePadding="10" class="group_carousel">
          <router-link v-for="(list, index) in article.list" v-bind:key="index" v-bind:to="{ name: 'ArticleViewPage', params: { service: list.category, number: list.number.toString() }, query: { page: '1' } }" class="link_carousel">
            <div class="hgroup_carousel">
              <h2 class="title_carousel">{{ list.subject }}</h2>
            </div><!-- // hgroup_carousel -->

            <img v-bind:src="`${localhost}/${uploads}/${list.thumbnail}`" class="thumbnail_carousel" />
          </router-link>
        </carousel>
      </div><!-- // library -->
    </div><!-- // view_local -->

    <div class="contents">
      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link v-bind:to="{ name: 'GalleryListPage', params: { service: 'gallery', number: '1' } }" class="link_local">카테고리</router-link>
          </h3>
        </div><!-- // hgroup -->

        <div class="error_global" v-if="true || !category.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div><!-- // error_global -->

        <div class="error_global" v-if="true || category.loading && !category.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div><!-- // error_global -->

        <div class="visual_slider" v-if="category.list.length && category.list.length">
          <ul class="list_category">
            <li v-for="(list, index) in category.list" v-bind:key="index">
              <router-link v-bind:key="index" v-bind:to="{ name: 'ArticleViewPage', params: { service: list.category, number: list.number.toString() }, query: { page: '1' } }" class="link_category">{{ list.country }}</router-link>
            </li>
          </ul>
        </div><!-- // slick-library -->
      </div><!-- // view_local -->

      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link v-bind:to="{ name: 'GalleryListPage', params: { service: 'gallery', number: '1' } }" class="link_local">이미지 게시판</router-link>
          </h3>
        </div><!-- // hgroup -->

        <div class="error_global" v-if="true || !gallery.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div><!-- // error_global -->

        <div class="error_global" v-if="true || gallery.loading && !gallery.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div><!-- // error_global -->

        <div class="visual_slider" v-if="gallery.list.length && gallery.list.length">
          <carousel :items="2" :margin="10" :nav="false" :dots="false" :stagePadding="20" class="group_slider">
            <router-link v-for="(list, index) in gallery.list" v-bind:key="index" v-bind:to="{ name: 'PostViewPage', params: { service: list.category, number: list.number.toString() }, query: { page: '1' } }">
              <div v-bind:key="index" v-bind:style="{ 'background-image': `url('${localhost}/${uploads}/${list.thumbnail}')`}" class="thumbnail_slider">
                <div class="dimmed_subject">
                  <span class="text_subject">{{ list.subject }}</span>
                </div><!-- // dimmed_subject -->
              </div><!-- // image_library -->
            </router-link>
          </carousel>
        </div><!-- // slick-library -->
      </div><!-- // view_local -->

      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link v-bind:to="{ name: 'PostListPage', params: { service: 'talk', number: '1' } }" class="link_local">톡톡 한마디</router-link>
          </h3>
        </div><!-- // hgroup -->

        <div class="error_global" v-if="true || !talk.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div><!-- // error_global -->

        <div class="error_global" v-if="true || talk.loading && !talk.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div><!-- // error_global -->

        <ul class="list_trisection" v-if="talk.loading && talk.list.length">
          <li v-for="(list, index) in talk.list" v-bind:key="index">
            <router-link v-bind:to="{ name: 'PostViewPage', params: { service: list.category, number: list.number.toString() }, query: { page: '1' } }" class="link_trisection">
              <span class="text_trisection">{{ list.subject }}</span>
            </router-link>
          </li>
        </ul>
      </div><!-- // view_local -->

      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link v-bind:to="{ name: 'PostListPage', params: { service: 'update', number: '1' } }" class="link_local">업데이트</router-link>
          </h3>
        </div><!-- // hgroup -->

        <div class="error_global" v-if="true || !notice.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div><!-- // error_global -->

        <div class="error_global" v-if="true || update.loading && !update.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div><!-- // error_global -->

        <ul class="list_trisection" v-if="update.loading && update.list.length">
          <li v-for="(list, index) in update.list" v-bind:key="index">
            <router-link v-bind:to="{ name: 'PostViewPage', params: { service: list.category, number: list.number.toString() }, query: { page: '1' } }" class="link_trisection">
              <span class="text_trisection">{{ list.subject }}</span>
            </router-link>
          </li>
        </ul>
      </div><!-- // view_local -->

      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link v-bind:to="{ name: 'PostListPage', params: { service: 'notice', number: '1' } }" class="link_local">공지사항</router-link>
          </h3>
        </div><!-- // hgroup -->

        <div class="error_global" v-if="true || !notice.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div><!-- // error_global -->

        <div class="error_global" v-if="true || notice.loading && !notice.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div><!-- // error_global -->

        <ul class="list_trisection" v-if="notice.loading && notice.list.length">
          <li v-for="(list, index) in notice.list" v-bind:key="index">
            <router-link v-bind:to="{ name: 'PostViewPage', params: {service: list.category, number: list.number.toString() }, query: { page: '1' } }" class="link_trisection">
              <span class="text_trisection">{{ list.subject }}</span>
            </router-link>
          </li>
        </ul>
      </div><!-- // view_local -->
    </div><!-- // contents -->
  </div><!-- // container -->
</template>

<script>
import { localhost, uploads } from '../../config/setting.js'
import carousel from 'vue-owl-carousel'
import api from '@/api'

// prettier-ignore
export default {
  name: 'MainPage',
  components: { carousel },
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
    api.get(`/api/`).then((response) => {
      console.log('[MainPage.vue] created() → response.data: ', response.data)

      this.notice.list = response.data.notice
      this.notice.loading = true
      console.log('[MainPage.vue] created() → this.notice.list: ', this.notice.list)

      this.update.list = response.data.update
      this.update.loading = true
      console.log('[MainPage.vue] created() → this.update.list: ', this.update.list)

      this.talk.list = response.data.talk
      this.talk.loading = true
      console.log('[MainPage.vue] created() → this.talk.list: ', this.talk.list)

      this.gallery.list = response.data.gallery
      this.gallery.loading = true
      console.log('[MainPage.vue] created() → this.gallery.list: ', this.gallery.list)

      this.article.list = response.data.article
      this.article.loading = true
      console.log('[MainPage.vue] created() → this.article.list: ', this.article.list)

      this.category.list = response.data.category
      this.category.loading = true
      console.log('[MainPage.vue] created() → this.category.list: ', this.category.list)
    }).catch((error) => {
      console.log('[MainPage.vue] created() → error: ', error)
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
