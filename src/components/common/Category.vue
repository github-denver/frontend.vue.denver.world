<template>
  <section class="view_local">
    <Hgroup>
      <template v-slot:title>
        <h3>
          <router-link
            :to="{
              name: 'Main',
              params: {
                service: attribute.params.service,
                number: attribute.params.number
              }
            }"
          >
            {{ attribute.title }}</router-link
          >
        </h3>
      </template>
    </Hgroup>

    <Loading
      :attribute="{
        result: !category.loading
      }"
    >
      <template v-slot:loading>
        <p>읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: category.loading && !category.list.length
      }"
    >
      <template v-slot:empty>
        <p>카테고리가 존재하지 않습니다</p>
      </template>
    </Empty>

    <div
      class="visual_gallery"
      v-if="category.list.length && category.list.length"
    >
      <ul>
        <li v-for="(list, index) in category.list" :key="index">
          <div class="inner">
            <router-link
              :key="index"
              :to="{
                name: attribute.component.read,
                params: {
                  service: attribute.params.service,
                  number: list.number.toString()
                },
                query: {
                  page: 1
                }
              }"
            >
              <span class="outer_cell">
                <span class="inner_cell">{{ list.country }}</span>
              </span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'

import Hgroup from '@/components/common/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

export default {
  name: 'Category',
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

<style scoped>
ul {
  overflow: auto;
  padding-right: 10px;
  font-size: 0;
  white-space: nowrap;
}
ul li {
  display: inline-block;
  width: 25%;
  padding-left: 10px;
  box-sizing: border-box;
  vertical-align: top;
}

ul .inner {
  position: relative;
  padding-top: 100%;
}

ul a {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 700;
  background-color: #f9f9f9;
  text-align: center;
}

ul .outer_cell {
  width: 100%;
  height: 100%;
}
</style>
