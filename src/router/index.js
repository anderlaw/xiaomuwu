import Vue from 'vue'
import Router from 'vue-router'

import main from '@/components/main'

import Recommend from '@/pages/recommend'
import Booklist from '@/pages/booklist'
import Class from '@/pages/class'
import BookBox from '@/pages/book-box'
import Me from '@/pages/me'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: main,
      children:[
        { path:'/',component:Recommend,name:'recommend' },//推荐页
        { path:'/booklist',component:Booklist,name:'booklist' },//书单
        { path:'/class',component:Class,name:'class' },//分类页
        { path:'/book-box',component:BookBox,name:'bookbox' },//书箱页
        { path:'/me',component:Me,name:'me' },//书箱页
      ]
    },
  ]
})
