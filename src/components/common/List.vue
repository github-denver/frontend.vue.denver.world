<template>
  <post-latest-list-component>
    <Hgroup>
      <template v-slot:title>
        <h3>
          <router-link
            :to="{
              name: attribute.component.index,
              params: {
                service: attribute.params.service,
                number: attribute.params.number
              }
            }"
            class="router-link"
          >
            {{ attribute.title }}</router-link
          >
        </h3>
      </template>
    </Hgroup>

    <Loading
      :attribute="{
        result: !list.loading
      }"
    >
      <template v-slot:loading>
        <p class="message">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: list.loading && !list.list.length
      }"
    >
      <template v-slot:empty>
        <p class="message">글이 존재하지 않습니다</p>
      </template>
    </Empty>

    <ul v-if="list.loading && list.list.length" class="list">
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
          class="router-link"
        >
          <span class="subject">{{ list.subject }}</span>
        </router-link>
      </li>
    </ul>
  </post-latest-list-component>
</template>

<script>
import Hgroup from '@/components/common/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

export default {
  name: 'List',
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
