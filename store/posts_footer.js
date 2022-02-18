import StoreModule from '~/utilities/StoreModule'
const posts_footer = new StoreModule('posts_footer', {}, '/api/posts_footer')

export const state = posts_footer.state()

export const mutations = posts_footer.mutation()

export const actions = posts_footer.actions()

