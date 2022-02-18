import StoreModule from '~/utilities/StoreModule'
const aboutUs = new StoreModule('aboutUs', {}, '/api/about_us')

export const state = aboutUs.state()

export const mutations = aboutUs.mutation()

export const actions = aboutUs.actions()
