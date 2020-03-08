<template>
  <ul v-if="search.keyword" class="list_paging">
    <li>
      <router-link
        v-if="pagination.current > 1"
        v-bind:to="{
          name: 'PostList',
          params: { number: (pagination.current - 1).toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        class="link_paging"
        >이전</router-link
      >
    </li>
    <li v-for="(i, index) in pagination2" v-bind:key="index">
      <router-link
        v-if="pagination.current === i"
        v-bind:to="{
          name: 'PostList',
          params: { number: i.toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        v-bind:key="i"
        class="link_paging current"
        >{{ i }}</router-link
      >

      <router-link
        v-else
        v-bind:to="{
          name: 'PostList',
          params: { number: i.toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        class="link_paging"
        >{{ i }}</router-link
      >
    </li>
    <li>
      <router-link
        v-if="pagination.current < pagination.total"
        v-bind:to="{
          name: 'PostList',
          params: { number: (pagination.current + 1).toString() },
          query: { select: search.select, keyword: search.keyword }
        }"
        class="link_paging"
        >다음</router-link
      >
    </li>
  </ul>

  <ul v-else class="list_paging">
    <li>
      <router-link
        v-if="pagination.current > 1"
        v-bind:to="{
          name: 'PostList',
          params: { number: (pagination.current - 1).toString() }
        }"
        class="link_paging"
        >이전</router-link
      >
    </li>
    <li v-for="(i, index) in pagination2" v-bind:key="index">
      <router-link
        v-if="pagination.current === i"
        v-bind:to="{ name: 'PostList', params: { number: i.toString() } }"
        v-bind:key="i"
        class="link_paging current"
        >{{ i }}</router-link
      >

      <router-link v-else v-bind:to="{ name: 'PostList', params: { number: i.toString() } }" class="link_paging">{{ i }}</router-link>
    </li>
    <li>
      <router-link
        v-if="pagination.current < pagination.total"
        v-bind:to="{
          name: 'PostList',
          params: { number: (pagination.current + 1).toString() }
        }"
        class="link_paging"
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
      console.log('[Pagination.vue] computed → pagination2 → this.pagination.start: ', this.pagination.start)
      console.log('[Pagination.vue] computed → pagination2 → this.pagination.end: ', this.pagination.end)

      for (let i = this.pagination.start; i <= this.pagination.end; i++) {
        pagination2.push(i)
      }

      console.log('[Pagination.vue] computed → pagination2 → pagination2: ', pagination2)
      return pagination2
    }
  }
}
</script>
