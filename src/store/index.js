import Vue from 'vue'
import Vuex from 'vuex'
import createMultiTabState from 'vuex-multi-tab-state'
import { name } from '../../package.json'

Vue.use(Vuex)

export default function createStore() {
  return new Vuex.Store({
    state: {
      user: {
        name: '',
      },
    },
    mutations: {
      setUserName(state, name) {
        state.user.name = name;
      }
    },
    actions: {
      setUserName({ commit }, name) {
        commit('setUserName', name);
      },
    },
    plugins: [
      createMultiTabState({
        statesPaths: [
          'user.name',
        ],
        key: name,
      }),
    ],
    strict: process.env.NODE_ENV !== 'production',
  });
}
