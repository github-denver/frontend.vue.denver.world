<!-- prettier-ignore -->
<template>
  <div class="group_board">
    <ul class="list_board">
      <li v-for="post in posts" v-bind:key="post.number">
        <router-link v-if="search.keyword" v-bind:to="{ name: 'PostViewPage', params: { service: category.value, number: post.number.toString() }, query: { select: search.select, keyword: search.keyword, page: number.toString() } }" class="link_board">
          <div class="outer_cell">
            <div class="group_picture">
              <img v-if="typeof post.picture !== 'undefined' || post.picture !== null || post.picture !== ''" v-bind:src="'http://localhost:3000/uploads/' + post.picture" v-bind:alt="post.name" class="thumbnail_picture" />

              <img v-else src="http://localhost:3000/uploads/default_picture.png" alt="기본 이미지" class="thumbnail_picture" />
            </div><!-- // group_picture -->

            <div class="information_board inner_cell">
              <div class="group_subject">
                <span class="text_subject">{{ post.subject }}</span>
              </div><!-- // group_subject -->

              <div class="group_option">
                <span class="text_board text_writer"><span class="screen_out">작성자</span> {{ post.name }}</span>
                <span class="text_board text_date">등록일 {{ post.regdate | moment('YY.MM.DD') }}</span>
                <span class="text_board text_count">조회수 {{ post.count }}</span>
              </div><!-- // group_option -->
            </div><!-- // information_board -->
          </div><!-- // outer_cell -->
        </router-link>

        <router-link v-else v-bind:to="{ name: 'PostViewPage', params: { service: category.value, number: post.number.toString() }, query: { page: number.toString() } }" class="link_board">
          <div class="outer_cell">
            <div class="group_picture">
              <img v-if="typeof post.picture !== 'undefined' || post.picture !== null || post.picture !== ''" v-bind:src="'http://localhost:3000/uploads/' + post.picture" v-bind:alt="post.name" class="thumbnail_picture" />

              <img v-else src="http://localhost:3000/uploads/default_picture.png" alt="기본 이미지" class="thumbnail_picture" />
            </div><!-- // group_picture -->

            <div class="information_board inner_cell">
              <div class="group_subject">
                <span class="text_subject">{{ post.subject }}</span>
              </div><!-- // group_subject -->

              <div class="group_option">
                <span class="text_board text_writer"><span class="screen_out">작성자</span> {{ post.name }}</span>
                <span class="text_board text_date">등록일 {{ post.regdate | moment('YY.MM.DD') }}</span>
                <span class="text_board text_count">조회수 {{ post.count }}</span>
              </div><!-- // group_option -->
            </div><!-- // information_board -->
          </div><!-- // outer_cell -->
        </router-link>
      </li>
    </ul>
  </div><!-- // group_board -->
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'PostList',
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
