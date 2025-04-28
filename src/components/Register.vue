<template>
    <div v-if="!loading">
        <div v-if="!isRegistered" class="register">
            <div class="container">
                <div class="register__inner">
                    <div class="logo">
                        <img class="logo__img" src="/logo.svg" alt="logo image">
                    </div>
                    <form class="register-form">
                        <label>
                            <input class="register-form__fio" type="text" placeholder="ФИО" v-model="fio">
                            <div class="register-form__error">
                                <p class="fioError error" v-if="fioError">Пожалуйста, введите ваше ФИО</p>
                            </div>
                        </label>
                        <my-button class="register-form__btn" @click.prevent="submitForm">Зарегистрироваться
                        </my-button>
                    </form>
                </div>
            </div>
        </div>
        <RegisterAfter v-if="isRegistered" />
    </div>
    <Loading v-else/>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '../stores/userStore';
import RegisterAfter from '@/components/RegisterAfter.vue';
import Loading from '@/components/Loading.vue';

const userStore = useUserStore()
const fio = ref('')
const fioError = ref(false);
const isRegistered = ref(false);
const loading = ref(false)

const submitForm = async () => {
    let isValid = true

    if (!fio.value) {
        fioError.value = true;
        isValid = false;
    } else {
        fioError.value = false;
    }

    const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
    // const userId = 1234567
    // надо будет убрать
    // надо будет убрать

    if (isValid && userId) {
        loading.value = true
        userStore.setUserData(userId, fio.value)
        try {
            const response = await axios.post('https://f274-84-17-55-155.ngrok-free.app/api/Users', {
                name: fio.value,
                surname: "student",
                tgId: "userId",
                roleId: 2
            })
            console.log('клик по кнопке', response)
            isRegistered.value = true;
        } catch (error) {
            console.error('Ошибка при отправке данных', error)
        } finally {
            loading.value = false
        }
    }
}


</script>

<style lang="scss">
.register {
    padding: 71px 0 218px;

    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 103px;
    }

    &-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        &__fio {
            max-width: 257px;
            width: 100%;
            padding: 8px 11px;
            border-radius: 5px;
            border: 1px solid #898989;
            font-weight: 400;
            font-size: 17px;
        }

        &__error {
            min-height: 18px;
        }

        &__btn {
            max-width: 257px;
            padding: 8px 0;
        }
    }
}


.logo {
    &__img {
        max-width: 122px;
        width: 100%;
    }
}
</style>