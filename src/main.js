import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';

import "bulma/bulma.sass";
import "@mdi/font/css/materialdesignicons.min.css";
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
