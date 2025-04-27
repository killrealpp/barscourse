<template>
    <main class="main">
        <Breadcrumbs/>
        <div class="support" v-if="!loading">
            <div class="container">
                <div class="support__inner">
                    <h4 class="support__title">Поддержка и помощь</h4>
                    <form class="support-form">
                        <label>
                            <input class="support-form__input" type="text" placeholder="Ваш вопрос" v-model="question">
                            <div class="support-form__error">
                                <p class="error"  v-if="questionError">Пожалуйста, введите ваш вопрос</p>
                            </div>
                            <my-button class="support-form__btn" @click.prevent="submitQuestion">Отправить вопрос</my-button>
                        </label>
                    </form>
                    <light-button class="support-form__page" @click="router.push('/questions')">Часто задаваемые вопросы</light-button>
                </div>
            </div>
        </div>
        <Loading v-else/>
        <Navbar/>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { useRouter } from 'vue-router';
import Loading from '@/components/Loading.vue';
import axios from 'axios'
import {ref} from 'vue'

const router = useRouter();

const question = ref('')
const questionError = ref(false);
const loading = ref(false);

const submitQuestion = async ()=>{
    let isValid = true

    if (!question.value) {
        questionError.value = true;
        isValid = false;
    } else {
        questionError.value = false;
    }

    // const tgId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
    const tg_id = 1234

    if(isValid){
        loading.value = true

        try{
            const response = await axios.post('https://f274-84-17-55-155.ngrok-free.app/api/Users/authenticate', {
                tgId: tg_id.toString()
            })
            const id = response.data.id
            console.log('мой айди', id)
            setQuestion(id)

        } catch(e){
            console.error('Ошибка при получении id',e)
        }
    }
}

const setQuestion = async(id)=>{
    try{
        const response = await axios.post('https://f274-84-17-55-155.ngrok-free.app/api/Message',{
            messageText: question.value,
            senderId: id,
            recipientId: 2
        })
        console.log('мой запрос', response.data)
    } catch(e){
        console.e('Ошибка при отправьке вопроса', e)
    } finally{
        loading.value = false;
    }
}

</script>

<style lang="scss" scoped>
.support{
    padding: 50px 0 80px;
    background-color: #fff;
    margin-bottom: auto;

    &__inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }

    &__title{
        font-size: 17px;
        font-weight: 500;
    }

    &-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        &__input{
            max-width: 257px;
            width: 100%;
            padding: 8px 11px;
            border-radius: 5px;
            border: 1px solid #898989;
            font-weight: 400;
            font-size: 17px;
        }

        &__error{
            min-height: 18px;
        }

        &__btn{
            max-width: 257px;
            padding: 8px 0;
        }

        &__page{
            padding: 8px;
        }
    }
}


</style>