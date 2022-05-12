import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Response from '@/views/Response.vue'

const router = createRouter({
    
    history: createWebHistory(),

    routes: [
        { path: '/', name:'Home', component: Home },
        { path: '/category', name:'Category', component: Category },
        { path: '/response', name:'Response', component: Response },
    ]
})

export default router