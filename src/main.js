import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase";

require("firebase/firestore");

const config_firebase_app = {
  apiKey: "AIzaSyB1uu_NhJAY6t8mPNtSGpwc1o5u9b-Yab8",
  authDomain: "fir-vue-chat-9b750.firebaseapp.com",
  databaseURL: "https://fir-vue-chat-9b750.firebaseio.com",
  projectId: "fir-vue-chat-9b750",
  storageBucket: "fir-vue-chat-9b750.appspot.com",
  messagingSenderId: "1008512940837"
};

firebase.initializeApp(config_firebase_app);
// Required for side-effects

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

window.db = db;

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')