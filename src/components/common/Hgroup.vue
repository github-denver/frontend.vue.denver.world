<template>
  <router-link
    :to="{
      name: attribute.component,
      params: {
        service: attribute.params.service,
        number: attribute.params.number
      }
    }"
    class="link_local"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'Hgroup',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.link_local {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
}
</style>
