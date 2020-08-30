export const state = () => ({
    //data
    area: "",
    way: "",
    count: "",
    time: "",
    reward: "",
    comment: "",

    isLoading: false,
    ogpData: {}
});

export const mutations = {
    // methods
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
    setOGP(state,payload){
        state.ogpData=payload
    }
};

export const actions = {
    //非同期
    async setMessage({ commit }, payload) {
        console.log(payload);
        const id = await this.$axios.$post("/api/records", payload);
        if(id){
          this.$router.push(`/records/${id}/`);
        }
      },
    setLoading({ commit }, payload) {
        commit("setLoading", payload);
    }
};

export const getters = {
    message(state) {
        return state.message;
    },
    loading(state) {
        return state.loading;
    }
};
