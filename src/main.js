// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
Vue.use(VueResource);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/index.js';
Vue.use(ElementUI);

import moment from 'moment';
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    if(dataStr){
        return moment(dataStr).format(pattern);
    }
});

import '../static/css/reset.css';

import { getCookie, numberIntercept } from './service/common';
Vue.http.headers.common['Authorization'] = 'Bearer ' + getCookie('Abp.AuthToken');
Vue.filter("numberIntercept", numberIntercept);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
