import StoreModule from '~/utilities/StoreModule'
const topOffers = new StoreModule('topOffers', {}, '/api/topoffers')

export const state = topOffers.state()

export const mutations = topOffers.mutation()

export const actions = topOffers.actions()
