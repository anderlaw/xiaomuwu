//ajax请求
import Vue from 'vue'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

//移除移动端页面点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//全局注册组件
import { Icon,XButton ,Tabbar,TabbarItem,XInput,Group, Cell,Tab, TabItem } from 'vux'
Vue.component('icon',Icon)
Vue.component('xButton',XButton )
Vue.component('tabbar',Tabbar)
Vue.component('tabbarItem',TabbarItem)
Vue.component('xInput',XInput)
Vue.component('group',Group)
Vue.component('cell',Cell)
Vue.component('tab',Tab)
Vue.component('tabItem',TabItem)
