<template>
  <router-link
    v-bind:to="{
      name: data.component,
      params: {
        service: data.type,
        number: data.number
      },
      query: {
        page: data.page,
        select: data.select,
        keyword: data.keyword
      }
    }"
    v-bind:class="data.className"
    >{{ data.text }}</router-link
  >
</template>

<script>
export default {
  name: 'Rectangle',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
