import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

createApp(App)
.use(router)


/* .component('dificulty', {
    script: this.dificulty,

    props: {
        dificulty: {
            type: String,
            default: '',
        },
    },
}) */


.mount('#app')