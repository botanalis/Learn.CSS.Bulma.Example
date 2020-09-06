import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bulma/bulma.sass";
import "font-awesome/css/font-awesome.min.css";

new Vue({
  render: h => h(App),
}).$mount('#app')
