import Vue from 'vue'
import Router from 'vue-router'

import Portfolio from "../components/Portfolio.vue"


Vue.use(Router)

export default new Router({
  routes: [
{
  path: '/',
    name: 'Portfolio',
  component: Portfolio
}
  ]
})
