import Login from './components/Login.vue'
import Welcome from './components/Welcome.vue'
import CurrentData from './components/CurrentData.vue'
import Variants from './components/Variants.vue'
import TestingCenter from './components/TestingCenter.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Login',
        component: Login,
        path: '/'
    },
    {
        name: 'Welcome',
        component: Welcome,
        path: '/welcome'
    },    
    {
        name: 'CurrentData',
        component: CurrentData,
        path: '/CurrentData'
    },
    {
        name: 'Variants',
        component: Variants,
        path: '/Variants'
    },
    {
        name: 'TestingCenter',
        component: TestingCenter,
        path: '/TestingCenter'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;