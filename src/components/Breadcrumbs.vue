<template>
    <nav class="breadcrumbs">
        <a v-for="(crumb, index) in breadcrumbs" :key="index" :href="crumb.url">
            {{ crumb.title }}
            <span v-if="index < breadcrumbs.length - 1"> &gt; </span>
        </a>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { useBreadcrumbsStore } from '../stores/breadcrumbs';

const route = useRoute();
const breadcrumbsStore = useBreadcrumbsStore();

// Функция для формирования хлебных крошек
const generateBreadcrumbs = () => {
    const crumbs = [];
    let url = '';

    // Перебираем все совпавшие маршруты (matched), чтобы собрать все части пути
    route.matched.forEach((record, index) => {
        // Для каждого сегмента мы добавляем путь с учетом параметров
        if (record.path.includes(':')) {
            // Если путь содержит параметр, заменяем его на реальное значение из route.params
            Object.keys(route.params).forEach(param => {
                const regex = new RegExp(':' + param, 'g');
                record.path = record.path.replace(regex, route.params[param]);
            });
        }

        url = url + record.path;

        // Ищем мета-данные для текущего маршрута
        const routeMeta = record.meta?.breadcrumb;

        // Формируем название крошки с использованием мета-данных
        const formattedTitle = routeMeta
            ? routeMeta
            : decodeURIComponent(url.split('/').pop()).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        crumbs.push({ title: formattedTitle, url });
    });

    breadcrumbsStore.setBreadcrumbs(crumbs);
};

// Следим за изменением пути маршрута
watch(() => route.path, () => {
    generateBreadcrumbs();
}, { immediate: true });

const breadcrumbs = breadcrumbsStore.breadcrumbs;
</script>

<style scoped lang="scss">
.breadcrumbs {
    font-size: 14px;
    font-weight: 400;
    padding: 25px 0;

    a {
        text-decoration: none;
        color: #000;
    }
}
</style>