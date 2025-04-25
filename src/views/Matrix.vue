<template>
    <main class="main">
        <Breadcrumbs />
        <div class="matrix">
            <div class="container">
                <div class="matrix__inner">
                    <h5 class="matrix__title">Матрица Эйзенхауэра</h5>
                    <div class="matrix-content">
                        <p class="matrix-content__text"><b>Матрица Эйзенхауэра</b> — это инструмент для приоритизации задач, который помогает разделить их на четыре категории в зависимости от их срочности и важности. Она названа в честь Дуайта Д. Эйзенхауэра, 34-го президента США, который использовал этот метод для управления своим временем и задачами.</p>
                        <img class="matrix-content__img" src="/matrix.webp" alt="matrix image">
                        <h6 class="matrix-content__title" style="padding-top: 10px;">Структура матрицы</h6>
                        <p class="matrix-content__text"> Матрица состоит из четырех квадрантов:</p>
                        <p class="matrix-content__text">1. Срочные и важные (Квадрант I):</p>
                        <ul class="matrix-content__list">
                            <li>Задачи, которые требуют немедленного внимания и имеют значительное влияние на ваши цели.</li>
                            <li>Примеры: кризисные ситуации, срочные дедлайны.</li>
                        </ul>
                        <p class="matrix-content__text">2. Важные, но не срочные (Квадрант II):</p>
                        <ul class="matrix-content__list">
                            <li>Задачи, которые важны для достижения долгосрочных целей, но не требуют немедленного выполнения.</li>
                            <li>Примеры: планирование, обучение, развитие навыков.</li>
                        </ul>
                        <p class="matrix-content__text">3. Срочные, но не важные (Квадрант III):</p>
                        <ul class="matrix-content__list">
                            <li>Задачи, которые требуют быстрого выполнения, но не способствуют вашим долгосрочным целям.</li>
                            <li>Примеры: некоторые телефонные звонки, электронные письма, которые могут быть делегированы.</li>
                        </ul>
                        <p class="matrix-content__text">4. Не срочные и не важные (Квадрант IV):</p>
                        <ul class="matrix-content__list">
                            <li>Задачи, которые не имеют значительного влияния на ваши цели и могут быть отложены или исключены.</li>
                            <li>Примеры: просмотр социальных сетей, незначительные развлечения.</li>
                        </ul>
                        <h6 class="matrix-content__title" style="padding-top: 10px;">Кай использовать матрицу Эйзенхауэра</h6>
                        <p class="matrix-content__text">1. Составьте список задач: Запишите все задачи, которые вам нужно выполнить.</p>
                        <p class="matrix-content__text">2. Распределите задачи по квадрантам: Определите, в какой квадрант попадает каждая задача, основываясь на их срочности и важности.</p>
                        <p class="matrix-content__text">3. Действуйте:</p>
                        <ul class="matrix-content__list">
                            <li>Сосредоточьтесь на задачах из Квадранта I.</li>
                            <li>Запланируйте время для задач из Квадранта II.</li>
                            <li>Делегируйте или минимизируйте время на задачи из Квадранта III.</li>
                            <li>Избегайте задач из Квадранта IV.</li>
                        </ul>
                        <h6 class="matrix-content__title" style="padding-top: 10px;">Преимущества использования матрицы Эйзенхауэра</h6>
                        <ul class="matrix-content__list">
                            <li>Улучшение продуктивности: Помогает сосредоточиться на действительно важных задачах.</li>
                            <li>Снижение стресса: Упрощает принятие решений о том, что делать в первую очередь.</li>
                            <li>Долгосрочное планирование: Способствует развитию навыков и достижению целей.</li>
                        </ul>
                        <p class="matrix-content__text">Матрица Эйзенхауэра — это мощный инструмент, который может помочь вам лучше управлять своим временем и достигать успеха в личной и профессиональной жизни.</p>
                    </div>
                    <div class="time__btns">
                        <light-button 
                            class="time__btns-light"
                            @click="router.push('/time-managment')"
                            >вернуться
                        </light-button>
                        <my-button 
                            class="time__btns-dark"
                            @click="router.push('/metodABCD')"
                            >продолжить
                        </my-button>
                    </div>
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
.matrix{
    padding: 14px 0 80px;
    background-color: #fff;

    &__inner{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__title{
        text-align: center;
        font-weight: 500;
        font-size: 16px;
    }

    &__btns{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 28px;
        
        &-light{
            padding: 7px 0;
            max-width: 108px;
        }

        &-dark{
            padding: 7px 0;
            max-width: 108px;
        }
    }
}

.matrix-content{
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__text{
        font-weight: 400;
        font-size: 14px;
    }

    &__title{
        font-weight: 500;
    }

    &__img{
        width: 100%;
    }

    &__list{
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-left: 40px;

        li{
            font-weight: 400;
            font-size: 14px;
        }
    }
}
</style>