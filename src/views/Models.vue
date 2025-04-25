<template>
    <main class="main">
        <Breadcrumbs/>
        <div class="models">
            <div class="container">
                <div class="models__inner">
                    <h5 class="models__title">Постановка задач (модели)</h5>
                    <div class="models-content">
                        <p class="models-content__text">Постановка задач является неотъемлемой частью работы тимлида. </p>
                        <p class="models-content__text">Для того, чтобы рабочие задачи выполнялись точно и в срок важно учитывать несколько нюансов: </p>
                        <ul class="models-content__list">
                            <li>учитывать степень развития навыков и знаний сотрудника, которому ставится задача,</li>
                            <li>проверять критерии результата на понятность и прозрачность,</li>
                            <li>выставлять четкие сроки.</li>
                        </ul>
                        <p class="models-content__text">Существует несколько моделей постановки задач, которые можно использовать в качестве шаблона как руководителю, так и сотруднику.</p>
                        <h6 class="models-content__title">1. Модель smart</h6>
                        <p class="models-content__text">Модель SMART — это методика, используемая для постановки целей, которая помогает сделать их более четкими и достижимыми. Название "SMART" является акронимом, где каждая буква обозначает определенный критерий, которому должна соответствовать цель.</p>
                        <img src="/smart.webp" alt="image" class="models-content__img">
                        <p class="models-content__text">Давайте рассмотрим каждый из этих критериев подробнее.</p>
                        <p class="models-content__text">1. S — Specific (Конкретная)
                            Цель должна быть четкой и конкретной, чтобы не оставлять места для неопределенности. Это означает, что вы должны точно знать, что хотите достичь.</p>
                        <p class="models-content__text">2. M — Measurable (Измеримая)
                            Цель должна быть измеримой, чтобы вы могли отслеживать свой прогресс и знать, когда она достигнута. Это позволяет вам оценить, насколько близки вы к выполнению своей цели.</p>
                        <p class="models-content__text">3. A — Achievable (Достижимая)
                            Цель должна быть реалистичной и достижимой, учитывая ваши ресурсы и ограничения. Это означает, что вы должны оценить, возможно ли достичь этой цели с учетом ваших текущих обстоятельств.</p>
                        <p class="models-content__text">4. R — Relevant (Актуальная)
                            Цель должна быть актуальной и соответствовать вашим долгосрочным целям и ценностям. Это помогает убедиться, что вы работаете над тем, что действительно важно для вас.</p>
                        <p class="models-content__text">5. T — Time-bound (Ограниченная во времени)
                            Цель должна иметь четкие временные рамки, чтобы вы могли установить дедлайны и планировать свои действия. Это создает чувство срочности и помогает избежать прокрастинации.</p>
                        <h6 class="models-content__title">2. модель tote</h6>
                        <p class="models-content__text">Работает по принципам алгоритма. Особенно полезна для работы с новичками, так как раскладывает задачу и процесс работы над ней по полочкам. В отличие от метода SMART, здесь буквы аббревиатуры обозначают не критерии, а главы ТЗ и отчасти этапы работы над задачей:
                            T1 — Test — желаемое состояние, к которому мы стремимся, какое оно? О — Operation — какие действия мы должны делать, чтобы достигнуть результата? T2 — Test2 — по каким признакам мы поймём, что продвинулись в сторону результата? E — Exit — по каким критериям мы поймём, что результат окончательно достигнут?
                        </p>
                        <img src="/tote.webp" alt="" class="models-content__img">
                        <p class="models-content__text">Такой подход помогает исполнителю лучше понять задачу, потому что показывает, как достигнуть результата и убедиться, что получили именно то, что нужно.</p>
                        <h6 class="models-content__title">3. Модель HD-RW-RM.</h6>
                        <p class="models-content__text">Способ позволяет дать исполнителю всю необходимую информацию, не забыв ничего важного. 
                            Отчасти пересекается со SMART, но учитывает не критерии, а информационные блоки ТЗ.
                        </p>
                        <p class="models-content__text">Буквы аббревиатуры обозначают разделы шаблона, по которому удобно заполнять задачу:</p>
                        <p class="models-content__text">Header – заголовок, отвечает на вопрос «Что нужно сделать»;</p>
                        <p class="models-content__text">Description – описание, погружает в контекст задачи и детали;</p>
                        <p class="models-content__text">Result – результат, описывает критерии, по которым будем определять, что задача выполнена;</p>
                        <p class="models-content__text">Way – путь, может показывать, с чего начать, или содержать четкий алгоритм с точками контроля;</p>
                        <p class="models-content__text">Redline – время и приоритет, выставляет сроки и показывает, насколько задача важна;</p>
                        <p class="models-content__text">Motivation – мотивация, объясняет, зачем результат нужен поставщику, исполнителю и другим заинтересованным сотрудникам.</p>
                        <img src="/hd-rw.webp" alt="image" class="models-content__img">
                    </div>
                    <div class="time__btns">
                        <light-button 
                            class="time__btns-light"
                            @click="router.push('/block-3')"
                            >вернуться
                        </light-button>
                        <my-button 
                            class="time__btns-dark"
                            @click="router.push('/deleg')"
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
.models{
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

.models-content{
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