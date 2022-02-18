export const state = () => ({
  bookingWithLead: null
})


export const mutations = {
  SET_bookingWithLead(state, bookingWithLead) {
    state.bookingWithLead = bookingWithLead
  }
}

export const actions = {
  async load_bookingWithLead({ commit }, offerObj) {
    let res = await this.$axios.post('/api/booking_with_lead', offerObj)
    let data = await res.data.url

    await commit("SET_bookingWithLead", data)
  }
}
