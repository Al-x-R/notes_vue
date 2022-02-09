export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? 'http://localhost:8080/' : '',
};

export const app = {
    title: 'Notes',
};

export const links = [
    {
        title: 'Home',
        alias: 'home',
        url: '/',
    },
    {
        title: 'Users',
        alias: 'users',
        url: '/users',
    },
    // {
    //     title: 'About',
    //     alias: 'about',
    //     url: '/about',
    // },
];
