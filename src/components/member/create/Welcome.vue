<template>
  <div class="wrap_welcome">
    <h1 class="title_logo"><router-link v-bind:to="{ name: 'Main' }" class="link_logo">덴버월드</router-link></h1>

    <div class="inner_welcome">
      <strong class="title_welcome">환영합니다!</strong>
      <p class="description_welcome">덴버월드에서 사용할 닉네임과 나머지 정보들을<br />입력해 주실수있으세요?</p>

      <div class="group_button type_half">
        <div class="inner_local">
          <link-rectangle v-bind:data="{ component: 'Main', className: 'button_global', text: 'rectangle: 싫어요' }" />
        </div>

        <div class="inner_local">
          <link-rectangle v-bind:data="{ component: 'MemberCreate', className: ['button_global', 'type_action'], text: 'rectangle: 좋아요' }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkRectangle from '@/components/link/Rectangle'

export default {
  name: 'Welcome',
  components: { LinkRectangle }
}
</script>
