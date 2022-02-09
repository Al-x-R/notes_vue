import { createStore } from 'vuex';

import notes from './modules/notes';
import users from './modules/users';

const store = createStore({
    modules: {
        notes,
        users
    },
});

export default store;