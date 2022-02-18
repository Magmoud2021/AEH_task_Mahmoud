import axios from "axios";
export const state = () => ({
  setting: {}
})

export const getters = {
  Setting:(state) => {
    return state.setting
  }
}
export const mutations = {
  SetSettings (state, payload) {
    state.setting = payload
  },
}
export  const actions = {
  async nuxtServerInit(context){
    await context.dispatch('SET_SETTING');
  },
  async SET_SETTING(context,payload){
    let getData = await this.$axios.get(`/api/settings`)
    payload = getData.data.settings;
    context.commit('SetSettings',payload);
  },
}
