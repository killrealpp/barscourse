import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/Start.vue'
import Home from '@/views/Home.vue'
import block1 from '@/views/block-1.vue'
import block2 from '@/views/block-2.vue'
import block3 from '@/views/block-3.vue'
import block4 from '@/views/block-4.vue'
import TimeManagment from '@/views/Time-managment.vue'
import Matrix from '@/views/Matrix.vue'
import MetodABCD from '@/views/MetodABCD.vue'
import Test1 from '@/views/Test1.vue'



const routes = [
    { 
        path: '/', 
        component: Start 
    },
    {
        path: '/home', 
        component: Home 
    },
    {
        path: '/block-1', 
        component: block1 
    },
    {
        path: '/block-2', 
        component: block2 
    },
    {
        path: '/block-3', 
        component: block3 
    },
    {
        path: '/block-4', 
        component: block4 
    },
    {
        path: '/block-4', 
        component: block4 
    },
    {
        path: '/time-managment', 
        component: TimeManagment 
    },
    {
        path: '/matrix', 
        component: Matrix 
    },
    {
        path: '/metodABCD', 
        component: MetodABCD 
    },
    {
        path: '/test-1', 
        component: Test1 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router