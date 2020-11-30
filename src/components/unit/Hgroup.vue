<template>
  <div class="hgrp">
    <h3 class="tit_hgrp">
      <router-link
        :to="{
          name: attribute.component,
          params: {
            service: attribute.params.service,
            number: attribute.params.number
          }
        }"
        v-html="attribute.title"
        class="link_hgrp"
      >
      </router-link>
    </h3>
  </div>
  <!-- // hgrp -->
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

<style scoped></style>
