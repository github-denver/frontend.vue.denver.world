<template>
  <ul class="list_gallery">
    <li v-for="post in posts" :key="post.number">
      <router-link
        v-if="search.keyword"
        :to="{
          name: post.category !== 'library' ? 'PostRead' : 'ArticleRead',
          params: { service: category.value, number: post.number.toString() },
          query: {
            select: search.select,
            keyword: search.keyword,
            page: number.toString()
          }
        }"
        class="link_gallery"
      >
        <Thumbnail
          :attribute="{
            style: {
              paddingTop: '56.33802816901408%'
            },
            thumbnail: post.thumbnail,
            subject: post.subject
          }"
        >
          <Dimmed>
            <Subject>{{ post.subject }}</Subject>
          </Dimmed>
        </Thumbnail>
      </router-link>

      <router-link
        v-else
        :to="{
          name: post.category !== 'library' ? 'PostRead' : 'ArticleRead',
          params: { service: category.value, number: post.number.toString() },
          query: { page: number.toString() }
        }"
        class="link_gallery"
      >
        <Thumbnail
          :attribute="{
            style: {
              paddingTop: '56.33802816901408%'
            },
            thumbnail: post.thumbnail,
            subject: post.subject
          }"
        >
          <Dimmed>
            <Subject>{{ post.subject }}</Subject>
          </Dimmed>
        </Thumbnail>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import Thumbnail from '@/components/common/Thumbnail'
import Dimmed from '@/components/common/Dimmed'
import Subject from '@/components/common/Subject'

import moment from 'moment'

export default {
  name: 'GalleryList',
  components: {
    Thumbnail,
    Dimmed,
    Subject
  },
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
    ...mapGetters(['path', 'uploads']),
    ...mapState(['search'])
  }
}
</script>

<style>
.list_gallery {
  margin-top: 10px;
}

.list_gallery li + li {
  margin-top: 10px;
}

.list_gallery .link_gallery {
  display: block;
  position: relative;
  font-size: 12px;
}
</style>
