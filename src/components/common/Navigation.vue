<template>
  <navigation-component>
    <ul>
      <li v-for="(item, index) in navigation" :key="index">
        <span>{{ item.title }}</span>

        <ul>
          <li v-for="(item, index) in item.children" :key="index">
            <link-rectangle
              :data="{
                component: item.component,
                text: item.title,
                event: attribute.event,
                icon: 'ico_profile',
                type: item.category,
                number: '1'
              }"
            />
          </li>
        </ul>
      </li>
    </ul>
  </navigation-component>
</template>

<script>
export default {
  name: 'Navigation',
  components: {},
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      navigation: [
        // 카테고리
        {
          category: 'news',
          title: '새소식',
          description: '새소식 게시판입니다.',
          component: 'PostList',
          children: [
            {
              category: 'notice',
              title: '공지사항',
              description: '공지사항 게시판입니다.',
              component: 'PostList'
            },
            {
              category: 'update',
              title: '업데이트',
              description: '업데이트 게시판입니다.',
              component: 'PostList'
            }
          ]
        },
        {
          category: 'article',
          title: '기사',
          description: '기사 게시판입니다.',
          component: 'GalleryList',
          children: [
            {
              category: 'library',
              title: '도서관',
              description: '도서관 게시판입니다.',
              component: 'GalleryList'
            }
          ]
        },
        {
          category: 'community',
          title: '커뮤니티',
          description: '커뮤니티 게시판입니다.',
          component: 'PostList',
          children: [
            {
              category: 'talk',
              title: '톡톡 한마디',
              description: '톡톡 한마디 게시판입니다.',
              component: 'PostList'
            },
            {
              category: 'gallery',
              title: '이미지 게시판',
              description: '이미지 게시판 게시판입니다.',
              component: 'GalleryList'
            }
          ]
        }
      ]
    }
  }
}
</script>
