<template>
  <div class="grp_navigation">
    <div class="inner_local">
      <ul class="list_navigation">
        <li v-for="(item, index) in navigation" :key="index" class="item_navigation">
          <span class="tit_navigation" v-html="item.title"></span>

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
                v-html="child.title"
                @click.native="$emit('parentOnClose')"
                class="link_child"
              ></router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
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

<style>
.grp_navigation {
  overflow: hidden;
  background-color: #f1f1f1;
}

.grp_navigation .inner_local {
  margin-top: 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}

.grp_navigation .list_navigation {
  background-color: #fff;
}

.grp_navigation .item_navigation + .item_navigation {
  border-top: 1px solid #e9e9e9;
}

.grp_navigation .tit_navigation {
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

.list_navigation .item_child:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;
  border-left: 1px solid #f9f9f9;
  content: '';
}

.list_navigation .link_child {
  display: block;
  margin-left: -1px;
  padding: 13px 0;
  font-size: 12px;
  text-align: center;
}
</style>
