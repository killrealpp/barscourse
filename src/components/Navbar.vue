<template>
    <div class="navbar">
        <div class="container">
            <nav class="navbar__content">
                <ul class="navbar__inner">
                    <li class="navbar-item" @click="router.push('/home')">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path
                                d="M1 7.81716V17C1 17.5523 1.44772 18 2 18H5.79976C6.35204 18 6.79976 17.5523 6.79976 17V13.1714C6.79976 12.6191 7.24748 12.1714 7.79976 12.1714H11.3333C11.8856 12.1714 12.3333 12.6191 12.3333 13.1714V17C12.3333 17.5523 12.781 18 13.3333 18H17C17.5523 18 18 17.5523 18 17V7.81716C18 7.50078 17.8503 7.20307 17.5963 7.01441L10.0963 1.44298C9.74227 1.17998 9.25773 1.17998 8.90368 1.44298L1.40368 7.01441C1.14971 7.20307 1 7.50078 1 7.81716Z"
                                stroke="#191F32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h5 class="navbar-item__title">Главная</h5>
                    </li>
                    <li class="navbar-item" @click="getRes">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                                d="M13 0.5H16C16.2761 0.5 16.5 0.723858 16.5 1V16.5H12.5V1C12.5 0.723858 12.7239 0.5 13 0.5Z"
                                stroke="#191F32" />
                            <path
                                d="M7 3.5H10C10.2761 3.5 10.5 3.72386 10.5 4V16.5H6.5V4C6.5 3.72386 6.72386 3.5 7 3.5Z"
                                stroke="#191F32" />
                            <path
                                d="M1 7.5H4C4.27614 7.5 4.5 7.72386 4.5 8V16.5H0.5V8L0.509766 7.89941C0.556292 7.67145 0.758287 7.5 1 7.5Z"
                                stroke="#191F32" />
                        </svg>
                        <h5 class="navbar-item__title">Прогресс</h5>
                    </li>
                    <li class="navbar-item" @click="router.push('/home')">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path
                                d="M9.30055 14.4619L11.6575 16.5375C12.3035 17.1062 13.3184 16.6476 13.3184 15.787V14.9147C13.3184 14.5268 13.6328 14.2124 14.0207 14.2124H17C17.5523 14.2124 18 13.7647 18 13.2124V1.46816C18 1.2096 17.7904 1 17.5318 1L1.98579 1.22088C1.4391 1.22865 1 1.67404 1 2.22078V13.2124C1 13.7647 1.44772 14.2124 2 14.2124H8.63968C8.88299 14.2124 9.11795 14.3011 9.30055 14.4619Z"
                                stroke="#191F32" />
                            <ellipse cx="6.58079" cy="7" rx="0.996558" ry="1" fill="#191F32" />
                            <ellipse cx="9.57053" cy="7" rx="0.996558" ry="1" fill="#191F32" />
                            <ellipse cx="12.5603" cy="7" rx="0.996558" ry="1" fill="#191F32" />
                        </svg>
                        <h5 class="navbar-item__title">Поддержка</h5>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import { useTestsStore } from '@/stores/tests';

const store = useTestsStore()

const getRes = ()=>{
    store.getIdWithProg()
    router.push('/progress')
}
</script>

<style lang="scss">
.navbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    background-color: #fff;

    &__inner{
        display: flex;
        align-items: center;
        gap: 0 48px;
    }

    &-item{
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7px;

        &__title{
            color: #191F32;
            font-weight: 400;
            font-size: 12px;
        }
    }
}
</style>