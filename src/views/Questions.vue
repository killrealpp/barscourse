<template>
    <main class="main">
        <Breadcrumbs/>
        <div class="questions">
            <div class="container">
                <div class="questions__inner">
                    <h4 class="questions__title">Часто задаваемые вопросы</h4>
                    <div class="questions-content">
                        <h6 class="questions-content__title">1. Как начать прохождение курса?</h6>
                        <p class="questions-content__text">После успешной авторизации в боте откроется первый блок обучения. Нажмите кнопку "Начать обучение", чтобы приступить.</p>
                        <h6 class="questions-content__title">2. Почему я не могу открыть следующий блок?</h6>
                        <p class="questions-content__text">Чтобы перейти к следующему блоку, необходимо полностью завершить текущий: изучить материалы и успешно пройти тестирование.</p>
                        <h6 class="questions-content__title">3. Что делать, если я ошибся в тесте?</h6>
                        <p class="questions-content__text">Если вы не набрали минимальный проходной балл, у вас будет возможность пересдать тест после изучения материалов блока ещё раз.
                        </p>
                        <h6 class="questions-content__title">4. Как задать вопрос куратору?</h6>
                        <p class="questions-content__text">В разделе "Поддержка" вы можете написать свой вопрос в специальную форму. Куратор ответит вам в ближайшее время.</p>
                        <h6 class="questions-content__title">5. Как отслеживать свой прогресс?</h6>
                        <p class="questions-content__text">В разделе "Прогресс" вы можете увидеть, сколько блоков уже пройдено, какие в процессе, а какие ещё предстоит пройти.</p>
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
</script>

<style lang="scss" scoped>
.questions{
    padding: 14px 0 80px;
    background-color: #fff;
    margin-bottom: auto;

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

.questions-content{
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