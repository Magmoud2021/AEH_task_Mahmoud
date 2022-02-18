export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_tags: [],
  ar_tags: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_tags(state, en_tags) {
    state.en_tags = en_tags
  },
  SET_ar_tags(state, ar_tags) {
    state.ar_tags = ar_tags
  },
}

export const actions = {
  async load_en_tags({ commit, state }, postSlug) {
    try {
      let res = await this.$axios.get(`/api/post/${encodeURI(postSlug)}?lang=en`)
      let data = await res.data.data.tag

      commit("SET_en_tags", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_tags({ commit, state }, postSlug) {
    try {
      let res = await this.$axios.get(`/api/post/${encodeURI(postSlug)}?lang=ar`)
      let data = await res.data.data.tag

      commit("SET_ar_tags", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_tags({ commit }) {
    commit("SET_en_tags", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_tags({ commit }) {
    commit("SET_ar_tags", [])
    commit("SET_ar_loaded", false)
  },
}
