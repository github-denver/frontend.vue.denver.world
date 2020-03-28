<template>
  <div class="main_post">
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
        result: !list.loading
      }"
    >
      <template v-slot:loading>
        <p class="text_message">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: list.loading && !list.list.length
      }"
    >
      <template v-slot:empty>
        <p class="text_message">글이 존재하지 않습니다</p>
      </template>
    </Empty>

    <ul v-if="list.loading && list.list.length" class="list_post">
      <li v-for="(list, index) in list.list" :key="index">
        <router-link
          :to="{
            name: attribute.component.read,
            params: {
              service: list.category,
              number: list.number.toString()
            },
            query: {
              page: 1
            }
          }"
          class="link_post"
        >
          {{ list.subject }}
        </router-link>
      </li>
    </ul>
  </div>
  <!-- // main-post -->
</template>

<script>
import Hgroup from '@/components/common/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

export default {
  name: 'MainPost',
  components: { Hgroup, Loading, Empty },
  props: {
    list: {
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
.main_post {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e9e9e9;
}

.main_post .list_post {
  margin-top: 10px;
}

.main_post .list_post li + li {
  margin-top: 10px;
}

.main_post .link_post {
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
