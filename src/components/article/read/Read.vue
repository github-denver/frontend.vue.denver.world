<template>
  <div class="post_read">
    <div class="post_contents">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="post[0].content"></div>
      </div>

      <vue-editor></vue-editor>
    </div>
  </div>
  <!-- // post_read -->
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'ArticleContent',
  components: { VueEditor },
  props: {
    post: {
      type: Array,
      required: true
    }
  }
}
</script>
