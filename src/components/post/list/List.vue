<template>
  <div class="post-list">
    <ul class="list">
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
        >
          <Picture
            :attribute="{
              state: 'board',
              picture: post.picture
            }"
          />

          <div class="container">
            <div>
              <span class="subject">{{ post.subject }}</span>
            </div>

            <div class="information">
              <span class="text">작성자 {{ post.name }}</span>
              <span class="text">등록일 {{ post.regdate | moment('YY.MM.DD') }}</span>
              <span class="text">조회수 {{ post.count }}</span>
            </div>
          </div>
        </router-link>

        <router-link
          v-else
          :to="{
            name: 'PostRead',
            params: { service: category.value, number: post.number.toString() },
            query: { page: number.toString() }
          }"
        >
          <Picture
            :attribute="{
              state: 'board',
              picture: post.picture
            }"
          />

          <div class="container">
            <div>
              <span class="subject">{{ post.subject }}</span>
            </div>

            <div class="information">
              <span class="text">작성자 {{ post.name }}</span>
              <span class="text">등록일 {{ post.regdate | moment('YY.MM.DD') }}</span>
              <span class="text">조회수 {{ post.count }}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- // post-list -->
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Picture from '@/components/common/Picture'
import moment from 'moment'

export default {
  name: 'PostList',
  components: { Picture },
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
    ...mapGetters(['isAuthorized']),
    ...mapState(['search'])
  }
}
</script>
