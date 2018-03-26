import Vue from 'vue'
import Router from 'vue-router'
import ApiRouter from '../modules/apidoc/router'
import DictRouter from '../modules/dictionary/router'
Vue.use(Router)

export default new Router({
  routes: ApiRouter.concat(DictRouter)
})
