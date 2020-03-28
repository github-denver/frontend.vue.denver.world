<template>
  <div class="main_category">
    <Hgroup
      :attribute="{
        title: attribute.title,
        component: attribute.component.index,
        params: {
          service: attribute.params.service,
          number: attribute.params.number
        }
      }"
    />

    <Loading
      :attribute="{
        result: !category.loading
      }"
    >
      <template v-slot:loading>
        <p class="text_message">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: category.loading && !category.list.length
      }"
    >
      <template v-slot:empty>
        <p class="text_message">카테고리가 존재하지 않습니다</p>
      </template>
    </Empty>

    <div
      v-if="category.list.length && category.list.length"
      class="group_category"
    >
      <ul class="list_category">
        <li
          v-for="(list, index) in category.list"
          :key="index"
          class="item_category"
        >
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
import Hgroup from '@/components/common/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

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

<style>
.main_category {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e9e9e9;
}

.main_category .group_category {
  margin: 10px -10px 0;
}

.main_category .list_category {
  overflow: auto;
  padding-right: 10px;
  font-size: 0;
  white-space: nowrap;
}

.main_category .item_category {
  display: inline-block;
  width: 25%;
  padding-left: 10px;
  box-sizing: border-box;
  vertical-align: top;
}

.main_category .box_category {
  position: relative;
  padding-top: 100%;
}

.main_category .link_category {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 700;
  background-color: #f1f1f1;
  text-align: center;
}
</style>
