import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const types = {
  SET_AUTHORIZATION: "SET_AUTHORIZATION",
  SET_USER: "SET_USER"
}

const state = {
  isAuthorization: false,
  user: {}
}

const getters = {
  isAuthorization: state => state.isAuthorization,
  user: state => state.user
}

const mutations = {
  [types.SET_AUTHORIZATION](state,isAuthorization){
    if(isAuthorization){
      state.isAuthorization = true;
    }else{
      state.isAuthorization = false;
    }
  },

  [types.SET_USER](state,user){
    if(user){
      state.user = user;
    }else{
      state.user = {};
    }
  }
}

const actions = {
  setAuthorization: ({commit},isAuthorization) => {
    commit(types.SET_AUTHORIZATION,isAuthorization);
  },
  setUser: ({commit},user) => {
    commit(types.SET_USER,user);
  },
  clearCurrentState: ({commit}) => {
    commit(types.SET_AUTHORIZATION,false);
    commit(types.SET_USER,null)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

