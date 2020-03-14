<template>
  <carousel-component>
    <Hgroup>
      <template v-slot:title>
        <h3>
          <router-link
            :to="{
              name: 'Main',
              params: {
                service: attribute.params.service,
                number: attribute.params.number
              }
            }"
            class="router-link"
          >
            {{ attribute.title }}</router-link
          >
        </h3>
      </template>
    </Hgroup>

    <Loading
      :attribute="{
        result: !article.loading
      }"
    >
      <template v-slot:loading>
        <p class="message">읽어들이는 중..</p>
      </template>
    </Loading>

    <Empty
      :attribute="{
        result: article.loading && !article.list.length
      }"
    >
      <template v-slot:empty>
        <p class="message">글이 존재하지 않습니다</p>
      </template>
    </Empty>

    <vue-owl-carousel
      v-if="article.list.length && article.list.length"
      :items="attribute.slider.items"
      :margin="attribute.slider.margin"
      :stagePadding="attribute.slider.stagePadding"
      :nav="attribute.slider.nav"
      :dots="attribute.slider.dots"
      class="owl"
    >
      <router-link
        v-for="(list, index) in article.list"
        :key="index"
        :to="{
          name: attribute.component.read,
          params: {
            service: attribute.params.service,
            number: list.number.toString()
          },
          query: { page: 1 }
        }"
      >
        <Thumbnail
          :attribute="{
            style: {
              paddingTop: '52.734375%'
            },
            thumbnail: list.upload2,
            subject: list.subject
          }"
        >
          <Dimmed>
            <Subject>{{ list.subject }}</Subject>
          </Dimmed>
        </Thumbnail>
      </router-link>
    </vue-owl-carousel>
  </carousel-component>
</template>

<script>
import Hgroup from '@/components/common/Hgroup'

import Loading from '@/components/common/Loading'
import Empty from '@/components/common/Empty'

import VueOwlCarousel from 'vue-owl-carousel'

import Thumbnail from '@/components/common/Thumbnail'
import Dimmed from '@/components/common/Dimmed'
import Subject from '@/components/common/Subject'

export default {
  name: 'Carousel',
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
    article: {
      type: Object,
      required: true
    },
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>
