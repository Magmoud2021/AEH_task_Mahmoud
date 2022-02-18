import StoreModule from '~/utilities/StoreModule'
const mostViewed = new StoreModule('mostViewed', {}, '/api/most_viewed')

export const state = mostViewed.state()

export const mutations = mostViewed.mutation()

export const actions = mostViewed.actions()
