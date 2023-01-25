<template>
  <div id="app">
    <div class="inner_g">
      <router-view name="header" />

      <router-view :key="$route.fullPath" />

      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  jsonld: {
    '@context': 'http://schema.org',
    '@type': 'SoftwareApplication',
    name: '덴버월드',
    url: 'http://cf24denver.cafe24app.com/',
    applicationCategory: 'Community',
    operatingSystem: ['iOS', 'ANDROID'],
    screenshot: [
      {
        '@type': 'ImageObject',
        url: 'http://cf24denver.cafe24app.com/uploads/acnh_1620217899621.png',
        width: '640',
        height: '360'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KRW',
      price: '0'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      ratingCount: '5'
    }
  }
}
</script>

<style>
@import './assets/css/common.css';
</style>
