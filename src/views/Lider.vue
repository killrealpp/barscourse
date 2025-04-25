<template>
    <main class="main">
        <Breadcrumbs/>
        <div class="lider">
            <div class="container">
                <div class="lider__inner">
                    <h5 class="lider__title">Кто такой лидер</h5>
                    <div class="lider-content">
                        <h6 class="lider-content__title">Кто такой лидер?</h6>
                        <p class="lider-content__text">Лидерством называют умение влиять одного человека на других. Под лидером понимают того, кто объединяет людей для достижения цели. </p>
                        <p class="lider-content__text"><b>Роль лидера часто выполняют менеджеры:</b> руководители отделов, тимлиды, старшие специалисты. Но так бывает не всегда — лидером может быть и человек внутри коллектива без формальной власти.</p>
                        <p class="lider-content__text">Если вернуться к Тимлидам, часто, в команде есть Тимлиды, которые именно управляют проектом/командой, а есть так называемые teach leads - Техлиды. Техлиды как накопители знаний в команде - это те самые ценные люди, которые могут ответить и проконсультировать практически по любому техническому вопросу. 
                            Таким образом Тимлиды и Техлиды могут быть разными сотрудниками.
                        </p>
                        <h6 class="lider-content__title">Функции лидера:</h6>
                        <p class="lider-content__text"> Современные исследователи называют более десяти разных функций лидеров. 
                            Большинство сходятся в том, что лидер:
                        </p>
                        <ul class="lider-content__list">
                            <li>мотивирует команду — например, поддерживает сотрудников, помогает им;</li>
                            <li>выполняет роль наставника — отвечает на вопросы, помогает исправить ошибки, делится знаниями;</li>
                            <li>работает с эмоциями участников группы — считывает их и помогает ими управлять,</li>
                            <li>ставит цели и направляет на пути к их достижению;</li>
                            <li>занимается «внешней политикой» — ведёт переговоры и защищает участников группы;</li>
                            <li>разрешает конфликты между членами команды.</li>
                        </ul>
                        <img class="lider-content__img" src="/lider.webp" alt="lider image">
                    </div>
                    <div class="time__btns">
                        <light-button 
                            class="time__btns-light"
                            @click="router.push('/block-2')"
                            >вернуться
                        </light-button>
                        <my-button 
                            class="time__btns-dark"
                            @click="router.push('/lider-style')"
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
.lider{
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

.lider-content{
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