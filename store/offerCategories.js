import StoreModule from '~/utilities/StoreModule'
const offerCategories = new StoreModule('offerCategories', {}, '/api/offer_categories')

export const state = offerCategories.state()

export const mutations = offerCategories.mutation()

export const actions = offerCategories.actions()
