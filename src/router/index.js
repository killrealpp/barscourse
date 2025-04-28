import { createRouter, createWebHistory } from 'vue-router';
import Start from '@/views/Start.vue';
import Home from '@/views/Home.vue';
import block1 from '@/views/block-1.vue';
import block2 from '@/views/block-2.vue';
import block3 from '@/views/block-3.vue';
import block4 from '@/views/block-4.vue';
import TimeManagment from '@/views/Time-managment.vue';
import Matrix from '@/views/Matrix.vue';
import MetodABCD from '@/views/MetodABCD.vue';
import Test1 from '@/views/Test1.vue';
import books1 from '@/views/books-1.vue';
import Culture from '@/views/Culture.vue';
import Roles from '@/views/Roles.vue';
import books4 from '@/views/books-4.vue';
import Lider from '@/views/Lider.vue';
import LiderStyle from '@/views/Lider-style.vue';
import books2 from '@/views/books-2.vue';
import Models from '@/views/Models.vue';
import Deleg from '@/views/Deleg.vue';
import Books3 from '@/views/books-3.vue';
import Progress from '@/views/Progress.vue';
import Support from '@/views/Support.vue';
import Questions from '@/views/Questions.vue';

const routes = [
    {
        path: '/',
        component: Start,
        meta: { breadcrumb: 'Главная' }
    },
    {
        path: '/home',
        component: Home,
        meta: { breadcrumb: 'Домашняя страница' }
    },
    {
        path: '/block-1',
        component: block1,
        meta: { breadcrumb: 'Блок 1' }
    },
    {
        path: '/block-2',
        component: block2,
        meta: { breadcrumb: 'Блок 2' }
    },
    {
        path: '/block-3',
        component: block3,
        meta: { breadcrumb: 'Блок 3' }
    },
    {
        path: '/block-4',
        component: block4,
        meta: { breadcrumb: 'Блок 4' }
    },
    {
        path: '/time-managment',
        component: TimeManagment,
        meta: { breadcrumb: 'Управление временем' }
    },
    {
        path: '/matrix',
        component: Matrix,
        meta: { breadcrumb: 'Матрица' }
    },
    {
        path: '/metodABCD',
        component: MetodABCD,
        meta: { breadcrumb: 'Метод ABCD' }
    },
    {
        path: '/test-:id',
        component: Test1,
        meta: { breadcrumb: 'Тест' }
    },
    {
        path: '/books-1',
        component: books1,
        meta: { breadcrumb: 'Книги 1' }
    },
    {
        path: '/culture',
        component: Culture,
        meta: { breadcrumb: 'Культура' }
    },
    {
        path: '/roles',
        component: Roles,
        meta: { breadcrumb: 'Роли' }
    },
    {
        path: '/books-4',
        component: books4,
        meta: { breadcrumb: 'Книги 4' }
    },
    {
        path: '/books-3',
        component: Books3,
        meta: { breadcrumb: 'Книги 3' }
    },
    {
        path: '/lider',
        component: Lider,
        meta: { breadcrumb: 'Лидер' }
    },
    {
        path: '/lider-style',
        component: LiderStyle,
        meta: { breadcrumb: 'Стиль лидера' }
    },
    {
        path: '/books-2',
        component: books2,
        meta: { breadcrumb: 'Книги 2' }
    },
    {
        path: '/models',
        component: Models,
        meta: { breadcrumb: 'Модели' }
    },
    {
        path: '/deleg',
        component: Deleg,
        meta: { breadcrumb: 'Делегирование' }
    },
    {
        path: '/progress',
        component: Progress,
        meta: { breadcrumb: 'Прогресс' }
    },
    {
        path: '/support',
        component: Support,
        meta: { breadcrumb: 'Поддержка' }
    },
    {
        path: '/questions',
        component: Questions,
        meta: { breadcrumb: 'Вопросы' }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
