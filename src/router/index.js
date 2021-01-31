import Vue from 'vue'
import Router from 'vue-router'

/*
import Main from '@/components/common/Index'
import AppHeader from '@/components/common/header/AppHeader'
import AppMenu from '@/components/common/header/AppMenu'
import AppFooter from '@/components/common/footer/AppFooter'
import Welcome from '@/components/member/create/Welcome'
import MemberCreate from '@/components/member/create/MemberCreate'
import MemberLogin from '@/components/member/read/MemberLogin'
import ProfileUpdate from '@/components/member/update/ProfileUpdate'
import CommunityList from '@/components/community/list/CommunityList'
import CommunityCreate from '@/components/community/create/CommunityCreate'
import CommunityRead from '@/components/community/read/CommunityRead'
import CommunityUpdate from '@/components/community/update/CommunityUpdate'
import GalleryList from '@/components/gallery/list/GalleryList'
// import ArticleList from '@/components/article/list/ArticleList'
// import ArticleCreate from '@/components/article/create/ArticleCreate'
import ArticleRead from '@/components/article/read/ArticleRead'
// import ArticleUpdate from '@/components/article/update/ArticleUpdate'
*/

const Main = () => import(/* webpackChunkName: "main" */ '@/components/common/Index')
const AppHeader = () => import(/* webpackChunkName: "header" */ '@/components/common/header/AppHeader')
const AppMenu = () => import(/* webpackChunkName: "menu" */ '@/components/common/header/AppMenu')
const AppFooter = () => import(/* webpackChunkName: "footer" */ '@/components/common/footer/AppFooter')
const Welcome = () => import(/* webpackChunkName: "welcome" */ '@/components/member/create/Welcome')
const MemberCreate = () => import(/* webpackChunkName: "membercreate" */ '@/components/member/create/MemberCreate')
const MemberLogin = () => import(/* webpackChunkName: "memberlogin" */ '@/components/member/read/MemberLogin')
const ProfileUpdate = () => import(/* webpackChunkName: "profileupdate" */ '@/components/member/update/ProfileUpdate')
const CommunityList = () => import(/* webpackChunkName: "communitylist" */ '@/components/community/list/CommunityList')
const CommunityCreate = () => import(/* webpackChunkName: "communitycreate" */ '@/components/community/create/CommunityCreate')
const CommunityRead = () => import(/* webpackChunkName: "communityread" */ '@/components/community/read/CommunityRead')
const CommunityUpdate = () => import(/* webpackChunkName: "communityupdate" */ '@/components/community/update/CommunityUpdate')
const GalleryList = () => import(/* webpackChunkName: "gallerylist" */ '@/components/gallery/list/GalleryList')
const ArticleRead = () => import(/* webpackChunkName: "articleread" */ '@/components/article/read/ArticleRead')

import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/menu',
      name: 'AppMenu',
      component: AppMenu
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      alias: '/member',
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (isAuthorized) {
          alert('로그인한 상태에서는 접근할 수 없어요!')

          next({ name: 'Main' })
        }

        next()
      }
    },
    {
      path: '/member/register',
      name: 'MemberCreate',
      component: MemberCreate,
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (isAuthorized) {
          alert('로그인한 상태에서는 접근할 수 없어요!')

          next({ name: 'Main' })
        }

        next()
      }
    },
    {
      path: '/member/login',
      name: 'MemberLogin',
      component: MemberLogin,
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (isAuthorized) {
          alert('로그인한 상태에서는 접근할 수 없어요!')

          next({ name: 'Main' })
        }

        next()
      }
    },
    {
      path: '/member/profile',
      name: 'ProfileUpdate',
      component: ProfileUpdate,
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (!isAuthorized) {
          alert('로그인 안 한 상태에서는 접근할 수 없어요!')

          next({ name: 'MemberLogin' })
        }

        next()
      }
    },
    {
      path: '/article/:service/:number',
      name: 'ArticleRead',
      components: {
        header: AppHeader,
        default: ArticleRead,
        footer: AppFooter
      },
      props: {
        default: true
      }
    },
    {
      path: '/gallery/:service/list/:number',
      name: 'GalleryList',
      components: {
        header: AppHeader,
        default: GalleryList,
        footer: AppFooter
      },
      alias: '/article/:service/list/:number',
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/list/:number',
      name: 'CommunityList',
      components: {
        header: AppHeader,
        default: CommunityList,
        footer: AppFooter
      },
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/create',
      name: 'CommunityCreate',
      components: {
        header: AppHeader,
        default: CommunityCreate,
        footer: AppFooter
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (!isAuthorized) {
          alert('로그인 안 한 상태에서는 접근할 수 없어요!')

          next({ name: 'MemberLogin' })
        }

        next()
      }
    },
    {
      path: '/board/:service/:number',
      name: 'CommunityRead',
      components: {
        header: AppHeader,
        default: CommunityRead,
        footer: AppFooter
      },
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/:number/edit',
      name: 'CommunityUpdate',
      components: {
        header: AppHeader,
        default: CommunityUpdate,
        footer: AppFooter
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters
        // console.log('[router/index.js] CommunityUpdate → store.getters: ', store.getters)

        if (!isAuthorized) {
          alert('로그인이 필요해요!')

          next({ name: 'MemberLogin' })
        }

        // console.log('[router/index.js] CommunityUpdate → to.params: ', to.params)

        store
          .dispatch('fetchPost', {
            category: to.params.service,
            number: to.params.number
          })
          .then(() => {
            // console.log('[router/index.js] CommunityUpdate → store.state.post: ', store.state.post)
            // console.log('[router/index.js] CommunityUpdate → store.state.user.id: ', store.state.user.id)

            const post = store.state.post[0]
            // console.log('[router/index.js] CommunityUpdate → post: ', post)

            const isAuthor = post.id === store.state.user.id

            if (isAuthor) {
              // console.log('[router/index.js] CommunityUpdate → 사용자가 일치합니다.')
              // console.log('[router/index.js] CommunityUpdate → isAuthor: ', isAuthor)

              next()
            } else {
              alert('게시물 작성자만 수정할 수 있어요!')

              next(false)
            }
          })
          .catch((error) => {
            // console.error(error)

            alert(error.response.data.msg)

            next(false)
          })
      }
    },
    {
      path: '/',
      name: 'Main',
      components: {
        header: AppHeader,
        default: Main,
        footer: AppFooter
      }
    }
  ]
})
