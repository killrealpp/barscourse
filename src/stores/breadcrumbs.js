import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBreadcrumbsStore = defineStore('breadcrumbs', () => {
    const breadcrumbs = ref([]);

    const setBreadcrumbs = (newBreadcrumbs) => {
        breadcrumbs.value = newBreadcrumbs;
    };

    return {
        breadcrumbs,
        setBreadcrumbs,
    };
});