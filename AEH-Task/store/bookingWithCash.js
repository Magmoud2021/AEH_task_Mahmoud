export const state = () => ({
  bookingWithCash: null
})


export const mutations = {
  SET_bookingWithCash(state, bookingWithCash) {
    state.bookingWithCash = bookingWithCash
  }
}

export const actions = {
  async load_bookingWithCash({ commit }, offerObj) {
    let res = await this.$axios.post('/api/booking_with_lead?payment=0', offerObj)
    let data = await res.data

    await commit("SET_bookingWithCash", data)
  }
}
