<template>
  <ul class="paging" v-if="search.keyword">
    <li v-if="pagination.current > 1">
      <router-link
        :to="{
          name: 'PostList',
          params: { number: (pagination.current - 1).toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
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
        :key="i"
        >{{ i }}</router-link
      >
      <router-link
        v-else
        :to="{
          name: 'PostList',
          params: { number: i.toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
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
        >다음</router-link
      >
    </li>
  </ul>

  <ul class="paging" v-else>
    <li v-if="pagination.current > 1">
      <router-link
        :to="{
          name: 'PostList',
          params: { number: (pagination.current - 1).toString() }
        }"
        >이전</router-link
      >
    </li>
    <li v-for="(i, index) in pagination2" :key="index">
      <router-link v-if="pagination.current === i" :to="{ name: 'PostList', params: { number: i.toString() } }" :key="i" class="current">{{ i }}</router-link>

      <router-link v-else :to="{ name: 'PostList', params: { number: i.toString() } }">{{ i }}</router-link>
    </li>
    <li v-if="pagination.current < pagination.total">
      <router-link
        :to="{
          name: 'PostList',
          params: { number: (pagination.current + 1).toString() }
        }"
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
