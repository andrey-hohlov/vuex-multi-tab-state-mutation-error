import Vue from 'vue'
import Vuex from 'vuex'
import createMultiTabState from 'vuex-multi-tab-state'
import { name } from '../../package.json'

Vue.use(Vuex)

export default function createStore() {
  return new Vuex.Store({
    state: () => ({}),
    mutations: {},
    actions: {},
    modules: {
      user: {
        state: () => ({
          name: '',
        }),
        mutations: {
          setName(state, name) {
            state.name = name;
          }
        },
        actions: {
          setName({ commit }, name) {
            commit('setName', name);
          },
        },
        namespaced: true,
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
