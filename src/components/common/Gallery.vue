<template>
  <div class="view_local">
    <Hgroup
      v-bind:data="{
        title: options.board.title,
        component: options.board.list,
        type: options.board.type
      }"
    />

    <Loading
      v-bind:data="{
        result: !gallery.loading,
        message: options.message.loading
      }"
    />

    <Empty
      v-bind:data="{
        result: gallery.loading && !gallery.list.length,
        message: options.message.empty
      }"
    />

    <div class="visual_gallery" v-if="gallery.list.length && gallery.list.length">
      <vue-owl-carousel
        :items="options.slider.items"
        :margin="options.slider.margin"
        :stagePadding="options.slider.stagePadding"
        :nav="options.slider.nav"
        :dots="options.slider.dots"
        v-bind:class="`group_${options.className}`"
      >
        <router-link
          v-for="(list, index) in gallery.list"
          v-bind:key="index"
          v-bind:to="{
            name: 'PostRead',
            params: { service: list.category, number: list.number.toString() },
            query: { page: '1' }
          }"
        >
          <div
            v-bind:key="index"
            v-bind:style="{
              'background-image': `url('${localhost}/${uploads}/${list.thumbnail}')`
            }"
            class="thumbnail_slider"
          >
            <div class="dimmed_subject">
              <span class="text_subject">{{ list.subject }}</span>
            </div>
          </div>
        </router-link>
      </vue-owl-carousel>
    </div>
  </div>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'
import Hgroup from '@/components/common/Hgroup'
import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'
import VueOwlCarousel from 'vue-owl-carousel'

export default {
  name: 'Gallery',
  components: { VueOwlCarousel, Hgroup, Loading, Empty },
  props: {
    gallery: {
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
