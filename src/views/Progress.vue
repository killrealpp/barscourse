<template>
    <main class="main">
        <Breadcrumbs/>
        <div v-if="!store.loading" class="progress">
            <div class="container">
                <div class="progress__inner">
                    <h6 class="progress__title">Ваш прогресс по курсу</h6>
                    <div class="progress-line">
                        <div class="progress-line__vis">
                            <span :class="{
                                'zero-width': store.spanWidth === 0,
                                'one-width': store.spanWidth === 1,
                                'two-width': store.spanWidth === 2,
                                'three-width': store.spanWidth === 3,
                            }"></span>
                        </div>
                        <p v-if="store.spanWidth === 0" class="progress-line__text">0% пройдено</p>
                        <p v-if="store.spanWidth === 1" class="progress-line__text">30% пройдено</p>
                        <p v-if="store.spanWidth === 2" class="progress-line__text">61% пройдено</p>
                        <p v-if="store.spanWidth === 3" class="progress-line__text">100% пройдено</p>
                    </div>
                    <ul class="progress-list">
                        <li class="progress-list__item">
                            <p class="progress-list__item-text">1. Тайм-менеджмент</p>
                            <div class="progress-list__item-svg">
                                <svg
                                    v-if="store.oneTestStatus"
                                    width="20px" height="20px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#77B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/>
                                </svg>
                                <svg
                                    v-else
                                    width="20px" height="20px" viewBox="0 0 64 64" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10v40z" fill="#ff5a79"/><path fill="#ffffff" d="M50 21.2L42.8 14L32 24.8L21.2 14L14 21.2L24.8 32L14 42.8l7.2 7.2L32 39.2L42.8 50l7.2-7.2L39.2 32z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="progress-list__item">
                            <p class="progress-list__item-text">2. Лидерство</p>
                            <div class="progress-list__item-svg">
                                <svg
                                    v-if="store.twoTestStatus"
                                    width="20px" height="20px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#77B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/>
                                </svg>
                                <svg
                                    v-else
                                    width="20px" height="20px" viewBox="0 0 64 64" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10v40z" fill="#ff5a79"/><path fill="#ffffff" d="M50 21.2L42.8 14L32 24.8L21.2 14L14 21.2L24.8 32L14 42.8l7.2 7.2L32 39.2L42.8 50l7.2-7.2L39.2 32z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="progress-list__item">
                            <p class="progress-list__item-text">3. Постановка задач</p>
                            <div class="progress-list__item-svg">
                                <svg
                                    v-if="store.threeTestStatus"
                                    width="20px" height="20px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#77B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/>
                                </svg>
                                <svg
                                    v-else
                                    width="20px" height="20px" viewBox="0 0 64 64" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10v40z" fill="#ff5a79"/><path fill="#ffffff" d="M50 21.2L42.8 14L32 24.8L21.2 14L14 21.2L24.8 32L14 42.8l7.2 7.2L32 39.2L42.8 50l7.2-7.2L39.2 32z"/>
                                </svg>
                            </div>
                        </li>
                        <li class="progress-list__item">
                            <p class="progress-list__item-text">4. Управление командой</p>
                            <div class="progress-list__item-svg">
                                <svg v-if="store.lastProgressStatus" width="20px" height="20px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#77B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/></svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Loading v-else/>
        <div></div>
        <Navbar/>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Loading from '@/components/Loading.vue';
import { useTestsStore } from '@/stores/tests';

const store = useTestsStore()

</script>

<style lang="scss" scoped>
.progress{
    padding: 14px 0 80px;
    background-color: #fff;

    &__inner{
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;
    }

    &__title{
        text-align: center;
        font-weight: 500;
        font-size: 16px;
    }

    &-line{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        &__vis{
            max-width: 353px;
            width: 100%;
            height: 15px;
            background-color: #D9D9D9;
            border-radius: 5px;

            span{
                display: block;
                height: 15px;
                background-color: #96C13D;
                border-radius: 5px;
            }
        }

        &__text{
            font-weight: 400;
            font-size: 14px;
        }
    }

    &-list{
        display: flex;
        flex-direction: column;
        gap: 10px;

        &__item{
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 90px;
        }
    }
}

.zero-width{
    width: 0%;
}

.one-width{
    width: 30%;
}

.two-width{
    width: 61%;
}

.three-width{
    width: 100%;
}
</style>