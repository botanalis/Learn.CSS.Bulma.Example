import Vue from "vue";
import Vuex from "vuex";

import Auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: false,
    modules: {
        auth: Auth
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {}
});
