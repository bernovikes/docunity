import Vue from 'vue'
import Router from 'vue-router'
import apiList from './components/mock/apiList'
import login from './components/user/login'
import setting from './components/user/setting'
import createdMock from './components/mock/createdMock'
import RequestView from './components/mock/requestView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mock/list',
      name: 'apiList',
      component: apiList
    },
    {
      path: '/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/user/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/mock/create',
      name: 'createdMock',
      component: createdMock
    },
    {
      path: '/request/view',
      name: 'RequestView',
      component: RequestView
    }
  ]
})
