<template>
  <nav class="gnb">
    <div class="inner_gnb">
      <ul class="list_gnb">
        <li v-for="(item, index) in navigation" :key="index">
          <strong class="tit_gnb" v-html="item.title"></strong>

          <ul class="list_lnb">
            <li v-for="(child, index) in item.children" :key="index">
              <router-link
                :to="{
                  name: child.component,
                  params: {
                    service: child.category,
                    number: '1'
                  }
                }"
                v-html="child.title"
                @click.native="$emit('parentOnClose')"
                class="link_lnb"
              ></router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      navigation: [
        {
          category: 'news',
          title: '새소식',
          description: '새소식 게시판입니다.',
          component: 'CommunityList',
          children: [
            /* {
              category: 'popular',
              title: '많이 본 소식',
              description: '많이 본 소식 게시판입니다.',
              component: 'GalleryList'
            }, */
            {
              category: 'hardware',
              title: '컴퓨터 &amp; 하드웨어',
              description: '컴퓨터 &amp; 하드웨어 게시판입니다.',
              component: 'GalleryList'
            },
            {
              category: 'mobile',
              title: '모바일 &amp; 태블릿',
              description: '모바일 &amp; 태블릿 게시판입니다.',
              component: 'GalleryList'
            },
            {
              category: 'game',
              title: '신작 게임 &amp 업데이트',
              description: '신작 게임 &amp 업데이트 동영상 게시판입니다.',
              component: 'GalleryList'
            },
            {
              category: 'video',
              title: '넷플릭스 출시 예정 &amp; 신작',
              description: '넷플릭스 출시 예정 &amp; 신작 동영상 게시판입니다.',
              component: 'GalleryList'
            },
            {
              category: 'notice',
              title: '공지사항 &amp; 업데이트',
              description: '공지사항 &amp; 업데이트 게시판입니다.',
              component: 'CommunityList'
            }
          ]
        },
        {
          category: 'community',
          title: '커뮤니티',
          description: '커뮤니티 게시판입니다.',
          component: 'CommunityList',
          children: [
            {
              category: 'talk',
              title: '톡톡 한마디',
              description: '톡톡 한마디 게시판입니다.',
              component: 'CommunityList'
            },
            {
              category: 'gallery',
              title: '이미지 게시판',
              description: '이미지 게시판 게시판입니다.',
              component: 'GalleryList'
            }
          ]
        }
        /* {
          category: 'library',
          title: '자료실',
          description: '자료실 게시판입니다.',
          component: 'CommunityList',
          children: [
            {
              category: 'music',
              title: '음악',
              description: '음악 게시판입니다.',
              component: 'GalleryList'
            }
          ]
        } */
      ]
    }
  }
}
</script>

<style scoped></style>
