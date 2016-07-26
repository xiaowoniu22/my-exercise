import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/home.vue'
import Userlist from './components/userlist.vue'
import Setting from './components/setting.vue'
Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home
  },
  '/list': {
    component: Userlist
  },
  '/setting': {
    component: Setting
  }
})

router.redirect({
  '*': '/home'
})
/* eslint-disable no-new */
router.start(App, 'body')
