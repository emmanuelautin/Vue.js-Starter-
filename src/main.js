import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes:[
    {
      path: '/',
      name: 'home',
      components: {
        default: SaleList,
        additional: CreateSale
      }
    },
    {
      path: '/search',
      component: SearchSale,
      props: true
    },
  ]
});
import App from './App.vue'
import SearchSale from "@/components/SearchSale";
import CreateSale from "@/components/CreateSale";
import SaleList from "@/components/SaleList";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
