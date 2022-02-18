import StoreModule from '~/utilities/StoreModule'
const sliders = new StoreModule('sliders', {}, '/api/sliders')

export const state = sliders.state()

export const mutations = sliders.mutation()

export const actions = sliders.actions()
