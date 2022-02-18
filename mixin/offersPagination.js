import vPagination from 'vue-plain-pagination'

export const offersPagination = {
  components: { vPagination },
  data() {
    return {
      currentPage: 1,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link',
      },
    }
  },
  methods: {
    getOffersInit(page) {
      if (this.categoryId) {
        this.categoryId = this.offerCategories?.[0]?.id
        this.$axios
          .get(
            `/api/category_offers/${this.categoryId}?lang=${this.$i18n.locale}&page=${page}&limit=9`
          )
          .then((res) => {
            this.generalOffers = res.data.data.offers
          })
      } else {
        this.$axios
          .get(`/api/offers/?lang=${this.$i18n.locale}&page=${page}&limit=9`)
          .then((res) => {
            this.offersData = res.data.data.offers
          })
      }
    },
    onChangePaging() {
      this.getOffersInit(this.currentPage)
    },
  },
}
