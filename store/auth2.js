export const state = () => ({
    user: {},
    islogin:false,
});

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    },
    is_login(state){
        state.islogin =true;
    }
};

export const actions = {
    async login({ commit }, { email, password}){
            this.$axios.$post('/api/login',{email,password}).then(response=>{
                //tokenをcookieに入れる->cookieを参照にしてuserget
                console.log(response);
                window.localStorage.setItem('token',response.token);
                localStorage.setItem("auth", true);
                commit('is_login',true);
            }).catch(err =>{
                console.log('失敗'.err);
        })
    },
    async getUser(){
        this.$axios.$get('/api/user').then(response=>{
            console.log(response);
        }).catch(err => {
            console.log('41失敗')
        })
    },
    async logout({ commit }, { token }) {
        console.log(token);
        await this.$axios.$post('/api/logout',null, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            console.log(response);
            localStorage.removeItem("token");
            this.$router.push(`/`);
        });
        commit("SET_USER", null);
    },

};

export const getters = {};
