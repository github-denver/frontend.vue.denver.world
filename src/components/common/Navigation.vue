<template>
  <div class="group_navigation">
    <ul class="list_navigation">
      <li v-for="(item, index) in navigation" :key="index" class="item_navigation">
        <span class="title_navigation">{{ item.title }}</span>

        <ul class="list_children">
          <li v-for="(child, index) in item.children" :key="index" class="item_child">
            <router-link
              :to="{
                name: child.component,
                params: {
                  service: child.category,
                  number: '1'
                }
              }"
              @click.native="$emit('parentOnClose')"
              class="link_child"
              >{{ child.title }}</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  components: {},
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

<style>
.group_navigation {
  overflow: hidden;
  margin-top: 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}

.group_navigation .list_navigation {
  background-color: #fff;
}

.group_navigation .item_navigation + .item_navigation {
  border-top: 1px solid #e9e9e9;
}

.group_navigation .title_navigation {
  display: block;
  padding: 18px 10px;
  font-size: 14px;
  font-weight: 700;
}

.list_navigation .list_children {
  border-top: 1px solid #e9e9e9;
  margin: 0 -1px -1px -1px;
  font-size: 0;
  background-color: #f9f9f9;
}

.list_navigation .item_child {
  display: inline-block;
  position: relative;
  width: 50%;
  margin-top: -1px;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  vertical-align: top;
}

.list_navigation .link_child {
  display: block;
  margin-left: -1px;
  padding: 13px 10px;
  font-size: 14px;
  text-align: center;
}
</style>
