import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useUserStore = defineStore('user', ()=>{
    const userId = ref(null)
    const username = ref('')
    const fio = ref('')
    
    const setUserData = (id, userName, userFio)=>{
        // userId.value = id,
        userId.value = 123456,
        username.value = userName,
        fio.value = userFio
    }

    return {userId, fio, setUserData}

})