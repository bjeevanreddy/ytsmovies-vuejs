import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";
import movies from '../modules/movies';
import series from '../modules/series';
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
        movies,
        series
    }
})