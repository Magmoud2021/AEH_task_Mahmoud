export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_service: [],
  ar_service: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_service(state, en_service) {
    state.en_service = en_service
  },
  SET_ar_service(state, ar_service) {
    state.ar_service = ar_service
  },
}

export const actions = {
  async load_en_service({ commit, state }, serviceSlug) {
    try {
      let res = await this.$axios.get(`/api/service/${encodeURI(serviceSlug)}?lang=en`)
      let data = await res.data.data

      commit("SET_en_service", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_service({ commit, state }, serviceSlug) {
    try {
      let res = await this.$axios.get(`/api/service/${encodeURI(serviceSlug)}?lang=ar`)
      let data = await res.data.data

      commit("SET_ar_service", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_service({ commit }) {
    commit("SET_en_service", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_service({ commit }) {
    commit("SET_ar_service", [])
    commit("SET_ar_loaded", false)
  },
}
