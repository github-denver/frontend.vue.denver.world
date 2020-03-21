<template>
  <div class="post_read">
    <div class="post_header outer_cell">
      <Picture
        :attribute="{
          authorized: isAuthorized,
          user: post[0],
          picture: post[0].picture,
          state: 'board'
        }"
      />

      <div class="post_container inner_cell">
        <div class="group_subject">
          <span class="title_local">{{ post[0].subject }}</span>
        </div>

        <div class="post_information">
          <span class="text_local"><span class="screen_out">작성자</span> {{ post[0].name }}</span>
          <span class="text_local"><span class="screen_out">등록일</span> {{ post[0].regdate | moment('YY.MM.DD') }}</span>
          <span class="text_local"><span class="screen_out">조회수</span> {{ post[0].count }}</span>
        </div>
      </div>
    </div>

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
import { mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'
import Picture from '@/components/common/Picture'

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

<style>
.post_read {
  margin-top: 10px;
}
.post_read .group_picture {
  overflow: hidden;
  float: left;
  margin-right: 10px;
}

.post_read .post_header {
  width: auto;
}
</style>
