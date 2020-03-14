import Vue from 'vue'

import Header from './Header'
import Heading from './Heading'

import Carousel from './Carousel'

import Square from './Button'
import Icon from './Icon'

import Thumbnail from './Thumbnail'
import Dimmed from './Dimmed'
import Subject from './Subject'

import { localhost, uploads } from '../../../config/setting'

export const header = Vue.component('application-header', {
  components: { Header },
  props: ['attribute'],
  template: `
    <Header>
      <slot></slot>
    </Header>
  `
})

export const heading = Vue.component('heading', {
  components: { Heading },
  props: ['attribute'],
  template: `
    <Heading>
      <slot></slot>
    </Heading>
  `
})

export const square = Vue.component('square-button', {
  components: { Square },
  props: ['attribute'],
  template: `
    <Square :type="attribute.type" @click.native="attribute.event">
      <slot></slot>
    </Square>
  `
})

export const icon = Vue.component('icon-image', {
  components: { Icon },
  props: ['attribute'],
  template: `
    <Icon :width="attribute.width" :height="attribute.height" :icon="attribute.icon">
      <slot></slot>
    </Icon>
  `
})

export const carousel = Vue.component('carousel-component', {
  components: { Carousel },
  props: ['attribute'],
  template: `
    <Carousel>
      <slot></slot>
    </Carousel>
  `
})

export const thumbnail = Vue.component('thumbnail-component', {
  components: { Thumbnail },
  props: ['attribute'],
  template: `
    <Thumbnail>
      <slot></slot>
    </Thumbnail>
  `
})

export const dimmed = Vue.component('dimmed-component', {
  components: { Dimmed },
  props: ['attribute'],
  template: `
    <Dimmed>
      <slot></slot>
    </Dimmed>
  `
})

export const subject = Vue.component('subject-component', {
  components: { Subject },
  props: ['attribute'],
  template: `
    <Subject>
      <slot></slot>
    </Subject>
  `
})
