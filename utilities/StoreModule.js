class StoreModule {
  constructor(stateName, stateValue, api, single = false, getData = true) {
    this.stateName = stateName
    this.stateValue = stateValue
    this.api = api
    this.single = single
    this.getData = getData
  }

  state() {
    if (this.single) {
      return () => ({
        loaded: false,
        [this.stateName]: this.stateValue,
      })
    }

    return () => ({
      en_loaded: false,
      ar_loaded: false,
      ['en_' + this.stateName]: this.stateValue,
      ['ar_' + this.stateName]: this.stateValue,
    })
  }

  mutation() {
    if (this.single) {
      const name = `SET_${this.stateName}`
      const func = new Function(
        `return function ${name}(state, ${this.stateName}) {
        state.${this.stateName} = ${this.stateName}
      }`
      )()

      return {
        SET_loaded(state, loaded) {
          state.loaded = loaded
        },
        [name]: func,
      }
    }

    const enName = `SET_en_${this.stateName}`
    const enFunc = new Function(
      `return function ${enName}(state, en_${this.stateName}) {
        state.en_${this.stateName} = en_${this.stateName}
      }`
    )()

    const arName = `SET_ar_${this.stateName}`
    const arFunc = new Function(
      `return function ${arName}(state, ar_${this.stateName}) {
        state.ar_${this.stateName} = ar_${this.stateName}
      }`
    )()

    return {
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
    if (this.single) {
      const name = `load_${this.stateName}`
      const func = new Function(
        `return async function ${name}({ commit }) {
        const res = await this.$axios.get('${this.api}')
        const ${this.stateName} = ${this.getData} ? res.data.data : res.data
        commit('SET_${this.stateName}', ${this.stateName})
      }`
      )()

      return {
        load_loaded({ commit }) {
          commit(`SET_loaded`, true)
        },
        [name]: func,
      }
    }

    const enName = `load_en_${this.stateName}`
    const enFunc = new Function(
      `return async function ${enName}({ commit }) {
        const res = await this.$axios.get('${this.api}?lang=en')
        const en_${this.stateName} = ${this.getData} ? res.data.data : res.data
        commit('SET_en_${this.stateName}', en_${this.stateName})
      }`
    )()

    const arName = `load_ar_${this.stateName}`
    const arFunc = new Function(
      `return async function ${arName}({ commit }) {
        const res = await this.$axios.get('${this.api}?lang=ar')
        const ar_${this.stateName} = ${this.getData} ? res.data.data : res.data
        commit('SET_ar_${this.stateName}', ar_${this.stateName})
      }`
    )()

    return {
      load_en_loaded({ commit }) {
        commit(`SET_en_loaded`, true)
      },
      load_ar_loaded({ commit }) {
        commit(`SET_ar_loaded`, true)
      },
      [enName]: enFunc,
      [arName]: arFunc,
    }
  }
}

export default StoreModule
