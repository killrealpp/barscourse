<template>
    <div class="test">
        <h4 class="test__name">{{ question.name }}</h4>
        <ul class="test__list">
            <li 
                class="test__item"
                v-for="answer in question.answers"
                :key="answer.id"
                :class="{
                    'correct': isAnswerCorrect && answer.isRight,
                    'incorrect': isAnswerIncorrect && !answer.isRight
                }"
                @click="selectAnswer(answer)"
                :disabled="isAnswerSelected"
            >
                {{ answer.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useTestsStore } from '@/stores/tests';

const store = useTestsStore()

const props = defineProps({
    question: Object
});

const isAnswerCorrect = ref(false);
const isAnswerIncorrect = ref(false);
const isAnswerSelected = ref(false);

const selectAnswer = (answer) => {
    if (!isAnswerSelected.value) {  
        isAnswerSelected.value = true;  
        if (answer.isRight) {
            isAnswerCorrect.value = true;
            isAnswerIncorrect.value = false;
            store.setCorrectAnswer()
            
        } else {
            isAnswerCorrect.value = false;
            isAnswerIncorrect.value = true;
            console.log('false');  // Выбран неправильный ответ
        }
        store.answerCounter()
    }
};
</script>


<style lang="scss">
.test {
    background-color: #e7ecfc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 5px;

    &__name {
        font-weight: 400;
        font-size: 14px;
        text-align: left;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    &__item {
        list-style: none;
        padding: 6px 16px;
        background-color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        font-weight: 400;
        color: #000;
        border-radius: 5px;
        cursor: pointer;
    }

    &__item.correct {
        background-color: rgba(0, 255, 0, 0.7);
    }

    &__item.incorrect {
        background-color: rgba(255, 0, 0, 0.7);
    }

    &__item:disabled {
        pointer-events: none; 
        opacity: 0.6;  
    }
}
</style>
