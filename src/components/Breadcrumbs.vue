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

const generateBreadcrumbs = (path) => {
    const segments = path.split('/').filter(Boolean);
    const crumbs = [];

    segments.forEach((segment, index) => {
        const url = '/' + segments.slice(0, index + 1).join('/');
        const formattedTitle = decodeURIComponent(segment)
            .replace(/-/g, ' ') 
            .replace(/\b\w/g, l => l.toUpperCase()); 
        crumbs.push({ title: formattedTitle, url });
    });

    breadcrumbsStore.setBreadcrumbs(crumbs);
};

watch(() => route.path, (newPath) => {
    generateBreadcrumbs(newPath);
}, { immediate: true });

const breadcrumbs = breadcrumbsStore.breadcrumbs;
</script>

<style scoped lang="scss">
.breadcrumbs {
    font-size: 14px;
    font-weight: 400;
    padding: 25px 0;
    
    a{
        text-decoration: none;
        color: #000;
    }
}

</style>