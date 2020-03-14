<template>
  <div class="group_board type_gallery">
    <ul class="list_thumbnail">
      <li v-for="post in posts" :key="post.number">
        <router-link
          v-if="search.keyword"
          :to="{
            name: 'PostRead',
            params: { service: category.value, number: post.number.toString() },
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
              class="thumbnail_local"
              :style="{
                'background-image': `url('${localhost}/${uploads}/${post.thumbnail}')`
              }"
            ></span>
          </div>

          <div class="dimmed_subject">
            <span class="text_subject">{{ post.subject }}</span>
          </div>
        </router-link>
        <router-link
          v-else
          :to="{
            name: 'PostRead',
            params: { service: category.value, number: post.number.toString() },
            query: { page: number.toString() }
          }"
          class="link_thumbnail"
        >
          <div class="group_thumbnail">
            <span
              class="thumbnail_local"
              :style="{
                'background-image': `url('${localhost}/${uploads}/${post.thumbnail}')`
              }"
            ></span>
          </div>

          <div class="dimmed_subject">
            <span class="text_subject">{{ post.subject }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { localhost, uploads } from '../../../../config/setting'
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
    ...mapState(['search']),
    localhost() {
      return localhost
    },
    uploads() {
      return uploads
    }
  }
}
</script>
