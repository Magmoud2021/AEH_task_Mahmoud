import { mapState } from 'vuex'

export function fetchStoreSinglePage(statesArr = [], ClientFetch = false) {
  let computedItems = {}

  for (let stateArr of statesArr) {
    let stateNameSingular = stateArr.stateName.slice(0, stateArr.stateName.length - 1)
    const multi = {
      ...mapState(`${stateArr.stateName}`, [`en_${stateArr.stateName}`, `ar_${stateArr.stateName}`]),
      [stateNameSingular]: function () {
        ClientFetch ? this.$fetch() : ''

        return this.$i18n.locale === 'en'
          ? this[`en_${stateNameSingular}`]
          : this[`ar_${stateNameSingular}`]
      },
      [`en_${stateNameSingular}`]: function () {
        return this[`en_${stateArr.stateName}`].filter((item) => item.id === this.slugId)[0]
      },
      [`ar_${stateNameSingular}`]: function () {
        return this[`ar_${stateArr.stateName}`].filter((item) => item.id === this.slugId)[0]
      },
    }

    computedItems = {
      ...computedItems,
      ...multi
    }
  }

  return {
    data() {
      return {
        slugId: '',
      }
    },
    async fetch() {
      for (let stateArr of statesArr) {
        let stateNameSingular = stateArr.stateName.slice(0, stateArr.stateName.length - 1)

        if (!this.$store.state[stateArr.stateName].en_loaded) {
          this.$store.dispatch(`${stateArr.stateName}/load_en_loaded`)
          await this.$store.dispatch(`${stateArr.stateName}/load_en_${stateArr.stateName}`)
        }

        if (!this.$store.state[stateArr.stateName].ar_loaded) {
          this.$store.dispatch(`${stateArr.stateName}/load_ar_loaded`)
          await this.$store.dispatch(`${stateArr.stateName}/load_ar_${stateArr.stateName}`)
        }

        await this.$store.dispatch('i18n/setRouteParams', {
          ar: { slug: this[`${'ar_' + stateNameSingular}`].slug },
          en: { slug: this[`${'en_' + stateNameSingular}`].slug },
        })
      }
    },
    computed: { ...computedItems },
    created() {
      for (let stateArr of statesArr) {
        if (this.$i18n.locale === 'en') {
          const enId = this[`en_${stateArr.stateName}`].filter(
            (item) => item.slug === this.$route.params.slug
          )[0].id
          this.slugId = enId
        } else {
          const arId = this[`ar_${stateArr.stateName}`].filter(
            (item) => item.slug === this.$route.params.slug
          )[0].id
          this.slugId = arId
        }
      }
    },
  }
}
