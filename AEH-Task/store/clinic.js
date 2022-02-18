export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_clinic: [],
  ar_clinic: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_clinic(state, en_clinic) {
    state.en_clinic = en_clinic
  },
  SET_ar_clinic(state, ar_clinic) {
    state.ar_clinic = ar_clinic
  },
}

export const actions = {
  async load_en_clinic({ commit, state }, clinicSlug) {
    try {
      let res = await this.$axios.get(`/api/clinic/${encodeURI(clinicSlug)}?lang=en`)
      let data = await res.data.data

      commit("SET_en_clinic", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_clinic({ commit, state }, clinicSlug) {
    try {
      let res = await this.$axios.get(`/api/clinic/${encodeURI(clinicSlug)}?lang=ar`)
      let data = await res.data.data

      commit("SET_ar_clinic", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_clinic({ commit }) {
    commit("SET_en_clinic", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_clinic({ commit }) {
    commit("SET_ar_clinic", [])
    commit("SET_ar_loaded", false)
  },
}
