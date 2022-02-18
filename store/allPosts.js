import StoreModulePagination from "~/utilities/StoreModulePagination"

let allPosts = new StoreModulePagination("allPosts", "/api/all_posts", 3)

export const state = allPosts.state()

export const mutations = allPosts.mutation()

export const actions = allPosts.actions()
