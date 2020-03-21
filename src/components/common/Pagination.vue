<template>
  <ul class="list_pagination" v-if="search.keyword">
    <li v-if="pagination.current > 1">
      <router-link
        :to="{
          name: 'PostList',
          params: { number: (pagination.current - 1).toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        class="link_pagination"
        >이전</router-link
      >
    </li>
    <li v-for="(i, index) in pagination2" :key="index">
      <router-link
        v-if="pagination.current === i"
        :to="{
          name: 'PostList',
          params: { number: i.toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        class="link_pagination"
        >{{ i }}</router-link
      >
      <router-link
        v-else
        :to="{
          name: 'PostList',
          params: { number: i.toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        class="link_pagination"
        >{{ i }}</router-link
      >
    </li>
    <li v-if="pagination.current < pagination.total">
      <router-link
        :to="{
          name: 'PostList',
          params: { number: (pagination.current + 1).toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        class="link_pagination"
        >다음</router-link
      >
    </li>
  </ul>

  <ul class="list_pagination" v-else>
    <li v-if="pagination.current > 1">
      <router-link
        :to="{
          name: 'PostList',
          params: { number: (pagination.current - 1).toString() }
        }"
        class="link_pagination"
        >이전</router-link
      >
    </li>
    <li v-for="(i, index) in pagination2" :key="index">
      <router-link v-if="pagination.current === i" :to="{ name: 'PostList', params: { number: i.toString() } }" :key="i" class="link_pagination current">{{
        i
      }}</router-link>

      <router-link v-else :to="{ name: 'PostList', params: { number: i.toString() } }" class="link_pagination">{{ i }}</router-link>
    </li>
    <li v-if="pagination.current < pagination.total">
      <router-link
        :to="{
          name: 'PostList',
          params: { number: (pagination.current + 1).toString() }
        }"
        class="link_pagination"
        >다음</router-link
      >
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapState(['pagination', 'search']),
    pagination2() {
      let pagination2 = []

      for (let i = this.pagination.start; i <= this.pagination.end; i++) {
        pagination2.push(i)
      }

      return pagination2
    }
  }
}
</script>

<style>
.list_pagination {
  margin-top: 20px;
  font-size: 0;
  text-align: center;
}

.list_pagination li {
  display: inline-block;
}

.list_pagination li + li {
  margin-left: 12px;
}

.list_pagination .link_pagination {
  display: block;
  min-width: 30px;
  padding: 7px 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1;
}

.list_pagination .link_pagination.current {
  font-weight: 700;
  color: rgba(270, 70, 70, 1);
  border: 1px solid rgba(270, 70, 70, 1);
  background-color: #fff;
}
</style>
