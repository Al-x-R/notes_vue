const state = {
    notes: [],
};
const getters = {
    getNotes(state) {
            return state.notes;
        }
};

const mutations = {
    setNote(state, payload) {
        state.notes.push(payload);
    },
    deleteNote(state, idx) {
        state.notes.splice(idx, 1);
    }
};

const actions = {
    setNoteAction(context, payload) {
        context.commit('setNote', payload);
    },
    deleteNoteAction(context, idx) {
        context.commit('deleteNote', idx);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};