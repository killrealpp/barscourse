<template>
    <main class="main">
        <Breadcrumbs />
        <div class="block">
            <div class="container">
                <div class="block__inner">
                    <h3 class="block__title">Лидерство</h3>
                    <ul class="block__content">
                        <li class="block__item" @click="router.push('/lider')">1. Кто такой лидер</li>
                        <li class="block__item" @click="router.push('/lider-style')">2. Стили лидерства</li>
                        <li class="block__item" @click="router.push('/test-2')">3. Итоговый тест</li>
                        <li class="block__item" @click="router.push('/books-2')">4. Книги</li>
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

</style>