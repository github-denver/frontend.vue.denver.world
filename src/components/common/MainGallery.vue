<template>
  <div class="main_gallery">
    <Hgroup
      :attribute="{
        title: attribute.title,
        component: attribute.component.index,
        params: {
          service: attribute.params.service,
          number: attribute.params.number
        }
      }"
    >
      {{ attribute.title }}
    </Hgroup>

    <Loading
      :attribute="{
        result: !gallery.loading
      }"
    >
      <template v-slot:loading>
        <p class="text_message">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: gallery.loading && !gallery.list.length
      }"
    >
      <template v-slot:empty>
        <p class="text_message">글이 존재하지 않습니다</p>
      </template>
    </Empty>

    <vue-owl-carousel
      v-if="gallery.list.length && gallery.list.length"
      :items="attribute.slider.items"
      :margin="attribute.slider.margin"
      :stagePadding="attribute.slider.stagePadding"
      :nav="attribute.slider.nav"
      :dots="attribute.slider.dots"
      class="group_owl"
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
        class="link_owl"
      >
        {{ list.category }}
        <Thumbnail
          :attribute="{
            style: {
              paddingTop: '133.3333333333333%'
            },
            thumbnail: list.thumbnail,
            subject: list.subject
          }"
        >
          <Dimmed>
            <Subject>{{ list.subject }}</Subject>
          </Dimmed>
        </Thumbnail>
      </router-link>
    </vue-owl-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hgroup from '@/components/common/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

import VueOwlCarousel from 'vue-owl-carousel'

import Thumbnail from '@/components/common/Thumbnail'
import Dimmed from '@/components/common/Dimmed'
import Subject from '@/components/common/Subject'

export default {
  name: 'MainGallery',
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
    ...mapGetters(['path', 'uploads'])
  }
}
</script>

<style>
.main_gallery {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e9e9e9;
}

.main_gallery .group_owl {
  margin: 10px -10px 0;
}

.main_gallery .owl-stage {
  padding-left: 10px !important;
}
</style>
