<template>
    <main class="main">
        <Breadcrumbs />
        <div class="lider-style">
            <div class="container">
                <div class="lider-style__inner">
                    <h5 class="lider-style__title">Стили лидерства</h5>
                    <div class="lider-style-content">
                        <p class="lider-style-content__text">Стили лидерства — это совокупность методов воздействия,
                            которые применяет руководитель для того, чтобы повлиять на других участников группы.
                            Перечисленные ниже стили могут быть пересекаться между собой, и один и тот же человек может
                            менять стиль в зависимости от ситуации - подобный метод управления
                            называется ситуационным лидерством.
                            Его мы подробно изучим в этой главе.
                            Выбор типа лидерства зависит от нескольких факторов. 
                        </p>
                        <p class="lider-style-content__text">Например:</p>
                        <ul class="lider-style-content__list">
                            <li>личные качества менеджера;</li>
                            <li>восприимчивость сотрудников — мотивация и «зрелость»;</li>
                            <li>корпоративная культура компании;</li>
                            <li>внешние факторы.</li>
                        </ul>
                        <p class="lider-style-content__text">Дополнительно выделяют несколько стилей лидерства:</p>
                        <p class="lider-style-content__text">1. Трансформационный стиль</p>
                        <ul class="lider-style-content__list">
                            <li>Описание: Лидер вдохновляет и мотивирует команду, создавая видение будущего и поддерживая изменения.</li>
                            <li>Преимущества: Способствует высокой вовлеченности и преданности сотрудников, помогает в достижении долгосрочных целей.</li>
                            <li>Недостатки: Может быть сложным для реализации, требует от лидера высокой эмоциональной интеллигентности.</li>
                        </ul>
                        <p class="lider-style-content__text">2. Трансакционный стиль</p>
                        <ul class="lider-style-content__list">
                            <li>Описание: Лидер управляет командой через систему вознаграждений и наказаний, основываясь на обмене.</li>
                            <li>Преимущества: Четкие ожидания и результаты, эффективен в стабильных условиях.</li>
                            <li>Недостатки: Может не способствовать инновациям и креативности, ограничивает развитие сотрудников.</li>
                        </ul>
                        <p class="lider-style-content__text">3. Патерналистский стиль</p>
                        <ul class="lider-style-content__list">
                            <li>Описание: Лидер заботится о благополучии своих подчиненных и принимает решения, основываясь на их интересах.</li>
                            <li>Преимущества: Создает доверительные отношения, повышает лояльность.</li>
                            <li>Недостатки: Может привести к зависимости сотрудников от лидера, ограничивает их самостоятельность.</li>
                        </ul>
                        <p class="lider-style-content__text">4. Харизматический стиль</p>
                        <ul class="lider-style-content__list">
                            <li>Описание: Лидер использует свою личную харизму и обаяние для вдохновения и мотивации команды.</li>
                            <li>Преимущества: Способствует высокой вовлеченности и преданности, создает сильную корпоративную культуру.</li>
                            <li>Недостатки: Зависимость от личности лидера, может привести к проблемам, если лидер покинет организацию.</li>
                        </ul>
                        <p class="lider-style-content__text"> 
                            2.1. Ситуационное лидерство
                        </p>
                        <p class="lider-style-content__text">Теория ситуационного лидерства была разработана двумя учёными Полом Херси (Paul Hersey) и Кеном Бланшаром (Ken Blanchard). В 1960-х годах теория впервые была описана ими в книге «Management of Organizational Behavior» (1960 год).</p>
                        <img src="/lider-style.webp" alt="image" class="lider-style-content__img">
                        <p class="lider-style-content__text">Пошаговая реализация стратегии «ситуационное лидерство».
                            1. Разделить сотрудников на разные типы, на основании комбинации уровней знаний и мотивации сотрудника.
                        </p>
                        <p class="lider-style-content__text">Типы сотрудников: D1 – новички - сотрудники с более низким уровнем компетентностиий, но высокой мотивацией. D2 – разочарованные - сотрудники с низким уровнем компетентности и низкой мотивацией. D3 – способдные - сотрудники с высоким уровнем компетентности, но низкой мотивацией. D4 – самостоятельные - сотрудники с высоким уровнем компетентности и высокой мотивацией.’</p>
                        <p class="lider-style-content__text">2. Подобрать элементы разных стилей лидерства в соответствии с типом сотрудника.</p>
                        <img src="/lider-style-3.webp" alt="image" class="lider-style-content__img">
                        <p class="lider-style-content__text">Вывод: Исходя из уровня развития сотрудника руководитель подбирает стратегию поведения и взаимодействия с конкретным сотрудником.
                            Значит, стили лидерства меняются не только для каждого сотрудника, но и для каждой задачи. Эксперты считают, что ситуационная модель лидерства наиболее полезна для управления командами. Лидер учитывает контекст и использует методы, которые будут максимально эффективны здесь и сейчас.
                        </p>
                    </div>
                    <div class="time__btns">
                        <light-button class="time__btns-light" @click="router.push('/lider')">вернуться
                        </light-button>
                        <my-button class="time__btns-dark" @click="router.push('/metodABCD')">продолжить
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

<style lang="scss" scoped>
.lider-style{
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

.lider-style-content{
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