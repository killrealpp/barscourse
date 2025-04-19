<template>
    <div v-if="!isRegistered" class="register">
        <div class="container">
            <div class="register__inner">
                <div class="logo">
                    <img class="logo__img" src="/logo.svg" alt="logo image">
                </div>
                <form class="register-form">
                    <label>
                        <input 
                        class="register-form__username" 
                        type="text" 
                        placeholder="@Имя пользователя"
                        v-model="username"
                        >
                        <p class="usernameError error" v-if="usernameError">Пожалуйста, введите ваше ФИО</p>
                    </label>
                    <label>
                        <input 
                        class="register-form__fio" 
                        type="text" 
                        placeholder="ФИО"
                        v-model="fio"
                        >
                        <p class="fioError error" v-if="fioError">Пожалуйста, введите ваше ФИО</p>
                    </label>
                    <button 
                        class="register-form__btn"
                        @click.prevent="submitForm"
                        >Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    </div>
    <RegisterAfter v-if="isRegistered"/>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import { useUserStore } from '../stores/userStore';
import RegisterAfter from './RegisterAfter.vue';

const userStore = useUserStore()
const fio = ref('')
const username = ref('')
const fioError = ref(false);
const usernameError = ref(false);
const isRegistered = ref(false);

const submitForm = async ()=>{
    let isValid = true

    if (!fio.value) {
        fioError.value = true;
        isValid = false;
    } else {
        fioError.value = false;
    }

    if (!username.value) {
        usernameError.value = true;
        isValid = false;
    } else {
        usernameError.value = false;
    }
    
    // const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
    const userId = 12345
    // надо будет убрать
    
    if(isValid && userId){
        userStore.setUserData(userId, username.value, fio.value)
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
                user_id: userId,
                userName: username.value,
                fio: fio.value
            })
            console.log('клик по кнопке', response)
            isRegistered.value = true;
        } catch(error){
            console.error('Ошибка при отправке данных', error)
        }
    } else{
        alert('не удалось получить ID пользователя')
    }

}


</script>

<style lang="scss">

.register{
    padding: 71px 0 218px;

    &__inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 103px;
    }

    &-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;

        &__username, .register-form__fio{
            max-width: 257px;
            width: 100%;
            padding: 8px 11px;
            border-radius: 5px;
            border: 1px solid #898989;
            font-weight: 400;
            font-size: 17px;
        }

        &__btn{
            padding: 8px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 257px;
            width: 100%;
            border-radius: 5px;
            background-color: #191F32;
            color: #fff;
            font-weight: 400;
            font-size: 17px;
        }
    }
}


.logo{
    &__img{
        max-width: 122px;
        width: 100%;
    }
}
</style>