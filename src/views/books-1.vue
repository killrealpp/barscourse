<template>
    <main class="main">
        <Breadcrumbs />
            <div class="books">
                <div class="container">
                    <div class="books__inner">
                        <logo />
                        <div class="books-content">
                            <h5 class="books-content__title">Доступная литература</h5>
                            <p class="books-content__text">В этом разделе собраны материалы, которые помогут глубже
                                разобраться в теме. </p>
                            <p class="books-content__text">Вы можете использовать их для самостоятельного изучения,
                                подготовки к следующему блоку или повторения ключевых идей! </p>
                        </div>
                        <div class="books-pdf">
                            <div class="books-pdf__item">
                                <a class="books-fix" href="" download="book-1.pdf">
                                    <img src="/pdf.svg" alt="" class="books-pdf__item-img">
                                    <h6 class="books-pdf__item-title">Сверх продуктивность,
                                        Михаил Алистер
                                    </h6>
                                </a>
                            </div>
                            <div class="books-pdf__item">
                                <img src="/pdf.svg" alt="" class="books-pdf__item-img">
                                <h6 class="books-pdf__item-title">Сверх продуктивность,
                                    Михаил Алистер
                                </h6>
                            </div>
                        </div>
                        <div class="books__btns">
                            <my-button class="books__dark" @click="router.push('/block-2')">Перейти к блоку 2</my-button>
                            <light-button class="books__light" @click="router.push('/block-1')">Вернуться назад</light-button>
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
.books{
    background-color: #fff;
    padding-top: 5px;
    margin-bottom: auto;
    &__inner{
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    &-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        &__title{
            font-weight: 500;
            font-size: 17px;
            text-align: center;
        }

        &__text{
            font-weight: 400;
            text-align: center;
        }
    }

    &-pdf{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;

        &__item{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            &-img{
                width: 100%;
                max-width: 66px;
            }
            &-title{
                font-weight: 400;
                font-size: 12px;
                text-align: center;
                max-width: 131px;
                width: 100%;
                color: #000;
            }
        }
    }

    &__btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;
    }

    &__dark, .books__light{
        padding: 8px 55px;
    }
}

.books-fix{
    display: flex;flex-direction: column;
    align-items: center;
    gap: 5px;
}
</style>