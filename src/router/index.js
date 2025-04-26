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
import books1 from '@/views/books-1.vue'
import Culture from '@/views/Culture.vue'
import Roles from '@/views/Roles.vue'
import books4 from '@/views/books-4.vue'
import Lider from '@/views/Lider.vue'
import LiderStyle from '@/views/Lider-style.vue'
import books2 from '@/views/books-2.vue'
import Models from '@/views/Models.vue'
import Deleg from '@/views/deleg.vue'
import Books3 from '@/views/books-3.vue'

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
        path: '/test-:id', 
        component: Test1 
    },
    {
        path: '/books-1', 
        component: books1 
    },
    {
        path: '/culture', 
        component: Culture 
    },
    {
        path: '/roles', 
        component: Roles 
    },
    {
        path: '/books-4', 
        component: books4 
    },
    {
        path: '/books-3', 
        component: Books3 
    },
    {
        path: '/lider', 
        component: Lider 
    },
    {
        path: '/lider-style', 
        component: LiderStyle 
    },
    {
        path: '/books-2', 
        component: books2 
    },
    {
        path: '/models', 
        component: Models 
    },
    {
        path: '/deleg', 
        component: Deleg 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router