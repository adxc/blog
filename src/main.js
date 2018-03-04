// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.filter('timeFormatter',value =>{
  return value.replace(/GMT/g,"")
})
Vue.prototype.artFormatter = function(value){
    if(value.length > 100){
      return value.slice(0,100)  + "..."
    }
    return value
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
