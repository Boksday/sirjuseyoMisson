import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import store from './js/store'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
