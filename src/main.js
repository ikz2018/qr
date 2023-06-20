import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import VueYandexMetrika from 'vue3-yandex-metrika';

export const app = createApp(App);

app.use(router);
app.use(VueYandexMetrika, {
    id: 94048546,
    router: router,
});

app.mount('#app');
