import StoreModule from '~/utilities/StoreModule'
const branches = new StoreModule('branches', {}, '/api/branches')

export const state = branches.state()

export const mutations = branches.mutation()

export const actions = branches.actions()
