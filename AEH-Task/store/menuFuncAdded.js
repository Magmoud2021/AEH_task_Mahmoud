export const state = () => ({
  funcAdded: false
})

export const mutations = {
  set_funcAdded(state, funcAdded) {
    state.funcAdded = funcAdded
  }
}

export const actions = {
  update_funcAdded({ commit, state }) {
    if (!state.funcAdded) {
      commit("set_funcAdded", true)
    }
  }
}
