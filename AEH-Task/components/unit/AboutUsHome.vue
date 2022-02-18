<template>
  <section class="about mb-5">
    <div class="container">
      <div class="row position-relative">
        <div class="col-lg-7">
          <h2 class="about__title text-capitalize">
            <b>{{ $t('about') }}</b> {{ $t('andalusiaEgypt') }}
          </h2>
          <!-- <h2 class="about__sub-title text-uppercase">{{$t('PROFESSIONALCARE')}}</h2> -->
          <p
            class="about__desc p-0 mt-4"
            :class="activeId == 0 ? 'd-block' : 'd-none'"
          >
            {{ aboutUsData.small_description }}
          </p>
        </div>
        <div class="col-lg-5">
          <img
            src="~assets/images/img_about.png"
            class="about__img w-100 mb-2"
            :class="activeId == 0 ? 'd-block' : 'd-none'"
          />
          <img
            v-for="clinic in clinicsFilters"
            :key="clinic.id"
            class="about__img w-100 mb-2"
            :src="clinic.photo"
            :class="clinic.id == activeId ? 'd-block' : 'd-none'"
            :alt="clinic.image_alt"
            :title="clinic.image_title"
          />
        </div>
      </div>
      <div class="position-relative animate-style">
        <div
          v-for="clinic in clinicsFilters"
          :key="clinic.id"
          class="row about__clinics mb-4"
        >
          <div class="col-lg-7">
            <div class="about__clinics__box p-4 position-relative">
              <h3
                role="button"
                class="p-0 m-0 d-flex justify-content-between about__clinics__box__title"
              >
                {{ clinic.name }}
                <i
                  v-if="clinic.id == activeId"
                  class="fas fa-chevron-up"
                  @click="activeId = 0"
                ></i>
                <i
                  v-if="clinic.id != activeId"
                  class="fas fa-chevron-down"
                  @click="showHide(clinic.id)"
                ></i>
              </h3>
              <div
                class="about__clinics__box__All"
                :class="clinic.id == activeId ? 'd-block' : 'd-none'"
              >
                <p class="about__clinics__box__desc">
                  {{ clinic.small_description }}
                </p>
                <nuxt-link :to="localePath(`/clinic/${clinic.slug}`)">
                  <button
                    type="button"
                    class="btn about__clinics__box__button text-white"
                  >
                    {{ $t('readMore') }}
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-none d-sm-block"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchStore } from '~/mixin/fetchStore'

export default {
  name: 'AboutUsHome',
  data() {
    return {
      showFrame: false,
      clinics: [],
      show: true,
      activeId: 0,
      animateValue: '',
      clinicsFilters: '',
      aboutUs: '',
      aboutUsData: {},
    }
  },
  async fetch() {
    this.clinics = await this.$axios.$get(
      `/api/clinics?lang=${this.$i18n.locale}`
    )
    this.clinicsFilters = this.clinics.data.slice(0, 3)
    this.aboutUs = await this.$axios.$get(
      `/api/about_us?lang=${this.$i18n.locale}`
    )
    this.aboutUsData = this.aboutUs.data
  },
  mixins: [
    fetchStore([
      {
        stateName: 'subTitles',
      },
    ]),
  ],
  methods: {
    showFrameFunc() {
      this.showFrame = true
    },
    showHide(id) {
      this.activeId = id
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/var';

$small: 991px;

// .animate-style{
//   animation: fadein 0.1s linear;
// }

@keyframes fadein {
  from {
    max-height: 0;
  }
  to {
    max-height: 200px;
  }
}

.about {
  padding: 40px 0;
  margin: 20px 0;
  height: 780px;
  @media screen and (max-width: $small) {
    height: auto;
  }
  &__title {
    font-size: 46px;
    color: #363636;
    @media screen and (max-width: $small) {
      font-size: 24px;
    }
  }
  &__sub-title {
    color: map-get($colors, accent);
    font-size: 30px;
    font-weight: 500;
    @media screen and (max-width: $small) {
      font-size: 20px;
    }
  }
  &__desc {
    color: #5e5e5e;
    font-size: 24px;
    line-height: 1.33;
    animation: fadein 0.2s linear;
    height: 283px;
    overflow: hidden;
  }
  &__img {
    // position: absolute;
    top: 0;
    height: 700px;
    @media screen and (max-width: $small) {
      position: relative;
      height: auto;
    }
  }
  &__img--default {
    margin-top: -100px;
  }
  &__clinics__box {
    background-color: #ebf3fa;
    border-radius: 5px;
    animation: fadein 2s ease-in;
    position: relative !important;
    top: -400px;
    @media screen and (max-width: $small) {
      top: 0;
    }
    &__title {
      color: map-get($colors, accent);
      font-size: 30px;
      @media screen and (max-width: $small) {
        font-size: 18px;
      }
    }
    &__desc {
      font-size: 20px;
      font-weight: 300;
      line-height: 1.6;
      color: #6a6a6b;
    }
    &__button {
      background-color: map-get($colors, accent);
      transition: all 0.9s ease 0s;
      width: 180px;
      height: 48px;
      font-size: 22px;
      font-weight: 500;
      border-radius: 12px;
    }
    &__All {
      //  animation: fadein 2s ease-in;
      animation: fadein 0.2s linear;
      transition: all 0.9s ease;
    }
  }
  .fa-chevron-down,
  .fa-chevron-up {
    display: block;
    position: absolute;
    left: 20px;
    width: 100%;
    text-align: left;
  }
  .fa-chevron-down:lang(en),
  .fa-chevron-up:lang(en) {
    right: 20px;
    left: auto;
    text-align: right;
  }
}
</style>
