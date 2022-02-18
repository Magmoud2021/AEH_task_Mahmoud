export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_offer: [],
  ar_offer: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_offer(state, en_offer) {
    state.en_offer = en_offer
  },
  SET_ar_offer(state, ar_offer) {
    state.ar_offer = ar_offer
  },
}

export const actions = {
  async load_en_offer({ commit, state }, offerSlug) {
    try {
      let res = await this.$axios.get(`/api/offer/${encodeURI(offerSlug)}?lang=en`)
      let data = await res.data.data

      commit("SET_en_offer", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_offer({ commit, state }, offerSlug) {
    try {
      let res = await this.$axios.get(`/api/offer/${encodeURI(offerSlug)}?lang=ar`)
      let data = await res.data.data

      commit("SET_ar_offer", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_offer({ commit }) {
    commit("SET_en_offer", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_offer({ commit }) {
    commit("SET_ar_offer", [])
    commit("SET_ar_loaded", false)
  },
}
