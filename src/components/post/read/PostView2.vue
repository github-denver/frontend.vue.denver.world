<template>
  <div class="group_board type_view">
    <div class="board_header outer_cell">
      <div class="group_picture">
        <img
          v-if="typeof post[0].picture !== 'undefined' || post[0].picture !== null || post[0].picture !== ''"
          :src="'http://localhost:3000/uploads/' + post[0].picture"
          :alt="post[0].name"
          class="thumbnail_picture"
        />
        <img v-else src="http://localhost:3000/uploads/default_picture.png" alt="기본 이미지" class="thumbnail_picture" />
      </div>

      <div class="information_board inner_cell">
        <div class="group_subject">
          <span class="text_subject">{{ post[0].subject }}</span>
        </div>

        <div class="group_option">
          <span class="text_board text_writer"><span class="screen_out">작성자</span> {{ post[0].name }}</span>
          <span class="text_board text_date">등록일 {{ post[0].regdate | moment('YY.MM.DD') }}</span>
          <span class="text_board text_count">조회수 {{ post[0].count }}</span>
        </div>
      </div>
    </div>

    <div class="board_container">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="post[0].content"></div>
      </div>

      <vue-editor style="display:none;"></vue-editor>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'PostView',
  components: { VueEditor },
  props: {
    post: {
      type: Array,
      required: true
    }
  }
}
</script>
