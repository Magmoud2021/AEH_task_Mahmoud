export const state = () => ({
    ['en_hospitals']: {},
    ['ar_hospitals']: {},
})

export const mutations = {
    SET_en_hospitals: function(state, en_hospitals) {
        state.en_hospitals = en_hospitals
    },
    SET_ar_hospitals: function(state, ar_hospitals) {
        state.ar_hospitals = ar_hospitals
    },
}

export const actions = {
    load_en_hospitals: async function({ commit }) {
        const res = await this.$axios.get("https://booking.andalusiaegypt.com/OnlineBookingService/api/BusinessUintContract/GetHospitalData?countryId=1&isArabic=false")
        const en_hospitals = await res.data.HospitalList
        commit("SET_en_hospitals", en_hospitals)
    },
    load_ar_hospitals: async function({ commit }) {
        const res = await this.$axios.get("https://booking.andalusiaegypt.com/OnlineBookingService/api/BusinessUintContract/GetHospitalData?countryId=1&isArabic=true")
        const ar_hospitals = await res.data.HospitalList
        commit("SET_ar_hospitals", ar_hospitals)
    },
}