<template>
  <div class="main_community">
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
        <p class="txt_loading">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: list.loading && !list.list.length
      }"
    >
      <template v-slot:empty>
        <p class="txt_loading">글이 존재하지 않습니다</p>
      </template>
    </Empty>

    <ul v-if="list.loading && list.list.length" class="list_community">
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
          class="link_community"
        >
          {{ list.subject }}
        </router-link>
      </li>
    </ul>
  </div>
  <!-- // main-community -->
</template>

<script>
import Hgroup from '@/components/unit/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/unit/Empty'

export default {
  name: 'MainCommunity',
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

<style scoped></style>
