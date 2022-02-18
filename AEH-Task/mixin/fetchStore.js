import { mapState } from 'vuex'

export function fetchStore(statesArr = [{ stateName, pagination }], clientFetch = false) {
  let computedItems = {}

  for (let stateArr of statesArr) {
    if (stateArr.single) {
      computedItems = {
        ...computedItems,
        ...mapState(`${stateArr.stateName}`, [`${stateArr.stateName}`])
      }
    } else {
      const multi = {
        ...mapState(`${stateArr.stateName}`, [`en_${stateArr.stateName}`, `ar_${stateArr.stateName}`]),
        [stateArr.stateName]: function () {
          clientFetch ? this.$fetch() : ''

          return this.$i18n.locale === 'en'
            ? this[`en_${stateArr.stateName}`]
            : this[`ar_${stateArr.stateName}`]
        },
      }

      computedItems = {
        ...computedItems,
        ...multi
      }
    }
  }

  return {
    async fetch() {
      for (let stateArr of statesArr) {
        if (stateArr.single) {
          if (!this.$store.state[stateArr.stateName].loaded) {
            if (!stateArr.pagination) {
              this.$store.dispatch(`${[stateArr.stateName]}/load_loaded`)
            }

            await this.$store.dispatch(`${[stateArr.stateName]}/load_${[stateArr.stateName]}`)
          }
        } else if (this.$i18n.locale === 'en') {
          if (!this.$store.state[stateArr.stateName].en_loaded) {
            if (!stateArr.pagination) {
              this.$store.dispatch(`${stateArr.stateName}/load_en_loaded`)
            }

            await this.$store.dispatch(`${stateArr.stateName}/load_en_${stateArr.stateName}`)
          }
        } else if (!this.$store.state[stateArr.stateName].ar_loaded) {
          if (!stateArr.pagination) {
            this.$store.dispatch(`${stateArr.stateName}/load_ar_loaded`)
          }

          await this.$store.dispatch(`${stateArr.stateName}/load_ar_${stateArr.stateName}`)
        }
      }
    },
    computed: { ...computedItems },
  }
}
