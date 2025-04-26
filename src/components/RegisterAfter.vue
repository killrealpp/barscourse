<template>
    <div class="register-after">
        <div class="container">
            <div class="register-after__inner">
                <div class="logo">
                    <img class="logo__img" src="/logo.svg" alt="logo image">
                </div>
                <div class="welcome-form">
                    <h4 class="welcome-form__head">
                        Добро пожаловать на обучающий курс «Тим Лид» от компании БАРС Груп!
                    </h4>
                    <div class="welcome-form__footer">
                        <p class="welcome-form__footer-text">Здесь вы освоите ключевые управленческие навыки: тайм-менеджмент, лидерство, управление задачами и командой, а также подходы к эффективной коммуникации и принятию решений.</p>
                        <p class="welcome-form__footer-text">Обучение построено поэтапно — следуйте за заданиями и двигайтесь к следующему уровню, удачи!</p>
                    </div>
                </div>
                <my-button 
                    class="register-btn"
                    @click="router.push('/home')"
                >Начать обучение
                </my-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style lang="scss">
.register-after {
    padding: 71px 0 61px;
    background-color: #fff;
    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 53px;
    }
}
.welcome-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        &__head{
            max-width: 320px;
            width: 100%;
            font-weight: 500;
            font-size: 17px;
            color: #000;
        }

        &__footer{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            &-text{
                text-align: center;
            }
        }
}

.register-btn{
    padding: 8px 0;
    max-width: 257px;
}

.logo {
    &__img {
        max-width: 122px;
        width: 100%;
    }
}
</style>