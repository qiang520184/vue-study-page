import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/HomeView.vue'

import List from '../views/list.vue'

import Card from '../views/card.vue'

import Demo from '../views/demo.vue'

import Demo2 from '../views/demo2.vue'


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
        },
        {
            
            path: '/list',
            name: 'list',
            component: List
        },
        {
            
            path: '/card',
            name: 'card',
            component: Card
        },
        {
            
            path: '/demo',
            name: 'demo',
            component: Demo
        },
        {
            
            path: '/demo2',
            name: 'demo2',
            component: Demo2
        },
    ]
})

export default router
