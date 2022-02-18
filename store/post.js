export const state = () => ({
  en_loaded: false,
  ar_loaded: false,
  en_post: [],
  ar_post: [],
})

export const mutations = {
  SET_en_loaded(state, en_loaded) {
    state.en_loaded = en_loaded
  },
  SET_ar_loaded(state, ar_loaded) {
    state.ar_loaded = ar_loaded
  },
  SET_en_post(state, en_post) {
    state.en_post = en_post
  },
  SET_ar_post(state, ar_post) {
    state.ar_post = ar_post
  },
}

export const actions = {
  async load_en_post({ commit, state }, postSlug) {
    try {
      let res = await this.$axios.get(`/api/post/${encodeURI(postSlug)}?lang=en`)
      let data = await res.data.data

      commit("SET_en_post", data)
      commit("SET_en_loaded", true)
    } catch (error) { }

  },
  async load_ar_post({ commit, state }, postSlug) {
    try {
      let res = await this.$axios.get(`/api/post/${encodeURI(postSlug)}?lang=ar`)
      let data = await res.data.data

      commit("SET_ar_post", data)
      commit("SET_ar_loaded", true)
    } catch (error) { }
  },
  async reset_en_post({ commit }) {
    commit("SET_en_post", [])
    commit("SET_en_loaded", false)
  },
  async reset_ar_post({ commit }) {
    commit("SET_ar_post", [])
    commit("SET_ar_loaded", false)
  },
}
