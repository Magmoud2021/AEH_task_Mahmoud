import StoreModule from '~/utilities/StoreModule'
const socialMedia = new StoreModule('socialMedia', {}, '/api/socialmedia', true)

export const state = socialMedia.state()

export const mutations = socialMedia.mutation()

export const actions = socialMedia.actions()
