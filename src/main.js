import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import axios from "axios";
import VueAxios from "vue-axios";
import router from '@/router'
import './assets/styles/style.css'

const pinia = createPinia();

createApp(App)
.use(pinia)
.use(router)
.use(VueAxios, axios)
.mount('#app');