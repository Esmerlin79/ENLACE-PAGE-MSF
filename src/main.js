import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Recovery from './components/Recovery.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:'/recuperar', component: Recovery},
  {path:'/Register', component: Register},
  {path:'/', component: Login}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
