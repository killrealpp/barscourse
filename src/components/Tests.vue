<template>
    <div class="main">
    <div class="tests">
        <div class="container">
            <div class="tests__inner">
                <h5 class="tests__title">Итоговое тестирование</h5>

                <div v-if="error" class="error-message">{{ error }}</div>

                <Loading v-if="loading" />

                <TestItem v-for="test in tests" :key="test.id" :test="test" />

                <div class="time__btns tests__btns">
                    <light-button class="time__btns-light">вернуться
                    </light-button>
                    <my-button class="time__btns-dark">продолжить
                    </my-button>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import Loading from '@/components/Loading.vue';
import TestItem from '@/components/TestItem.vue';
import { onMounted } from 'vue';
import { useTestsStore } from '@/stores/tests';

const store = useTestsStore();

const tests = store.tests;
const loading = store.loading;
const error = store.error;

onMounted(() => {
    if (tests.length === 0) {
        store.fetchTests(); // Загружаем тесты из локального файла
    }
});
</script>

<style lang="scss">
.tests {
    padding-top: 14px;
    background-color: #fff;

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__title {
        font-weight: 500;
        font-size: 16px;
        text-align: center;
    }

    &__btns{
        padding-bottom: 100px;
    }
}
</style>