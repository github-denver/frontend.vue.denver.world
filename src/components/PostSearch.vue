<!-- prettier-ignore -->
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
      </div><!-- // select_global -->

      <div class="outer_field">
        <span class="field_global">
          <input type="search" name="keyword" class="field_local" v-model="keyword" />
        </span><!-- // field_global -->
      </div><!-- // outer_field -->

      <router-link v-bind:to="{ name: 'PostListPage', params: { service: category.value, number: '1' }, query: { select: select.value, keyword: keyword } }" v-on:click.native="submit" class="button_global type_delete">검색하기</router-link>
    </div><!-- // group_search -->
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

// prettier-ignore
export default {
  name: 'PostSearch',
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
    console.log('[PostSearch.vue] created() → this.category: ', this.category)

    this.keyword = this.search.keyword
    console.log('[PostSearch.vue] created() → this.keyword: ', this.keyword)
  },
  methods: {
    ...mapActions(['fetchPostList']),
    onChange(event) {
      this.select.text = event.target.options[event.target.selectedIndex].text
      console.log('[PostSearch.vue] methods() → onChange → this.select.text: ', this.select.text)

      this.select.value = event.target.value
      console.log('[PostSearch.vue] methods() → onChange → this.select.text: ', this.select.value)
    },
    submit() {
      console.log('[PostSearch.vue] methods() → onChange → this.keyword: ', this.keyword)

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
