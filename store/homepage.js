import StoreModule from '~/utilities/StoreModule'
const homepage = new StoreModule('homepage', {}, '/api/homepage')

export const state = homepage.state()

export const mutations = homepage.mutation()

export const actions = homepage.actions()
