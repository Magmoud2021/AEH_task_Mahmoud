class StoreModulePagination {
  constructor(stateName, api, dataSize = 9) {
    this.stateName = stateName
    this.api = api
    this.dataSize = dataSize
  }

  state() {
    return () => ({
      en_counter: 1,
      ar_counter: 1,
      en_loaded: false,
      ar_loaded: false,
      ['en_' + this.stateName]: [],
      ['ar_' + this.stateName]: [],
    })
  }

  mutation() {
    const enName = `SET_en_${this.stateName}`
    const enFunc = new Function(
      `return function ${enName}(state, en_${this.stateName}) {
        state.en_${this.stateName} = state.en_${this.stateName}.concat(en_${this.stateName})
      }`
    )()

    const arName = `SET_ar_${this.stateName}`
    const arFunc = new Function(
      `return function ${arName}(state, ar_${this.stateName}) {
        state.ar_${this.stateName} = state.ar_${this.stateName}.concat(ar_${this.stateName})
      }`
    )()

    return {
      SET_en_counter(state) {
        state.en_counter++
      },
      SET_ar_counter(state) {
        state.ar_counter++
      },
      SET_en_loaded(state, en_loaded) {
        state.en_loaded = en_loaded
      },
      SET_ar_loaded(state, ar_loaded) {
        state.ar_loaded = ar_loaded
      },
      [enName]: enFunc,
      [arName]: arFunc,
    }
  }

  actions() {
    const enName = `load_en_${this.stateName}`
    const enFunc = new Function(
      `return async function ${enName}({ commit, state }) {
        const res = await this.$axios.get('${this.api}?lang=en&page=' + state.en_counter)
        const en_${this.stateName} = await res.data.data
        if (Array.from(en_${this.stateName}).length < ${this.dataSize}) {
          commit("SET_en_${this.stateName}", en_${this.stateName})
          commit("SET_en_loaded", true)
        } else {
          commit("SET_en_${this.stateName}", en_${this.stateName})
          commit("SET_en_counter")
        }
      }`
    )()

    const arName = `load_ar_${this.stateName}`
    const arFunc = new Function(
      `return async function ${arName}({ commit, state }) {
        const res = await this.$axios.get('${this.api}?lang=ar&page=' + state.ar_counter)
        const ar_${this.stateName} = await res.data.data
        if (Array.from(ar_${this.stateName}).length < ${this.dataSize}) {
          commit("SET_ar_${this.stateName}", ar_${this.stateName})
          commit("SET_ar_loaded", true)
        } else {
          commit("SET_ar_${this.stateName}", ar_${this.stateName})
          commit("SET_ar_counter")
        }
      }`
    )()

    return {
      load_en_counter({ commit }) {
        commit('SET_en_counter')
      },
      load_ar_counter({ commit }) {
        commit('SET_ar_counter')
      },
      load_en_loaded({ commit }) {
        commit('SET_en_loaded', true)
      },
      load_ar_loaded({ commit }) {
        commit('SET_ar_loaded', true)
      },
      [enName]: enFunc,
      [arName]: arFunc,
    }
  }
}

export default StoreModulePagination
