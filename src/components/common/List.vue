<template>
  <div class="view_local">
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
        <p>읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: list.loading && !list.list.length
      }"
    >
      <template v-slot:empty>
        <p>글이 존재하지 않습니다</p>
      </template>
    </Empty>

    <ul class="list_trisection" v-if="list.loading && list.list.length">
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
          class="link_trisection"
        >
          <span class="text_trisection">{{ list.subject }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'

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
