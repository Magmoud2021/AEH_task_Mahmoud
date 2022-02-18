import StoreModule from '~/utilities/StoreModule'
const subTitles = new StoreModule('subTitles', {}, '/api/sub_titles')

export const state = subTitles.state()

export const mutations = subTitles.mutation()

export const actions = subTitles.actions()
