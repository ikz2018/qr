import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/qr/',
            name: 'home',
            component: HomeView,
        },
    ],
});

export default router;
