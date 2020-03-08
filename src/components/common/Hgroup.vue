<template>
  <div class="hgroup">
    <h3 class="title_local">
      <router-link
        v-bind:to="{
          name: data.component,
          params: { service: data.type, number: '1' }
        }"
        class="link_local"
        >Hgroup: {{ data.title }}</router-link
      >
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Hgroup',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
