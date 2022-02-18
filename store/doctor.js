export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_doctor: [],
  ar_doctor: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_doctor(state, en_doctor) {
    state.en_doctor = en_doctor
  },
  SET_ar_doctor(state, ar_doctor) {
    state.ar_doctor = ar_doctor
  },
}

export const actions = {
  async load_en_doctor({ commit, state }, doctorSlug) {
    try {
      let res = await this.$axios.get(`/api/doctor/${encodeURI(doctorSlug)}?lang=en`)
      let data = await res.data.doctor

      commit("SET_en_doctor", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_doctor({ commit, state }, doctorSlug) {
    try {
      let res = await this.$axios.get(`/api/doctor/${encodeURI(doctorSlug)}?lang=ar`)
      let data = await res.data.doctor

      commit("SET_ar_doctor", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_doctor({ commit }) {
    commit("SET_en_doctor", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_doctor({ commit }) {
    commit("SET_ar_doctor", [])
    commit("SET_ar_loaded", false)
  },
}
