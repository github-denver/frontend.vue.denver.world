<template>
  <div id="container">
    <div class="contents">
      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link
              v-bind:to="{
                name: 'PostListPage',
                params: { service: 'notice', number: '1' }
              }"
              class="link_title"
              >공지사항</router-link
            >
          </h3>
        </div>

        <div class="error_global" v-if="!notice.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div>

        <ul class="list_trisection" v-if="notice.loading && notice.list.length">
          <li v-for="(list, index) in notice.list" v-bind:key="index">
            <router-link
              v-bind:to="{
                name: 'PostViewPage',
                params: {
                  service: list.category,
                  number: list.number.toString()
                },
                query: {
                  page: '1'
                }
              }"
              class="link_trisection"
            >
              <span class="text_trisection">{{ list.subject }}</span>
            </router-link>
          </li>
        </ul>
        <div class="error_global" v-if="notice.loading && !notice.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div>
      </div>

      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link
              v-bind:to="{
                name: 'PostListPage',
                params: { service: 'update', number: '1' }
              }"
              class="link_title"
              >업데이트</router-link
            >
          </h3>
        </div>

        <div class="error_global" v-if="!notice.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div>

        <ul class="list_trisection" v-if="update.loading && update.list.length">
          <li v-for="(list, index) in update.list" v-bind:key="index">
            <router-link
              v-bind:to="{
                name: 'PostViewPage',
                params: {
                  service: list.category,
                  number: list.number.toString()
                },
                query: {
                  page: '1'
                }
              }"
              class="link_trisection"
            >
              <span class="text_trisection">{{ list.subject }}</span>
            </router-link>
          </li>
        </ul>
        <div class="error_global" v-if="update.loading && !update.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div>
      </div>

      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link
              v-bind:to="{
                name: 'PostListPage',
                params: { service: 'talk', number: '1' }
              }"
              class="link_title"
              >톡톡 한마디</router-link
            >
          </h3>
        </div>

        <div class="error_global" v-if="!talk.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div>

        <ul class="list_trisection" v-if="talk.loading && talk.list.length">
          <li v-for="(list, index) in talk.list" v-bind:key="index">
            <router-link
              v-bind:to="{
                name: 'PostViewPage',
                params: {
                  service: list.category,
                  number: list.number.toString()
                },
                query: {
                  page: '1'
                }
              }"
              class="link_trisection"
            >
              <span class="text_trisection">{{ list.subject }}</span>
            </router-link>
          </li>
        </ul>
        <div class="error_global" v-if="talk.loading && !talk.list.length">
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div>
      </div>

      <div class="view_local">
        <div class="hgroup">
          <h3 class="title_local">
            <router-link
              v-bind:to="{
                name: 'GalleryListPage',
                params: { service: 'gallery', number: '1' }
              }"
              class="link_title"
              >이미지 게시판</router-link
            >
          </h3>
        </div>

        <div class="error_global" v-if="!gallery.loading">
          <p class="text_error">읽어들이는 중..</p>
        </div>

        <div
          class="slick-library"
          v-if="gallery.list.length && gallery.list.length"
        >
          <carousel :items="1" :margin="20" :nav="false" :dots="false">
            <router-link
              v-for="(list, index) in gallery.list"
              v-bind:key="index"
              v-bind:to="{
                name: 'PostViewPage',
                params: {
                  service: list.category,
                  number: list.number.toString()
                },
                query: {
                  page: '1'
                }
              }"
            >
              <div
                v-bind:key="index"
                v-bind:style="{
                  'background-image':
                    'url(\'http://localhost:3000/uploads/' +
                    list.thumbnail +
                    '\')'
                }"
                class="image_library"
              >
                <div class="dimmed_subject">
                  <span class="text_subject">{{ list.subject }}</span>
                </div>
              </div>
            </router-link>
          </carousel>
        </div>
        <!-- // slick-library -->

        <div
          class="error_global"
          v-if="gallery.loading && !gallery.list.length"
        >
          <p class="text_error">글이 존재하지 않습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import api from '@/api'

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
      }
    }
  },
  // prettier-ignore
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
    }).catch((error) => {
      console.log('[MainPage.vue] created() → error: ', error)
    })
  }
}
</script>
