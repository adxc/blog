import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/index'
import Python from '@/components/python'
import frontEnd from '@/components/frontend'
import article from '@/components/article'
import essay from '@/components/essay'
Vue.use(Router)

export default new Router({
 // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/python',
      name:'Python',
      component:Python,
    },
    {
      path:'/frontend',
      name:'frontEnd',
      component:frontEnd,
    },
    {
      path:'/essay',
      name:'essay',
      component:essay
    },
    {
      path:'/article/:id',
      name:'article',
      component:article
    }
  ]
})
