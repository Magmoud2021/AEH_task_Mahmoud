import StoreModule from '~/utilities/StoreModule'
const testimonials = new StoreModule('testimonials', {}, '/api/testimonials')

export const state = testimonials.state()

export const mutations = testimonials.mutation()

export const actions = testimonials.actions()
