<template>
  <div class="view_local">
    <Hgroup>
      <template v-slot:title>
        <h3>
          <router-link
            :to="{
              name: attribute.component.index,
              params: {
                service: attribute.params.service,
                number: attribute.params.number
              }
            }"
          >
            {{ attribute.title }}</router-link
          >
        </h3>
      </template>
    </Hgroup>

    <Loading
      :attribute="{
        result: !gallery.loading
      }"
    >
      <template v-slot:loading>
        <p>읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: gallery.loading && !gallery.list.length
      }"
    >
      <template v-slot:empty>
        <p>글이 존재하지 않습니다</p>
      </template>
    </Empty>

    <div
      class="visual_gallery"
      v-if="gallery.list.length && gallery.list.length"
    >
      <vue-owl-carousel
        :items="attribute.slider.items"
        :margin="attribute.slider.margin"
        :stagePadding="attribute.slider.stagePadding"
        :nav="attribute.slider.nav"
        :dots="attribute.slider.dots"
        :class="`group_${attribute.className}`"
      >
        <router-link
          v-for="(list, index) in gallery.list"
          :key="index"
          :to="{
            name: attribute.component.read,
            params: {
              service: list.category,
              number: list.number.toString()
            },
            query: {
              page: 1
            }
          }"
        >
          <div
            :key="index"
            :style="{
              'background-image': `url('${localhost}/${uploads}/${list.thumbnail}')`
            }"
            class="thumbnail_slider"
          >
            <div class="dimmed_subject">
              <span class="text_subject">{{ list.subject }}</span>
            </div>
          </div>

          <!-- <Thumbnail
            :attribute="{
              thumbnail: list.thumbnail,
              subject: list.subject
            }"
          >
            <Dimmed>
              <Subject>{{ list.subject }}</Subject>
            </Dimmed>
          </Thumbnail> -->
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

import Thumbnail from '@/components/common/Thumbnail'
import Dimmed from '@/components/common/Dimmed'
import Subject from '@/components/common/Subject'

export default {
  name: 'Gallery',
  components: {
    Hgroup,
    Loading,
    VueOwlCarousel,
    Empty,
    Thumbnail,
    Dimmed,
    Subject
  },
  props: {
    gallery: {
      type: Object,
      required: true
    },
    attribute: {
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
