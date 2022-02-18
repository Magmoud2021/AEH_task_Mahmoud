import StoreModule from '~/utilities/StoreModule'
const doctors = new StoreModule('doctors', {}, '/api/doctors')

export const state = doctors.state()

export const mutations = doctors.mutation()

export const actions = doctors.actions()
