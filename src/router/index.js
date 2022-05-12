import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Answer from '@/views/Answer.vue'

const router = createRouter({
    
    history: createWebHistory(),

    routes: [
        { path: '/', name:'Home', component: Home },
        { path: '/category', name:'Category', component: Category },
        { path: '/answer', name:'Answer', component: Answer },
    ]
})

export default router