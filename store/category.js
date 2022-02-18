export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_category: [],
  ar_category: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_category(state, en_category) {
    state.en_category = en_category
  },
  SET_ar_category(state, ar_category) {
    state.ar_category = ar_category
  },
}

export const actions = {
  async load_en_category({ commit, state }, categorySlug) {
    try {
      let res = await this.$axios.get(`/api/category/${encodeURI(categorySlug)}?lang=en`)
      let data = await res.data.data

      commit("SET_en_category", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_category({ commit, state }, categorySlug) {
    try {
      let res = await this.$axios.get(`/api/category/${encodeURI(categorySlug)}?lang=ar`)
      let data = await res.data.data

      commit("SET_ar_category", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_category({ commit }) {
    commit("SET_en_category", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_category({ commit }) {
    commit("SET_ar_category", [])
    commit("SET_ar_loaded", false)
  },
}
