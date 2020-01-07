import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/views/Home.vue'
import Contacts from '../components/views/Contacts'
import ContactDetail from '../components/views/ContactDetail'
import AddContact from '../components/views/AddContact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/contacts/:no',
    name: 'contact',
    component: ContactDetail
  },
  {
    path: '/addContact',
    name: 'addContact',
    component: AddContact
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
