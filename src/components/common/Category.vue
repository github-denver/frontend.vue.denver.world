<template>
  <category-component>
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
            class="router-link"
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
        <p class="message">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: category.loading && !category.list.length
      }"
    >
      <template v-slot:empty>
        <p class="message">카테고리가 존재하지 않습니다</p>
      </template>
    </Empty>

    <div v-if="category.list.length && category.list.length" class="category">
      <ul>
        <li v-for="(list, index) in category.list" :key="index">
          <div>
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
              <span>
                <span>{{ list.country }}</span>
              </span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </category-component>
</template>

<script>
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
