import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useUserStore = defineStore('user', ()=>{
    const userId = ref(null)
    const fio = ref('')
    
    const setUserData = (id, userFio)=>{
        userId.value = id,
        // userId.value = 123456,
        fio.value = userFio
        
    }

    return {userId, fio, setUserData}

})