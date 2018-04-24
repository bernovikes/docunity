import Vue from 'vue'
import Router from 'vue-router'
import apiList from './components/mock/apiList'
import login from './components/user/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mock/list',
      name: 'apiList',
      component: apiList
    },
    {
      path: '/usr/login',
      name: 'login',
      component: login
    }
  ]
})
