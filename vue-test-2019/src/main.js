import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar);

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min.js'




window.$ = window.jQuery = $;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app-ce');





