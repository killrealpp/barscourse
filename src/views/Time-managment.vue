<template>
    <main class="main">
        <Breadcrumbs/>
        <div class="time">
            <div class="container">
                <div class="time__inner">
                    <h5 class="time__title">Тайм-менеджмент тим лида</h5>
                    <div class="time-content">
                        <h6 class="time-content__title">Основные принципы управления временем для руководителя:</h6>
                        <p class="time-content__text">
                            1. Планирование долгосрочное и краткосрочное. Составление бэклога задач, как личных, так и командных.
                        </p>
                        <p class="time-content__text">
                            2. Приоритизация задач. Позволяет грамотно распределить рабочее время и подключить необходимые ресурсы для выполнения поставленных задач.
                        </p>
                        <h6 class="time-content__title">Инструменты для приоритезации задач:</h6>
                        <p class="time-content__text"><b>Матрица Эйзенхауэра:</b> этот инструмент помогает разделить задачи на четыре категории: срочные и важные, важные, но не срочные, срочные, но не важные, и не срочные и не важные. Это позволяет сосредоточиться на действительно значимых задачах.</p>
                        <p class="time-content__text"><b>ABCDE-анализ:</b> этот метод предполагает присвоение каждой задаче буквы: A (очень важно), B (важно), C (не важно), D (делегировать) и E (исключить). Это помогает расставить приоритеты и сосредоточиться на наиболее значимых задачах.</p>
                        <p class="time-content__text">
                            <b>Принцип Парето:</b> Согласно принципу Парето, вам следует грамотно распределять свое время, выполняя первоначально самые важные задачи, остальные же распределять по приоритетности. Потратив 20 % времени на полезные задачи, вы обеспечите 80 % результата. Так работают управляющие и обычный персонал. Поэтому особенно важно максимально продуктивно использовать эти 20 % рабочего периода.
                        </p>
                        <p class="time-content__text"><b>Метод Лягушки:</b> распределите по неприятной задаче на каждый день недели, чтобы они не копились, а решались по мере поступления.
                        </p>
                        <h6 class="time-content__title">Основные принципы управления временем для руководителя:</h6>
                        <p class="time-content__text"><b>3. Делегирование</b>
                            Поручение неважных и срочных, а также других дел подчиненным – это действенная техника высвобождения свободного времени у руководителя. Делегирование представляет собой один из классических частей тайм-менеджмента.
                        </p>
                        <p class="time-content__text"><b>4. Специфическая постановка задач</b>
                            Постановка задач в зависимости от уровня подготовки сотрудника.
                        </p>
                        <p class="time-content__text"><b>5. Специфический контроль исполнения</b>
                            Контроль исполнения в зависимости от уровня подготовки специалиста: опыт работы в компании, общий опыт, знания и навыки.
                        </p>
                        <p class="time-content__text"><b>6. Анализ и рефлексия.</b>Подводить итоги дня, недели, месяца. Вносить корректировки в свой план.</p>
                    </div>
                    
                    <div class="time__btns">
                        <light-button 
                            class="time__btns-light"
                            @click="router.push('/block-1')"
                            >вернуться
                        </light-button>
                        <my-button 
                            class="time__btns-dark"
                            @click="router.push('/matrix')"
                            >продолжить
                        </my-button>
                    </div>
                </div>
            </div>
        </div>
        <Navbar/>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style lang="scss">
.time{
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

.time-content{
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__title{
        font-weight: 500;
        font-size: 14px;
    }

    &__text{
        font-size: 14px;
    }
}
</style>
