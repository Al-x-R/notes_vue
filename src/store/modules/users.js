const state = {
    users: [
        {
            id: 1,
            name: 'User 1',
            admin: true
        },
        {
            id: 2,
            name: 'User 2',
            admin: false
        },
        {
            id: 3,
            name: 'User 3',
            admin: true
        },
        {
            id: 4,
            name: 'User 4',
            admin: false
        },
        {
            id: 5,
            name: 'User 5',
            admin: false
        },
    ],
};
const getters = {
    getAllUsers(state) {
        return state.users;
    },
    getUserById: (state) => id => {
        return state.users.find(user => user.id === Number(id));
    },
};
const mutations = {};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};