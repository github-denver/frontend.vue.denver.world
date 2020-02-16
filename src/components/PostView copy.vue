<template>
  <div class="group_board type_view">
    <div class="board_header outer_cell">
      <div class="box_picture">
        <img
          v-if="
            typeof post[0].picture !== 'undefined' ||
              post[0].picture !== null ||
              post[0].picture !== ''
          "
          v-bind:src="'http://localhost:3000/uploads/' + post[0].picture"
          v-bind:alt="post[0].name"
          class="img_picture"
        />
        <img
          v-else
          src="http://localhost:3000/uploads/default_picture.png"
          alt="기본 이미지"
          class="img_picture"
        />
      </div>
      <!-- // box_picture -->

      <div class="information_board inner_cell">
        <div class="group_subject">
          <span class="text_subject">{{ post[0].subject }}</span>
        </div>
        <!-- // group_subject -->

        <div class="group_option">
          <span class="text_board text_writer"
            ><span class="screen_out">작성자</span>{{ post[0].name }}</span
          >
          <span class="text_board text_date"
            >등록일 {{ post[0].regdate | moment('YY.MM.DD') }}</span
          >
          <span class="text_board text_count">조회수 {{ post[0].count }}</span>
        </div>
        <!-- // group_option -->
      </div>
      <!-- // information_board -->
    </div>
    <!-- // board_header -->

    <div class="board_container">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="post[0].content"></div>
      </div>
      <!-- // ql-snow -->

      <vue-editor style="display:none;"></vue-editor>
    </div>
    <!-- // board_container -->
  </div>
  <!-- // group_board -->
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
      /* validator(post) {
        console.log('[PostView.vue] validator () > post[0]: ', post[0])

        const isValidPostNumber = typeof post[0].number === 'number'
        console.log('[PostView.vue] validator () > isValidPostNumber: ', isValidPostNumber)

        const isValidPostId = post[0].id && post[0].id.length
        console.log('[PostView.vue] validator () > isValidPostId: ', isValidPostId)

        const isValidPostName = post[0].name && post[0].name.length
        console.log('[PostView.vue] validator () > isValidPostName: ', isValidPostName)

        const isValidPostContent = post[0].content && post[0].content.length
        console.log('[PostView.vue] validator () > isValidPostContent: ', isValidPostContent)

        console.log(
          '[PostView.vue] validator () > isValidPostNumber && isValidPostId && isValidPostName && isValidPostContent: ',
          isValidPostNumber && isValidPostId && isValidPostName && isValidPostContent
        )

        return isValidPostNumber && isValidPostId && isValidPostName && isValidPostContent
      }, */
    }
  }
}
</script>
