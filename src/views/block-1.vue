<template>
    <main class="main">
        <Breadcrumbs />
        <div class="block">
            <div class="container">
                <div class="block__inner">
                    <h3 class="block__title">Тайм-менеджмент</h3>
                    <ul class="block__content">
                        <li class="block__item">1. Тайм-менеджмент тим лида</li>
                        <li class="block__item">2. Матрица Эйзенхауэра</li>
                        <li class="block__item">3. Метод ABCDE</li>
                        <li class="block__item">4. Итоговый тест</li>
                        <li class="block__item">5. Книги</li>
                    </ul>
                    <div class="block__exit" @click="router.push('/home')">
                        <svg width="23" height="8" viewBox="0 0 23 8" fill="none">
                            <path
                                d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H23V3.5H1V4.5Z"
                                fill="white" />
                        </svg>
                    </div>
                    <logo/>
                </div>
            </div>
        </div>
        <Navbar />
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style lang="scss">
.block {
    width: 100%;
    margin-bottom: auto;
    background-color: #fff;

    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 22px;
    }

    &__title {
        font-weight: 500;
        font-size: 16px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    &__item {
        list-style: none;
        max-width: 347px;
        width: 100%;
        padding: 12px;
        border: none;
        background-color: #E7ECFC;
        border-radius: 5px;
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
        color: #191F32;
        transition: all 0.2s ease;

        &:hover {
            transform: translateY(-2px);
        }
    }

    &__exit {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 28px;
        border: none;
        background-color: #191F32;
        border-radius: 5px;
        margin-right: auto;
        transition: all 0.4s ease;
        border: 1px solid transparent;

        svg {
            transition: all 0.4s ease;
        }

        &:hover {
            background-color: #fff;
            border: 1px solid #191F32;

            svg path {
                fill: #191F32;
            }
        }
    }
}

.logo__content {
    margin-top: auto;
}
</style>