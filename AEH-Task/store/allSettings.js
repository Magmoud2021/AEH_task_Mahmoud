import StoreModule from '~/utilities/StoreModule'
const allSettings = new StoreModule('allSettings', {}, '/api/settings', true)

export const state = allSettings.state()

export const mutations = allSettings.mutation()

export const actions = allSettings.actions()
