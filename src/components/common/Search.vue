<template>
  <form @submit.prevent="submit" novalidate>
    <div class="grp_search">
      <div class="grp_opt">
        <label for="search" class="lab_opt">
          <span class="txt_opt">{{ select.text }}</span>
          <span class="ico_g ico_arrow"></span>
        </label>

        <select name="search" class="opt_comm" @change="onChange" v-model="select.value">
          <option value="subject">제목</option>
          <option value="content">내용</option>
          <!-- <option value="writer">작성자</option> -->
        </select>
      </div>
      <!-- // grp_opt -->

      <Input :attribute="{ type: 'search', name: 'keyword', id: 'keyword' }" v-model="keyword" />

      <router-link
        :to="{
          name: this.$route.params.service === 'notice' || this.$route.params.service === 'talk' ? 'CommunityList' : 'GalleryList',
          params: {
            service: category.value,
            number: '1'
          },
          query: {
            select: select.value,
            keyword: keyword
          }
        }"
        class="link_g link_search"
        @click.native="submit"
        >검색하기</router-link
      >
    </div>
    <!-- // grp_search -->
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import DesignSelect from '@/components/common/Select'
import Input from '@/components/unit/Input'

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
    this.keyword = this.search.keyword
    // console.log('[Search.vue] created() → this.keyword: ', this.keyword)
  },
  methods: {
    ...mapActions(['fetchPostList']),
    onChange(event) {
      this.select.text = event.target.options[event.target.selectedIndex].text
      // console.log('[Search.vue] methods() → onChange → this.select.text: ', this.select.text)

      this.select.value = event.target.value
      // console.log('[Search.vue] methods() → onChange → this.select.text: ', this.select.value)
    },
    submit() {
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

<style scoped></style>
