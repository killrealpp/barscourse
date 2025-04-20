<template>
    <div class="register-after">
        <div class="container">
            <div class="register-after__inner">
                <div class="logo">
                    <img class="logo__img" src="/logo.svg" alt="logo image">
                </div>
                <div class="welcome-form">
                    <p class="welcome-form__head">
                        Добро пожаловать на обучающий курс «Тим Лид» от компании БАРС Груп!
                    </p>
                    <p class="welcome-form__footer">
                        Здесь вы освоите ключевые управленческие навыки: тайм-менеджмент, лидерство, управление задачами и командой, а также подходы к эффективной коммуникации и принятию решений.
                        <br>
                        Обучение построено поэтапно — следуйте за заданиями и двигайтесь к следующему уровню, удачи!
                    </p>
                    <my-button class="register-btn">Начать обучение
                    </my-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.register-after {
    padding: 71px 0 218px;
    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.welcome-form {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    &__head {
        max-width: 257px;
        width: 100%;
        font-size: 17px;
        font-weight: 500;
    }
    &__footer {
        max-width: 257px;
        width: 100%;
        font-size: 17px;
    }
}

.logo {
    &__img {
        max-width: 122px;
        width: 100%;
    }
}
</style>