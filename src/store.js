import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balances: {
      USD: {balance: 10000000},
      ILS: {balance: 180000000},
      CLP: {balance: 550000000},
      MXN: {balance: 20000000}
    },
    administration: {
      username: "admin",
      password: "1234"
    }
  },

  mutations: {
    increment(state,[currency,amount]) {
      state.balances[currency].balance += amount;
    }
  },

})
