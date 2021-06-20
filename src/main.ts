import './assets/styles/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import electronIpc from './plugins/ElectronIpc';

createApp(App).use(store).use(router).use(electronIpc)
    .mount('#app');
