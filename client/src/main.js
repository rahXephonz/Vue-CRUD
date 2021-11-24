import Vue from 'vue';
import App from '@/App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import '@/styles/index.css';

Vue.use(VueSweetalert2);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
