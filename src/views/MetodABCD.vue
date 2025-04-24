<template>
    <main class="main">
        <Breadcrumbs/>
        <div class="metod">
            <div class="container">
                <div class="metod__inner">
                    <h5 class="metod__title">Метод ABCDE</h5>
                    <div class="metod-content">
                        <p class="metod-content__text">Метод ABCDE — это система приоритизации задач, которая помогает организовать и управлять временем более эффективно. Этот метод позволяет расставить приоритеты среди задач, основываясь на их важности и срочности. Давайте рассмотрим, как работает этот метод и как его можно применять.</p>
                        <img class="metod-content__img" src="/metodABCD.webp" alt="metodABCD image">
                        <h6 class="metod-content__title">Структура метода ABCDE</h6>
                        <p class="metod-content__text">Каждой задаче присваивается одна из пяти категорий:</p>
                        <ul class="metod-content__list">
                            <li>A (Очень важно): Задачи, которые имеют критическое значение для достижения ваших целей. Их выполнение обязательно, и они требуют немедленного внимания. Примеры: важные проекты с жесткими сроками, кризисные ситуации.</li>
                            <li>B (Важно): Задачи, которые важны, но не столь критичны, как задачи категории A. Их выполнение желательно, но не обязательно в данный момент. Примеры: планирование, встречи, которые могут подождать.</li>
                            <li>C (Не важно): Задачи, которые не имеют значительного влияния на ваши цели. Их выполнение не является приоритетом, и они могут быть выполнены в свободное время. Примеры: незначительные задачи, которые можно делегировать или отложить.</li>
                            <li>D (Делегировать): Задачи, которые можно передать другим людям. Это позволяет вам сосредоточиться на более важных задачах. Примеры: рутинные задачи, которые могут выполнять коллеги или подчиненные.</li>
                            <li>E (Исключить): Задачи, которые не приносят никакой ценности и могут быть полностью исключены из вашего списка. Примеры: ненужные встречи, незначительные дела, которые отвлекают от более важных задач.</li>
                        </ul>
                        <h6 class="metod-content__title">Как использовать метод ABCDE</h6>
                        <p class="metod-content__text">1. Составьте список задач: Запишите все задачи, которые вам нужно выполнить.</p>
                        <p class="metod-content__text">2. Присвойте каждой задаче категорию: Оцените каждую задачу и присвойте ей одну из категорий A, B, C, D или E.</p>
                        <p class="metod-content__text">3. Действуйте:</p>
                        <ul class="metod-content__list">
                            <li>Сосредоточьтесь на задачах категории A и выполните их в первую очередь.</li>
                            <li>Затем переходите к задачам категории B.</li>
                            <li>Делегируйте задачи категории D.</li>
                            <li>Исключите задачи категории E из вашего списка.</li>
                        </ul>
                        <p class="metod-content__text">4. Регулярно пересматривайте: Периодически пересматривайте свои задачи и приоритеты, чтобы убедиться, что вы находитесь на правильном пути и корректируете свои действия в зависимости от изменений.</p>
                        <h6 class="metod-content__title">Преимущества метода ABCDE</h6>
                        <ul class="metod-content__list">
                            <li>Улучшение фокуса: Помогает сосредоточиться на действительно важных задачах и избегать отвлечений.</li>
                            <li>Эффективное управление временем: Позволяет лучше организовать свой день и распределить время на выполнение задач.</li>
                            <li>Снижение стресса: Упрощает принятие решений о том, что делать в первую очередь, и помогает избежать перегрузки.</li>
                        </ul>
                        <p class="metod-content__text">Метод ABCDE — это простой и эффективный способ управления задачами, который может значительно повысить вашу продуктивность и помочь вам достигать поставленных целей.</p>
                        <!-- тут должно быть аудио -->
                    </div>
                    <div class="time__btns">
                        <light-button 
                            class="time__btns-light"
                            @click="router.push('/matrix')"
                            >вернуться
                        </light-button>
                        <my-button 
                            class="time__btns-dark"
                            @click="router.push('/test-1')"
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

<style lang="scss" scoped>

.metod{
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

}

.metod-content{
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