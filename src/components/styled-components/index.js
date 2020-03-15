import Vue from 'vue'

import Container from './Container'
import Contents from './Contents'

import Hgroup from './Hgroup'
import List from './List'

import Profile from './Profile'
import Picture from './Picture'
import Upload from './Upload'

import Carousel from './Carousel'
import Category from './Category'
import Gallery from './Gallery'

import Loading from './Loading'
import Empty from './Empty'

import { Square, Rectangle } from './Button'
import Icon from './Icon'

import Thumbnail from './Thumbnail'
import Dimmed from './Dimmed'
import Subject from './Subject'

import Paging from './Paging'

export const hgroup = Vue.component('hgroup-component', {
  components: { Hgroup },
  props: ['attribute'],
  template: `
    <Hgroup>
      <slot></slot>
    </Hgroup>
  `
})

export const loading = Vue.component('loading-component', {
  components: { Loading },
  props: ['attribute'],
  template: `
    <Loading>
      <slot></slot>
    </Loading>
  `
})

export const empty = Vue.component('empty-component', {
  components: { Empty },
  props: ['attribute'],
  template: `
    <Empty>
      <slot></slot>
    </Empty>
  `
})

export const list = Vue.component('list-component', {
  components: { List },
  props: ['attribute'],
  template: `
    <List>
      <slot></slot>
    </List>
  `
})

export const container = Vue.component('container-component', {
  components: { Container },
  props: ['attribute'],
  template: `
    <Container>
      <slot></slot>
    </Container>
  `
})

export const contents = Vue.component('contents-component', {
  components: { Contents },
  props: ['attribute'],
  template: `
    <Contents>
      <slot></slot>
    </Contents>
  `
})

export const profile = Vue.component('profile-component', {
  components: { Profile },
  props: ['attribute'],
  template: `
    <Profile>
      <slot></slot>
    </Profile>
  `
})

export const picture = Vue.component('picture-component', {
  components: { Picture },
  props: ['attribute'],
  template: `
    <Picture :attribute="attribute">
      <slot></slot>
    </Picture>
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

export const category = Vue.component('category-component', {
  components: { Category },
  props: ['attribute'],
  template: `
    <Category>
      <slot></slot>
    </Category>
  `
})

export const gallery = Vue.component('gallery-component', {
  components: { Gallery },
  props: ['attribute'],
  template: `
    <Gallery>
      <slot></slot>
    </Gallery>
  `
})

export const square = Vue.component('square-button', {
  components: { Square },
  props: ['attribute'],
  template: `
    <Square :type="attribute.type" :className="attribute.className" @click.native="attribute.event">
    <slot></slot>
    </Square>
  `
})

export const rectangle = Vue.component('rectangle-link', {
  components: { Rectangle },
  props: ['attribute'],
  template: `
    <Rectangle :className="attribute.className">
      <slot></slot>
    </Rectangle>
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

export const thumbnail = Vue.component('thumbnail-component', {
  components: { Thumbnail },
  props: ['attribute'],
  template: `
    <Thumbnail :paddingTop="attribute.style.paddingTop" >
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

export const paging = Vue.component('paging-component', {
  components: { Paging },
  props: ['attribute'],
  template: `
    <Paging>
      <slot></slot>
    </Paging>
  `
})

export const upload = Vue.component('upload-component', {
  components: { Upload },
  props: ['attribute'],
  template: `
    <Upload>
      <slot></slot>
    </Upload>
  `
})
