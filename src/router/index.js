import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/Start.vue'
import Home from '@/views/Home.vue'

const routes = [
    { 
        path: '/', 
        component: Start 
    },
    {
        path: '/home', 
        component: Home 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router