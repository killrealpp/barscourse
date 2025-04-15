import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useCountStore = defineStore('count', ()=>{

    const counter = ref(0)


    return{
        counter
    }
})