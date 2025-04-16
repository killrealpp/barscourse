<template>
    <div class="register">
        <div class="container">
            <div class="register__inner">
                <div class="logo">
                    <img class="logo__img" src="/logo.svg" alt="logo image">
                </div>
                <form class="register-form">
                    <label>
                        <input class="register-form__username" type="text" placeholder="@Имя пользователя">
                    </label>
                    <label>
                        <input class="register-form__fio" type="text" placeholder="ФИО">
                    </label>
                    <button class="register-form__btn">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">

.register{
    padding: 51px 0 272px;

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