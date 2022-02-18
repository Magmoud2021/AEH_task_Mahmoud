export const updateSeo = (objName = null) => {
  return {
    mounted() {
      this.$nextTick(() => {
        let seo = this[String(objName)]

        if (seo) {
          let k = document.querySelector(`[name="keywords"]`)
          let d = document.querySelector(`[name="description"]`)
          let tt = document.querySelector(`[name="twitter:title"]`)
          let td = document.querySelector(`[name="twitter:description"]`)
          let ti = document.querySelector(`[name="twitter:image"]`)
          let tia = document.querySelector(`[name="twitter:image:alt"]`)
          let ot = document.querySelector(`[property="og:title"]`)
          let od = document.querySelector(`[property="og:description"]`)
          let oi = document.querySelector(`[property="og:image"]`)
          let ois = document.querySelector(`[property="og:image:secure_url"]`)
          let oia = document.querySelector(`[property="og:image:alt"]`)

          k.content = seo?.meta_keywords
          d.content = seo?.meta_description
          tt.content = seo?.twitter_title
          td.content = seo?.twitter_description
          ti.content = seo?.twitter_image
          tia.content = seo?.image_alt
          ot.content = seo?.facebook_title
          od.content = seo?.facebook_description
          oi.content = seo?.facebook_image
          ois.content = seo?.facebook_image
          oia.content = seo?.image_alt

          console.info('SEO Updated!')
        }
      })
    },
  }
}
