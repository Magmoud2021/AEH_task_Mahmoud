import StoreModulePagination from "~/utilities/StoreModulePagination"

let allDoctors = new StoreModulePagination("allDoctors", "/api/all_doctors", 9)

export const state = allDoctors.state()

export const mutations = allDoctors.mutation()

export const actions = allDoctors.actions()
