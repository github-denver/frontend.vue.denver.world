<template>
  <div class="group_board type_gallery">
    <ul class="list_thumbnail">
      <li v-for="post in posts" v-bind:key="post.number">
        <router-link
          v-if="search.keyword"
          v-bind:to="{
            name: 'PostViewPage',
            params: {
              service: category.value,
              number: post.number.toString()
            },
            query: {
              select: search.select,
              keyword: search.keyword,
              page: number.toString()
            }
          }"
          class="link_thumbnail"
        >
          <div class="group_thumbnail">
            <span
              class="img_thumbnail"
              v-bind:style="{
                'background-image':
                  'url(\'http://localhost:3000' + post.thumbnail + '\')'
              }"
            ></span
            ><!-- // img_thumbnail -->
          </div>
          <!-- // group_thumbnail -->

          <div class="dimmed_subject">
            <span class="text_subject">{{ post.subject }}</span>
          </div>
          <!-- // dimmed_subject -->
        </router-link>

        <router-link
          v-else
          v-bind:to="{
            name: 'PostViewPage',
            params: {
              service: category.value,
              number: post.number.toString()
            },
            query: {
              page: number.toString()
            }
          }"
          class="link_thumbnail"
        >
          <div class="group_thumbnail">
            <span
              class="img_thumbnail"
              v-bind:style="{
                'background-image':
                  'url(\'http://localhost:3000/uploads/' +
                  post.thumbnail +
                  '\')'
              }"
            ></span
            ><!-- //img_thumbnail -->
          </div>
          <!-- // group_thumbnail -->

          <div class="dimmed_subject">
            <span class="text_subject">{{ post.subject }}</span>
          </div>
          <!-- //dimmed_subject -->
        </router-link>
      </li>
    </ul>
  </div>
  <!-- // group_board -->
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'GalleryList',
  props: {
    number: {
      type: String,
      required: true
    },
    posts: {
      type: Array,
      required: true
    },
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['search'])
  }
}
</script>
