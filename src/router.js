import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '*',
    redirect: '/'
    },

    {
      path: '/',
      name: 'teaser',
      
      component: () => import(/* webpackChunkName: "about" */ './views/Teaser.vue')
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Start.vue')
    },
    {
      path: '/question',
      name: 'question',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Question.vue')
    },
    {
      path: '/questionresult',
      name: 'questionresult',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Questionresult.vue')
    },
    {
      path: '/categorie',
      name: 'categorie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Categorie.vue')
    },
    {
      path: '/categorieresult',
      name: 'categorieresult',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Categorieresult.vue')
    },
    {
      path: '/result',
      name: 'result',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Result.vue')
    },
    {
      path: '/topic',
      name: 'topic',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Topic.vue')
    },
    {
      path: '/final',
      name: 'final',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Final.vue')
    },
  ]
})
