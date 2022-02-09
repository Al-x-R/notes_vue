import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import HomePage from './pages/home';
import Users from './pages/users';
import User from './pages/user';

const routerHistory = createWebHashHistory();

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    },
    {
        path: '/users/:id',
        name: 'user',
        component: User
    }
];

const routers = createRouter({
    history: routerHistory,
    routes
});

export default routers;
