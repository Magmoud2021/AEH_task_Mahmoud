export function singlePageValidate(stateName) {
  return {
    async validate({ app, params, store }) {
      let thePromise = new Promise(async (resolve, rejected) => {
        if (app.i18n.locale === 'en') {
          if (!store.state[stateName].en_loaded) {
            store.dispatch(`${stateName}/load_en_loaded`)
            await store.dispatch(`${stateName}/load_en_${stateName}`)
            resolve(store.state[stateName][`en_${stateName}`])
          } else {
            resolve(store.state[stateName][`en_${stateName}`])
          }
        } else {
          if (!store.state[stateName].ar_loaded) {
            store.dispatch(`${stateName}/load_ar_loaded`)
            await store.dispatch(`${stateName}/load_ar_${stateName}`)
            resolve(store.state[stateName][`ar_${stateName}`])
          } else {
            resolve(store.state[stateName][`ar_${stateName}`])
          }
        }
      })

      return thePromise.then((data) => {
        return data.some((item) => item.slug === params.slug)
      })
    }
  }
}
