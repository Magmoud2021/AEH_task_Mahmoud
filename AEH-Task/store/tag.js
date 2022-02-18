export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_tag: [],
  ar_tag: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_tag(state, en_tag) {
    state.en_tag = en_tag
  },
  SET_ar_tag(state, ar_tag) {
    state.ar_tag = ar_tag
  },
}

export const actions = {
  async load_en_tag({ commit, state }, tagSlug) {
    try {
      let res = await this.$axios.get(`/api/tag/${encodeURI(tagSlug)}?lang=en`)
      let data = await res.data.data

      commit("SET_en_tag", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_tag({ commit, state }, tagSlug) {
    try {
      let res = await this.$axios.get(`/api/tag/${encodeURI(tagSlug)}?lang=ar`)
      let data = await res.data.data

      commit("SET_ar_tag", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_tag({ commit }) {
    commit("SET_en_tag", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_tag({ commit }) {
    commit("SET_ar_tag", [])
    commit("SET_ar_loaded", false)
  },
}
