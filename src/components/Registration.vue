<template>
    <div class="reg">
        <div class="container">
                <img class="reg-logo" src="/bars.svg" alt="Барс Груп">
                <form class="reg-form">
                    <input class="reg-form__alias" type="text" name="alias" id="login" placeholder="@Имя пользователя">
                    <input class="reg-form__fullname" type="text" name="fullname" id="password" placeholder="ФИО">
                    <input class="reg-form__btn" type="submit" value="Зарегистрироваться">
                </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
main {
    width: 422px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.reg {
    text-align: center;
    &-logo {
        margin-top: 60px;
        width: 121.52px;
        height: 50px;
    }
    &-form {
        margin-top: 100px;
        width: 257px;
        height: 36px;
        &__alias {
            width: 100%;
            border: 1px solid #898989;
            border-radius: 5px;
            padding: 5px;
        }
        &__fullname {
            margin-top: 10px;
            width: 100%;
            border: 1px solid #898989;
            border-radius: 5px;
            padding: 5px;
        }
        &__btn {
            margin-top: 40px;
            width: 100%;
            border-radius: 5px;
            padding: 5px;
            background-color: #191F32;
            color: #fff;
        }
    }
}
</style>