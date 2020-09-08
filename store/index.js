export const state = () => ({
    //data
    area: "",
    way: "",
    count: "",
    time: "",
    reward: "",
    comment: "",

    isLoading: false,
    ogpData: {},
    AllData: {},
});

export const mutations = {
    setMessage(state, payload) {
            state.comment = payload.messsage,
            state.area = payload.area,
            state.way = payload.way,
            state.count = payload.count,
            state.time = payload.time,
            state.reward = payload.reward
    },
    setLoading(state, payload) {
        state.isLoading = payload;
    },
    setOGP(state, payload) {
        state.ogpData = payload;
    },
    setAll(state, payload) {
        state.AllData = payload;
    },
};

export const actions = {
    //非同期
    async setMessage({ commit }, payload) {
        const id = await this.$axios.$post("/api/records", payload);
        if (id) {
            //遷移
            this.$router.push(`/record/${id}/`);
        }
    },
    async getAll({ commit }, payload) {
        const records = await this.$axios.$get("/api/records");
        commit("setAll", records);
    },
    setLoading({ commit }, payload) {
        commit("setLoading", payload);
    },
    async getOPG({ commit }, payload) {
        const data = await this.$axios.$get(`/api/records/${payload}`);
        commit("setOGP", data);
    },
};

export const getters = {
    message(state) {
        return state.message;
    },
    loading(state) {
        return state.loading;
    },
    ogpData(state) {
        return state.ogpData;
    },
    AllData(state) {
        return state.AllData;
    }
};
