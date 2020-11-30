<template>
  <div class="main_category">
    <div class="hgrp">
      <h3 class="tit_hgrp">
        <span v-html="attribute.title" class="link_hgrp"></span>
      </h3>
    </div>
    <!-- // hgrp -->

    <Loading
      :attribute="{
        result: !category.loading
      }"
    >
      <template v-slot:loading>
        <p class="txt_loading">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: category.loading && !category.list.length
      }"
    >
      <template v-slot:empty>
        <p class="txt_loading">카테고리가 존재하지 않습니다</p>
      </template>
    </Empty>

    <div v-if="category.list.length && category.list.length" class="grp_category">
      <ul class="list_category">
        <li v-for="(list, index) in category.list" :key="index">
          <div class="box_category">
            <router-link :key="index" :to="list.url" class="link_category">
              <span class="outer_cell">
                <span class="inner_cell">{{ list.country }}</span>
              </span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hgroup from '@/components/unit/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/unit/Empty'

export default {
  name: 'MainCategory',
  components: { Hgroup, Loading, Empty },
  props: {
    category: {
      type: Object,
      required: true
    },
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
