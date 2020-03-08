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
        result: !category.loading,
        message: options.message.loading
      }"
    />

    <Empty
      v-bind:data="{
        result: category.loading && !category.list.length,
        message: options.message.empty
      }"
    />

    <div class="visual_gallery" v-if="category.list.length && category.list.length">
      <ul v-bind:class="`list_${options.className}`">
        <li v-for="(list, index) in category.list" v-bind:key="index">
          <div class="inner_local">
            <router-link
              v-bind:key="index"
              v-bind:to="{
                name: options.board.view,
                params: {
                  service: list.category,
                  number: list.number.toString()
                },
                query: { page: '1' }
              }"
              v-bind:class="`link_${options.className}`"
            >
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
    options: {
      type: Object,
      required: true
    }
  }
}
</script>
