import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/common/Main'

import AppHeader from '@/components/common/AppHeader'
// import AppHeaderBack from '@/components/common/AppHeaderBack'
import AppMenu from '@/components/common/AppMenu'

import AppFooter from '@/components/common/AppFooter'

import Welcome from '@/components/member/create/Welcome'
import MemberCreate from '@/components/member/create/MemberCreate'
import Login from '@/components/member/read/Login'
import ProfileUpdate from '@/components/member/update/ProfileUpdate'

import PostList from '@/components/post/list/PostList'
import PostCreate from '@/components/post/create/PostCreate'
import PostRead from '@/components/post/read/PostRead'
import PostUpdate from '@/components/post/update/PostUpdate'

import GalleryList from '@/components/gallery/list/GalleryList'

import ArticleList from '@/components/article/list/ArticleList'
import ArticleCreate from '@/components/article/create/ArticleCreate'
import ArticleRead from '@/components/article/read/ArticleRead'
import ArticleUpdate from '@/components/article/update/ArticleUpdate'

import store from '@/store'

Vue.use(Router)

// prettier-ignore
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
      name: 'Login',
      component: Login,
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

          next({ name: 'Login' })
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
      },
      props: {
        default: true
      }
    },
    {
      path: '/article/:service/create',
      name: 'ArticleCreate',
      components: {
        header: AppHeader,
        default: ArticleCreate
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (!isAuthorized) {
          alert('로그인 안 한 상태에서는 접근할 수 없어요!')

          next({ name: 'Login' })
        }

        next()
      }
    },
    {
      path: '/article/:service/:number/edit',
      name: 'ArticleUpdate',
      components: {
        header: AppHeader,
        default: ArticleUpdate
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters
        console.log('[router/index.js] ArticleUpdate → store.getters: ', store.getters)

        if (!isAuthorized) {
          alert('로그인이 필요해요!')

          next({ name: 'Login' })
        }

        console.log('[router/index.js] ArticleUpdate → to.params: ', to.params)

        store
          .dispatch('fetchPost', {
            category: to.params.service,
            number: to.params.number
          })
          .then(() => {
            console.log('[router/index.js] ArticleUpdate → store.state.post: ', store.state.post)
            console.log('[router/index.js] ArticleUpdate → store.state.user.id: ', store.state.user.id)

            const post = store.state.post[0]
            console.log('[router/index.js] ArticleUpdate → post: ', post)

            const isAuthor = post.id === store.state.user.id

            if (isAuthor) {
              console.log('[router/index.js] ArticleUpdate → 사용자가 일치합니다')
              console.log('[router/index.js] ArticleUpdate → isAuthor: ', isAuthor)

              next()
            } else {
              alert('게시물의 작성자만 게시물을 수정할 수 있습니다.')

              next(false)
            }
          })
          .catch((error) => {
            console.error(error)

            alert(error.response.data.msg)

            next(false)
          })
      }
    },
    {
      path: '/gallery/:service/list/:number',
      name: 'GalleryList',
      components: {
        header: AppHeader,
        default: GalleryList
      },
      alias: '/article/:service/list/:number',
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/list/:number',
      name: 'PostList',
      components: {
        header: AppHeader,
        default: PostList
      },
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/create',
      name: 'PostCreate',
      components: {
        header: AppHeader,
        default: PostCreate
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (!isAuthorized) {
          alert('로그인 안 한 상태에서는 접근할 수 없어요!')

          next({ name: 'Login' })
        }

        next()
      }
    },
    {
      path: '/board/:service/:number',
      name: 'PostRead',
      components: {
        header: AppHeader,
        default: PostRead
      },
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/:number/edit',
      name: 'PostUpdate',
      components: {
        header: AppHeader,
        default: PostUpdate
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters
        console.log('[router/index.js] PostUpdate → store.getters: ', store.getters)

        if (!isAuthorized) {
          alert('로그인이 필요해요!')

          next({ name: 'Login' })
        }

        console.log('[router/index.js] PostUpdate → to.params: ', to.params)

        store
          .dispatch('fetchPost', {
            category: to.params.service,
            number: to.params.number
          })
          .then(() => {
            console.log('[router/index.js] PostUpdate → store.state.post: ', store.state.post)
            console.log('[router/index.js] PostUpdate → store.state.user.id: ', store.state.user.id)

            const post = store.state.post[0]
            console.log('[router/index.js] PostUpdate → post: ', post)

            const isAuthor = post.id === store.state.user.id

            if (isAuthor) {
              console.log('[router/index.js] PostUpdate → 사용자가 일치합니다')
              console.log('[router/index.js] PostUpdate → isAuthor: ', isAuthor)

              next()
            } else {
              alert('게시물의 작성자만 게시물을 수정할 수 있습니다.')

              next(false)
            }
          })
          .catch((error) => {
            console.error(error)

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
        footer: AppFooter,
      }
    }
  ]
})
