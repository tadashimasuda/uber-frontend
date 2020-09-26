export const state = () => ({
    errors:{}
});

export const mutations = {
    set_error(state,payload){
        state.errors = payload;
    }
};

export const actions = {
    getErrors(state){
        return state.errors;
    }
};
export const getters = {

};