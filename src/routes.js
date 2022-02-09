import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import HomePage from './pages/home'

const routerHistory = createWebHashHistory()

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
]

const routers = createRouter({
    history: routerHistory,
    routes
})

export default routers
