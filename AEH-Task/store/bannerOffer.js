import StoreModule from '~/utilities/StoreModule'
const bannerOffer = new StoreModule('bannerOffer', {}, '/api/banneroffer')

export const state = bannerOffer.state()

export const mutations = bannerOffer.mutation()

export const actions = bannerOffer.actions()
