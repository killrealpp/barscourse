<template>
    <main class="main">
        <Loading v-if="loading"/>
        <Register v-if="!registerStatus && !loading" />
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Register from '../components/Register.vue';
import Loading from '../components/Loading.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const registerStatus = ref(false);
const loading = ref(true);

onMounted(async ()=>{
    // const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
    const userId = 12345
    console.log(userId)
    // надо будет убрать

    if (userId){
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                user_id: userId
            })
            console.log(response)
            if (response.data.exists){
                // пользователь есть, отправляем на главную
                router.push('/home');
            } else{
                // показываем форму регистрации
                registerStatus.value = false
            }
        } catch (error){
            console.error('Ошибка при проверке ID:', error);
        } finally{
            loading.value = false;
        }
    } else {
        loading.value = false;
    }
})


</script>

<style lang="scss"></style>