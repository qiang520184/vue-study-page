import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/HomeView.vue'

import List from '../views/list.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/vue-ui',
            name: 'vue-ui',
            component: () => import('../views/VueUi.vue')
        }, {
            
            path: '/list',
            name: 'list',
            component: List
        }
    ]
})

export default router
