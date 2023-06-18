import * as Vue from 'vue'
import './assets/tailwind.css'
import router from "@/router";
import App from "@/App.vue";

const app = Vue.createApp(App)

app.use(router)

app.mount('#app')
