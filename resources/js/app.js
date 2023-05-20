import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from "vue-router";
import routes from './router';
import '@mdi/font/css/materialdesignicons.css'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
    .mount('#app')

