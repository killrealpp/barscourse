import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/main.scss'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component =>{
    app.component(component.name, component)
})

app
    .use(createPinia())
    .use(router)
    .mount('#app')
