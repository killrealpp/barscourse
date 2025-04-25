<template>
    <div class="main">
        <div class="tests">
            <div class="container">
                <div class="tests__inner">
                    <h5 v-if="tests[0]" class="tests__title">{{tests[0].name}}</h5>

                    <div v-if="error" class="error-message">{{ error }}</div>

                    <Loading v-if="loading" /> 

                    <div v-if="tests[0]">
                        <TestItem v-for="question in tests[0].questions" :key="question.id" :question="question"  />
                    </div>

                    <div class="time__btns tests__btns">
                        <light-button class="time__btns-light">вернуться</light-button>
                        <my-button class="time__btns-dark">продолжить</my-button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Loading from '@/components/Loading.vue';
import TestItem from '@/components/TestItem.vue';
import { useTestsStore } from '@/stores/tests';
import { onMounted } from 'vue';

const store = useTestsStore();

const loading = store.loading;
const error = store.error;
const tests = store.tests

onMounted(() => {
    store.fetchTests();
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

    &__btns {
        padding-bottom: 100px;
    }
}
</style>
