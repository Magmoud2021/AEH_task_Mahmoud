import StoreModule from '~/utilities/StoreModule'
const services = new StoreModule('services', {}, '/api/services')

export const state = services.state()

export const mutations = services.mutation()

export const actions = services.actions()
