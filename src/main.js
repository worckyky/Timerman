import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
