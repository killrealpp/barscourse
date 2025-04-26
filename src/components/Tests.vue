<template>
    <div class="main">
        <div v-if="store.testStatus === 0" class="tests">
            <div class="container">
                <div class="tests__inner">
                    <h5 v-if="tests[testId - 1]" class="tests__title">{{tests[testId - 1].name}}</h5>

                    <div v-if="error" class="error-message">{{ error }}</div>

                    <Loading v-if="loading" /> 

                    <div v-if="tests[testId - 1]" class="test__wrapper">
                        <TestItem v-for="question in tests[testId - 1].questions" :key="question.id" :question="question"  />
                    </div>

                </div>
            </div>
        </div>

        <div v-if="store.testStatus === 1" class="result">
            <div class="container">
                <div class="result__inner">
                    <logo/>
                    <div class="result__texts">
                        <h5 class="result__title">Отличный результат! </h5>
                        <h3 class="result__title">{{ store.correctAnswer }} из {{ store.questionCount }}</h3>
                    </div>
                    <p class="result__text"> Ты успешно прошёл(а) тест по блоку и можешь двигаться дальше.</p>
                    <p class="result__text"> Следующий модуль уже доступен — продолжай в том же духе!</p>
                    <div class="result__btns">
                            <my-button class="result__dark" @click="router.push('./home')">Вернуться на главную</my-button>
                            <light-button class="result__light" @click="store.resetTest()">Вернуться назад</light-button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="store.testStatus === 2" class="result">
            <div class="container">
                <div class="result__inner">
                    <logo/>
                    <div class="result__texts">
                        <h5 class="result__title"> Тест не пройден. </h5>
                        <h3 class="result__title">{{ store.correctAnswer }} из {{ store.questionCount }}</h3>
                    </div>
                    <p class="result__text"> Некоторые ответы оказались неверными. Посмотри материалы ещё раз — и попробуй пройти тест повторно.</p>
                    <p class="result__text">У тебя точно получится!</p>
                    <div class="result__btns">
                            <my-button class="result__dark" @click="router.push('./home')">Вернуться на главную</my-button>
                            <light-button class="result__light" @click="store.resetTest()">Вернуться назад</light-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import Loading from '@/components/Loading.vue';
import TestItem from '@/components/TestItem.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { useTestsStore } from '@/stores/tests';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const store = useTestsStore();


const loading = store.loading;
const error = store.error;
const tests = store.tests
const testId = route.params.id


const currentTest = tests[testId - 1]
const questionCount =  currentTest ? currentTest.questions.length : 0

store.setTestId(testId - 1)
store.setQuestionCount(questionCount)

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

.result{
    padding: 30px 0 80px;
    background-color: #fff;

    &__inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    &__texts{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    &__title{
        font-weight: 500;
        font-size: 17px;
        text-align: center;
    }

    &__text{
        font-weight: 400;
        text-align: center;
    }

    &__btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    &__dark, .result__light{
        max-width: 257px;
        padding: 8px 50px;
        width: 100%;
        flex-wrap: nowrap;
    }
}

.test__wrapper{
    padding-bottom: 100px;
}
</style>
