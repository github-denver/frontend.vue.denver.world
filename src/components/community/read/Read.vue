<template>
  <div class="grp_conts read">
    <div class="read_head outer_cell">
      <Picture
        :attribute="{
          authorized: isAuthorized,
          user: post[0],
          picture: post[0].picture,
          state: 'board'
        }"
      />

      <div class="grp_info inner_cell">
        <div class="grp_subject">
          <span class="tit_subject">{{ post[0].subject }}</span>
        </div>

        <div class="read_info">
          <span class="txt_info"><span class="screen_out">작성자</span> {{ post[0].name }}</span>
          <span class="txt_info"><span class="screen_out">등록일</span> {{ post[0].regdate | moment('YY.MM.DD') }}</span>
          <span class="txt_info"><span class="screen_out">조회수</span> {{ post[0].count }}</span>
        </div>
      </div>
    </div>

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
import { mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'
import Picture from '@/components/common/Picture'

export default {
  name: 'Read',
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

<style scoped></style>
