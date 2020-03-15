<template>
  <form @submit.prevent="submit" novalidate>
    <search-component>
      <select-component :attribute="{ className: 'search' }">
        <label for="search">
          <span class="text">{{ select.text }}</span>
          <span class="icon"></span>
        </label>

        <select name="search" @change="onChange" v-model="select.value">
          <option value="subject">제목</option>
          <option value="content">내용</option>
          <option value="writer">작성자</option>
        </select>
      </select-component>

      <input-component :attribute="{ className: 'search' }">
        <span>
          <input type="search" id="keyword" name="keyword" @change="onChange" />
        </span>
      </input-component>

      <rectangle-link :attribute="{ className: 'search' }">
        <router-link
          :to="{
            name: 'PostList',
            params: { service: category.value, number: '1' },
            query: { select: select.value, keyword: keyword },
            event: submit
          }"
          >검색하기</router-link
        >
      </rectangle-link>
    </search-component>
  </form>
</template>

<script>
import Input from '@/components/common/Input'
import LinkRectangle from '@/components/link/Rectangle'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Search',
  components: { Input, LinkRectangle },
  props: {
    category: {
      type: Object,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      select: {
        text: '제목',
        value: 'subject'
      },
      keyword: ''
    }
  },
  computed: {
    ...mapState(['search'])
  },
  created() {
    console.log('[Search.vue] created() → this.category: ', this.category)

    this.keyword = this.search.keyword
    console.log('[Search.vue] created() → this.keyword: ', this.keyword)
  },
  methods: {
    ...mapActions(['fetchPostList']),
    onChange(event) {
      this.select.text = event.target.options[event.target.selectedIndex].text
      console.log('[Search.vue] methods() → onChange → this.select.text: ', this.select.text)

      this.select.value = event.target.value
      console.log('[Search.vue] methods() → onChange → this.select.text: ', this.select.value)
    },
    submit() {
      console.log('[Search.vue] methods() → onChange → this.keyword: ', this.keyword)

      this.fetchPostList({
        category: this.category.value,
        number: 1,
        select: this.select.value,
        keyword: this.keyword
      })
    }
  }
}
</script>
