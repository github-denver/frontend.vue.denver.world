<template>
  <form @submit.prevent="submit" novalidate>
    <div class="group_search">
      <div class="group_select">
        <label for="search" class="label_local">
          <span class="text_local">{{ select.text }}</span>
          <span class="icon_global icon_arrow"></span>
        </label>

        <select name="search" class="select_local" @change="onChange" v-model="select.value">
          <option value="subject">제목</option>
          <option value="content">내용</option>
          <!-- <option value="writer">작성자</option> -->
        </select>
      </div>
      <!-- // group_select -->

      <Input :attribute="{ type: 'search', name: 'keyword', id: 'keyword' }" v-model="keyword" />

      <router-link
        :to="{
          name: this.$route.params.service !== 'gallery' ? 'PostList' : 'GalleryList',
          params: {
            service: category.value,
            number: '1'
          },
          query: {
            select: select.value,
            keyword: keyword
          }
        }"
        class="link_global link_search"
        @click.native="submit"
        >검색하기</router-link
      >
    </div>
    <!-- // group_search -->
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import DesignSelect from '@/components/common/DesignSelect'
import Input from '@/components/common/Input'

export default {
  name: 'Search',
  components: { DesignSelect, Input },
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
    console.log('☆ [Search.vue] created() → this.category: ', this.category)
    console.log('☆ [Search.vue] created() → this.search.keyword: ', this.search.keyword)

    this.keyword = this.search.keyword
    console.log('[Search.vue] created() → this.keyword: ', this.keyword)
  },
  methods: {
    ...mapActions(['fetchPostList']),
    onChange(event) {
      this.select.text = event.target.options[event.target.selectedIndex].text
      console.log('▼ [Search.vue] methods() → onChange → this.select.text: ', this.select.text)

      this.select.value = event.target.value
      console.log('▼ [Search.vue] methods() → onChange → this.select.text: ', this.select.value)
    },
    submit() {
      console.log('○ [Search.vue] methods() → onChange → this.keyword: ', this.keyword)

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

<style>
.group_search {
  margin-top: 20px;
  font-size: 0;
}

.group_search .select_global {
  width: 30%;
  vertical-align: top;
}

.group_search .link_global {
  margin-top: 10px;
}

.group_search .group_field {
  width: 70%;
  padding-left: 10px;
  box-sizing: border-box;
  vertical-align: top;
}
</style>
