<template>
  <div class="grp_conts read">
    <div class="read_conts">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="post[0].content"></div>
      </div>

      <vue-editor></vue-editor>
    </div>
  </div>
  <!-- // grp_conts -->
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'Read',
  components: { VueEditor },
  props: {
    post: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
