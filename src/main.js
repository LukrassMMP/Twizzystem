import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import router from './router';
import store from './store';
// import SuiVue from 'semantic-ui-vue';
import BootstrapVue from 'bootstrap-vue';
// import {Howl, Howler} from 'howler';
import VueYouTubeEmbed from 'vue-youtube-embed'

// export const SocketInstance = socketio('http://localhost:3000');

Vue.use(BootstrapVue)

Vue.use(VueYouTubeEmbed)

// Vue.use(Howler)

// Vue.use(SuiVue)

// Vue.use(VueSocketIO, SocketInsance)

Vue.use(new VueSocketIO({
  debug: true,
  // connection for local testing
  // connection: socketio('http://localhost:5000'),
  // NGROK connection
  connection: socketio('http://twizzy.herokuapp.com/'),
  vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
}))

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    socketio,
    axios,
    VueAxios,
    router,
    store,
    components:{ App },
    template: '<App/>',

    render: h => h(App),

}).$mount('#app');
