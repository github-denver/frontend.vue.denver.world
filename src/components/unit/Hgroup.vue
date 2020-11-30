<template>
  <h3 class="tit_local">
    <router-link
      :to="{
        name: attribute.component,
        params: {
          service: attribute.params.service,
          number: attribute.params.number
        }
      }"
      v-html="attribute.title"
      class="link_local"
    >
    </router-link>
  </h3>
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
.tit_local {
  display: inline-block;
  vertical-align: top;
}

.link_local {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
}
</style>
