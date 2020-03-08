<template>
  <div class="view_local">
    <Loading
      v-bind:data="{
        result: !article.loading,
        message: options.message.loading
      }"
    />

    <Empty
      v-bind:data="{
        result: article.loading && !article.list.length,
        message: options.message.empty
      }"
    />

    <div v-if="article.list.length && article.list.length">
      <vue-owl-carousel
        :items="options.slider.items"
        :margin="options.slider.margin"
        :stagePadding="options.slider.stagePadding"
        :nav="options.slider.nav"
        :dots="options.slider.dots"
        v-bind:class="`group_${options.className}`"
      >
        <router-link
          v-for="(list, index) in article.list"
          v-bind:key="index"
          v-bind:to="{
            name: options.board.view,
            params: { service: list.category, number: list.number.toString() },
            query: { page: '1' }
          }"
          v-bind:class="`link_${options.className}`"
        >
          <div
            v-bind:class="`thumbnail_${options.className}`"
            v-bind:style="{
              'background-image': `url('${localhost}/${uploads}/${list.upload2}')`
            }"
          >
            <div class="dimmed_subject">
              <h2 class="text_subject">{{ list.subject }}</h2>
            </div>
          </div>
        </router-link>
      </vue-owl-carousel>
    </div>
  </div>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'
import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'
import VueOwlCarousel from 'vue-owl-carousel'

export default {
  name: 'Carousel',
  components: { VueOwlCarousel, Loading, Empty },
  props: {
    article: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    localhost() {
      return localhost
    },
    uploads() {
      return uploads
    }
  }
}
</script>
