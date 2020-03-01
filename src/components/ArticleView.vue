<!-- prettier-ignore -->
<template>
  <article class="group_magazine">
    <h2 class="title_magazine">{{ post[0].subject }}</h2>

    <div class="ql-container ql-snow">
      <div class="ql-editor" v-html="post[0].content"></div>
    </div><!-- // ql-snow -->

    <vue-editor style="display:none;"></vue-editor>
  </article>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'ArticleView',
  components: { VueEditor },
  props: {
    post: {
      type: Array,
      required: true
    }
  }
}
</script>
