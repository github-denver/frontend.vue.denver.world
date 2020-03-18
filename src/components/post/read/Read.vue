<template>
  <post-read-component>
    <div class="header">
      <Picture
        :attribute="{
          authorized: isAuthorized,
          user: post[0]
        }"
      />

      <div class="container">
        <div>
          <span class="subject">{{ post[0].subject }}</span>
        </div>

        <div class="information">
          <span class="text">작성자 {{ post[0].name }}</span>
          <span class="text">등록일 {{ post[0].regdate | moment('YY.MM.DD') }}</span>
          <span class="text">조회수 {{ post[0].count }}</span>
        </div>
      </div>
    </div>

    <div class="contents">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="post[0].content"></div>
      </div>

      <vue-editor></vue-editor>
    </div>
  </post-read-component>
</template>

<script>
import { mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'
import Picture from '@/components/picture/Picture'

export default {
  name: 'PostView',
  components: { VueEditor, Picture },
  props: {
    post: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['isAuthorized'])
  }
}
</script>
