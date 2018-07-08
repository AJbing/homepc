import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab_router_slipe from '@/components/Tab_router_slipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tab1',
      name: 'Tab_router_slipe',
      component: Tab_router_slipe
    }
  ]
})
