<template>
    <div class="test">
        <h4 class="test__name">{{ question.name }}</h4>
        <ul class="test__list">
            <li 
                class="test__item"
                v-for="answer in question.answers"
                :key="answer.id"
            >
                {{ answer.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted} from 'vue';

const props = defineProps({
    question: Object
});


// function selectAnswer(option) {
//     if (!option.selected) {
//         option.selected = true;

//         // Если ответ правильный, устанавливаем флаг isCorrect в true
//         if (option.correct) {
//             option.isCorrect = true;  // Флаг для правильного ответа
//             console.log('true');
//         } else {
//             option.isCorrect = false; // Флаг для неправильного ответа
//             console.log('false');
//         }

//         props.test.selectedAnswer = true;
//     }
// }
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
        /* Правильный ответ */
    }

    &__item.incorrect {
        background-color: rgba(255, 0, 0, 0.7);
        /* Неправильный ответ */
    }

    &__item:disabled {
        cursor: not-allowed;
        background-color: rgba(200, 200, 200, 0.3);
    }
}
</style>
