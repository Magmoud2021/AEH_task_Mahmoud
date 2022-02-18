import StoreModule from '~/utilities/StoreModule'
const offers = new StoreModule('offers', {}, '/api/offers', false, false)

export const state = offers.state()

export const mutations = offers.mutation()

export const actions = offers.actions()
