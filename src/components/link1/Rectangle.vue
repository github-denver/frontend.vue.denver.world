<template>
  <router-link
    :to="{
      name: data.component,
      params: { service: data.type, number: data.number },
      query: { page: data.page, select: data.select, keyword: data.keyword }
    }"
    :class="data.className"
  >
    {{ data.text }}
  </router-link>
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
