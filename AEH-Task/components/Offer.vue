<template>
  <div class="offer">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center my-4">
          <div class="offer__heading">
            {{ $t('offersHeading') }}
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="offer__img">
            <img
              :src="bannerOfferFinal.image"
              :alt="bannerOfferFinal.image_alt"
              :title="bannerOfferFinal.image_title"
              class="offer__img img-fluid"
            />
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="offer__description">
            <div>
              <h2>{{ bannerOfferFinal.title }}</h2>
              
              <div class="offer__description--small-dec">
                {{ bannerOfferFinal.small_description }}
              </div>
              <div class="offer__buttons">
                <span
                  class="offer__buttons--book offer__buttons--shared d-none"
                  @click="showModal(bannerOfferFinal)"
                  >{{ $t('getoffer') }}</span
                >
                <nuxt-link
                  :to="localePath(`/offer/${bannerOfferFinal.slug}`)"
                  class="offer__buttons--shared offer__buttons--view-more btn-main"
                  >{{ $t('details') }}
                </nuxt-link>
                <nuxt-link
                  :to="
                    $i18n.locale === 'en'
                      ? localePath('/offers')
                      : localePath(encodeURI('/العروض'))
                  "
                  class="offer__buttons--shared offer__buttons--view-more"
                  >{{ $t('viewmore') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchStore } from '~/mixin/fetchStore'
export default {
  name: 'Offer',
  mixins: [
    fetchStore([
      {
        stateName: 'bannerOffer',
      },
    ]),
  ],
  computed: {
    bannerOfferFinal() {
      return this.bannerOffer.length > 0 ? this.bannerOffer[0] : {}
    },
  },
  methods: {
    // showModal(offer) {
    //   const offerModal = document.getElementById('exampleModalLong')
    //   // let offerInput = document.getElementById('offer-input')
    //   localStorage.setItem('offer', offer.title)
    //   offerModal.classList.add('show')
    // },
  },
}
</script>

<style scoped lang="scss">
.offer {
  background: url('~/assets/images/bg/img_consultation_banner.png') no-repeat
    center bottom;
  background-size: cover;
  padding-bottom: 5rem;

  &__heading {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.48px;
    color: #fff;
    text-transform: uppercase;
    @media (max-width: 992px) {
      text-align: center;
    }
  }

  &__img {
    img {
      width: 309px;
      height: 309px;
      object-fit: cover;
      border-radius: 24px;
      margin: 0 auto;
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  &__description {
    color: #fff;
    h2 {
      font-weight: bold;
      @media (max-width: 992px) {
        text-align: center;
        margin: 1rem 0;
      }
    }
    p {
      text-transform: capitalize;
    }
    &--small-dec {
      font-size: 20px;
      margin: 2rem 0;
      line-height: 1.8;
    }
  }

  &__buttons {
    margin-top: 2rem;
    &--shared {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 210px;
      height: 65px;
      border-radius: 12px;
      font-size: 24px;
      font-weight: 500;
      transition: all ease-in-out 0.3s;
      cursor: pointer;
      margin-left: 1rem;
      text-transform: capitalize;
      @media (max-width: 992px) {
        margin: 0.5rem 0;
      }
    }
    &--book {
      background: #f1f6fa;
      color: #1474be;
      border: 2px solid transparent;
      &:hover {
        background-color: transparent;
        border: 2px solid #f1f6fa;
        color: #f1f6fa;
      }
    }
    &--view-more {
      border: 2px solid #f1f6fa;
      color: #f1f6fa;
      &:hover {
        background-color: #f1f6fa;
        border: 2px solid #f1f6fa;
        color: #1474be;
      }
    }
    @media (max-width: 992px) {
      text-align: center;
    }
  }
}
html:lang(en) {
  .offer {
    &__buttons {
      &--shared {
        margin-left: 0;
        margin-right: 1rem;
      }
    }
  }
}
.btn-main {
  background-color: #1474be;
}
</style>
