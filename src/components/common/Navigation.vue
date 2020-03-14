<template>
  <div class="group_menu">
    <ul class="list_menu">
      <li v-for="(item, index) in navigation" :key="index">
        <span class="text_menu">{{ item.title }}</span>

        <ul class="list_lnb">
          <li v-for="(item, index) in item.children" :key="index">
            <link-rectangle
              :data="{
                component: item.component,
                className: 'link_lnb',
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
  </div>
</template>

<script>
import LinkRectangle from '@/components/link/Rectangle'

export default {
  name: 'Navigation',
  components: { LinkRectangle },
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      navigation: [
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

<style scoped>
.group_menu {
  overflow: hidden;
  margin-top: 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}

.list_menu {
  background-color: #fff;
}

.list_menu > li + li {
  border-top: 1px solid #e9e9e9;
}

.list_menu .text_menu {
  display: block;
  padding: 18px 10px;
  font-size: 14px;
  font-weight: 700;
}

.list_lnb {
  border-top: 1px solid #e9e9e9;
  margin: 0 -1px -1px -1px;
  font-size: 0;
  background-color: #f9f9f9;
}

.list_lnb > li {
  display: inline-block;
  position: relative;
  width: 50%;
  margin-top: -1px;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  vertical-align: top;
}

.list_lnb > li:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;
  border-left: 1px solid #f9f9f9;
  content: '';
}

.list_lnb .link_lnb {
  display: block;
  margin-left: -1px;
  padding: 13px 10px;
  font-size: 14px;
  text-align: center;
}
</style>
