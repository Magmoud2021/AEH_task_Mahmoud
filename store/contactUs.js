import StoreModule from '~/utilities/StoreModule'
const contactUs = new StoreModule('contactUs', {}, '/api/contacts')

export const state = contactUs.state()

export const mutations = contactUs.mutation()

export const actions = contactUs.actions()
