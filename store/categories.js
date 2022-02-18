import StoreModule from '~/utilities/StoreModule'
const categories = new StoreModule('categories', {}, '/api/categories')

export const state = categories.state()

export const mutations = categories.mutation()

export const actions = categories.actions()
