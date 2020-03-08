<template>
  <router-link v-bind:to="{ name: data.component }" v-bind:class="data.className" v-on:click.native="data.event && data.event()">
    <icon-square
      v-if="data.icon"
      v-bind:data="{
        className: data.icon,
        text: data.text
      }"
    />
  </router-link>
</template>

<script>
import IconSquare from '@/components/icon/Square'

export default {
  name: 'Square',
  components: { IconSquare },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
