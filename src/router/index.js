import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Details from '@/components/TodayDetails'
import Forecast from '@/components/SimpleForecast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/forecast',
      name: 'Forecast',
      component: Forecast
    }
  ]
})
