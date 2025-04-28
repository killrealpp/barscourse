<template>
    <main class="main">
        <Loading v-if="loading"/>
        <Register v-if="!registerStatus && !loading" />
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Register from '@/components/Register.vue';
import Loading from '@/components/Loading.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const registerStatus = ref(false);
const loading = ref(true);

onMounted(async ()=>{
    // const userId = window.Telegram?.WebApp?.initDataUnsafe;
    // console.log('totot', userId)
    // console.log('tot chto ', window.Telegram?.WebApp?.initDataUnsafe?.user?.id)
    const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
    // const userId = 1234
    console.log(' tot',userId.toString())
    if (userId){
        try{
            const response = await axios.post('https://654f-185-77-216-6.ngrok-free.app/api/Users/authenticate', {
                tgId: userId.toString(),
            })
            console.log(response)
            console.log('tesetese', response.status)
            if (response.status === 401){
                registerStatus.value = false
            } else{
                router.push('/home');
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