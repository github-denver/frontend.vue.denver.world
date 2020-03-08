<template>
  <div class="view_local">
    <Hgroup
      v-bind:data="{
        title: options.board.title,
        component: options.board.list,
        type: options.board.type
      }"
    />

    <Loading
      v-bind:data="{
        result: !list.loading,
        message: options.message.loading
      }"
    />

    <Empty
      v-bind:data="{
        result: list.loading && !list.list.length,
        message: options.message.empty
      }"
    />

    <ul class="list_trisection" v-if="list.loading && list.list.length">
      <li v-for="(list, index) in list.list" v-bind:key="index">
        <router-link
          v-bind:to="{
            name: 'PostRead',
            params: { service: list.category, number: list.number.toString() },
            query: { page: '1' }
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
    options: {
      type: Object,
      required: true
    }
  }
}
</script>
