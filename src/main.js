import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"; // Importar desde el directorio source
import router from '@/router';
import { usdFilter, percenFilter } from '@/filters';

Vue.filter('dollar', usdFilter)
Vue.filter('porcentaje', percenFilter)
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
