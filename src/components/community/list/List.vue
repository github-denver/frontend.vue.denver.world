<template>
  <div class="grp_community">
    <ul class="list_community">
      <li v-for="post in posts" :key="post.number">
        <router-link
          v-if="search.keyword"
          :to="{
            name: 'CommunityRead',
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
          class="link_community outer_cell"
        >
          <Picture
            :attribute="{
              picture: post.picture,
              state: 'board'
            }"
          />

          <div class="grp_info inner_cell">
            <div class="grp_subject">
              <span class="tit_local">{{ post.subject }}</span>
            </div>

            <div class="read_info">
              <span class="txt_local"><span class="screen_out">작성자</span> {{ post.name }}</span>
              <span class="txt_local"><span class="screen_out">등록일</span> {{ post.regdate | moment('YY.MM.DD') }}</span>
              <span class="txt_local"><span class="screen_out">조회수</span> {{ post.count }}</span>
            </div>
          </div>
        </router-link>

        <router-link
          v-else
          :to="{
            name: 'CommunityRead',
            params: {
              service: category.value,
              number: post.number.toString()
            },
            query: {
              page: number.toString()
            }
          }"
          class="link_community outer_cell"
        >
          <Picture
            :attribute="{
              picture: post.picture,
              state: 'board'
            }"
          />

          <div class="grp_info inner_cell">
            <div class="grp_subject">
              <span class="tit_local">{{ post.subject }}</span>
            </div>

            <div class="read_info">
              <span class="txt_local"><span class="screen_out">작성자</span> {{ post.name }}</span>
              <span class="txt_local"><span class="screen_out">등록일</span> {{ post.regdate | moment('YY.MM.DD') }}</span>
              <span class="txt_local"><span class="screen_out">조회수</span> {{ post.count }}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- // grp_community -->
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Picture from '@/components/common/Picture'
import moment from 'moment'

export default {
  name: 'List',
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

<style scoped>
.grp_community {
  margin-top: 10px;
}

.grp_community li {
  padding: 10px 0;
}

.grp_community li + li {
  border-top: 1px solid #e9e9e9;
}

.grp_community .link_community {
  width: auto;
}

.grp_community .grp_picture {
  overflow: hidden;
  float: left;
  margin-right: 10px;
}
</style>
