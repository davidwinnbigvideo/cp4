import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TicTacToe from './TicTacToe';
import Cell from './Cell';

Vue.config.productionTip = false

Vue.component('tic-tac-toe', TicTacToe);
Vue.component('cell', Cell);

new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')
