import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')