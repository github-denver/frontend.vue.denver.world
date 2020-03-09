<template>
  <form v-on:submit.prevent="submit" novalidate>
    <div class="group_search">
      <div class="select_global">
        <label for="search" class="label_local">
          <span class="text_local">{{ select.text }}</span>
          <span class="ico_global ico_arrow"></span>
        </label>

        <select name="search" class="select_local" v-on:change="onChange" v-model="select.value">
          <option value="subject">제목</option>
          <option value="content">내용</option>
          <option value="writer">작성자</option>
        </select>
      </div>

      <Input v-bind:data="{ type: 'search', className: 'local', text: '검색어', label: 'id', name: 'keyword' }" v-model="keyword" />

      <!-- <div class="group_field">
        <span class="field_global"><input type="search" name="keyword" class="field_local" v-model="keyword" /></span>
      </div> -->

      <link-rectangle
        v-bind:data="{
          to: 'PostList',
          type: category.value,
          number: '1',
          select: select.value,
          keyword: keyword,
          className: ['button_global', 'type_delete'],
          text: 'rectangle: 검색하기',
          event: submit
        }"
      />
    </div>
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
