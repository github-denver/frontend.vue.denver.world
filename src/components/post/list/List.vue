<template>
  <div class="post_list">
    <ul class="list_post">
      <li v-for="post in posts" :key="post.number">
        <router-link
          v-if="search.keyword"
          :to="{
            name: 'PostRead',
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
          class="link_post outer_cell"
        >
          <Picture
            :attribute="{
              picture: post.picture,
              state: 'board'
            }"
          />

          <div class="post_container inner_cell">
            <div class="group_subject">
              <span class="title_local">{{ post.subject }}</span>
            </div>

            <div class="post_information">
              <span class="text_local"
                ><span class="screen_out">작성자</span> {{ post.name }}</span
              >
              <span class="text_local"
                ><span class="screen_out">등록일</span>
                {{ post.regdate | moment('YY.MM.DD') }}</span
              >
              <span class="text_local"
                ><span class="screen_out">조회수</span> {{ post.count }}</span
              >
            </div>
          </div>
        </router-link>

        <router-link
          v-else
          :to="{
            name: 'PostRead',
            params: {
              service: category.value,
              number: post.number.toString()
            },
            query: {
              page: number.toString()
            }
          }"
          class="link_post outer_cell"
        >
          <Picture
            :attribute="{
              picture: post.picture,
              state: 'board'
            }"
          />

          <div class="post_container inner_cell">
            <div class="group_subject">
              <span class="title_local">{{ post.subject }}</span>
            </div>

            <div class="post_information">
              <span class="text_local"
                ><span class="screen_out">작성자</span> {{ post.name }}</span
              >
              <span class="text_local"
                ><span class="screen_out">등록일</span>
                {{ post.regdate | moment('YY.MM.DD') }}</span
              >
              <span class="text_local"
                ><span class="screen_out">조회수</span> {{ post.count }}</span
              >
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- // post_list -->
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

<style>
.post_list {
  margin-top: 10px;
}

.post_list li {
  padding: 10px 0;
}

.post_list li + li {
  border-top: 1px solid #e9e9e9;
}

.post_list .link_post {
  width: auto;
}

.post_list .group_picture {
  overflow: hidden;
  float: left;
  margin-right: 10px;
}
</style>
