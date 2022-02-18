import StoreModule from '~/utilities/StoreModule'
const clinics = new StoreModule('clinics', {}, '/api/clinics')

export const state = clinics.state()

export const mutations = clinics.mutation()

export const actions = clinics.actions()
