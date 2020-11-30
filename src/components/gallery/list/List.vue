<template>
  <ul class="list_gallery">
    <li v-for="(post, index) in posts" :key="index">
      <router-link
        v-if="search.keyword"
        :to="{
          name: post.category === 'notice' || post.category === 'talk' ? 'CommunityRead' : 'ArticleRead',
          params: {
            service: category.value !== 'popular' ? category.value : post.category,
            number: post.number.toString()
          },
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
              paddingTop: '56.25%',
              backgroundPosition: '50% 50%'
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
          name: post.category === 'notice' || post.category === 'talk' ? 'CommunityRead' : 'ArticleRead',
          params: {
            service: category.value !== 'popular' ? category.value : post.category,
            number: post.number.toString()
          },
          query: {
            page: number.toString()
          }
        }"
        class="link_gallery"
      >
        <Thumbnail
          :attribute="{
            style: {
              paddingTop: '56.25%',
              backgroundPosition: '50% 50%'
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
import Dimmed from '@/components/unit/Dimmed'
import Subject from '@/components/unit/Subject'

import moment from 'moment'

export default {
  name: 'Contents',
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

<style scoped></style>
