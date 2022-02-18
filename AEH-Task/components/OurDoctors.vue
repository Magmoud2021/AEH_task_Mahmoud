<template>
  <div class="our-doctors">
    <div class="container">
      <SectionHeadline
        :small-tite="$t('bestDoctors')"
        :title="$t('ourQualifiedDoctors')"
        :text="subTitles.doctors_subtitle"
      />
      <client-only>
        <splide ref="doctorsSlider" class="splide" :options="splideOptions">
          <splide-slide v-for="doctor in doctors" :key="doctor.id">
            <DoctorUnit :doctor-obj="doctor" />
          </splide-slide>
        </splide>
      </client-only>
      <div class="wrapper text-center has__mt--doctors">
        <div
          class="nav-item nav-item--btn nav-item--normal nav-item--doctors m-0"
        >
          <nuxt-link
            :to="localePath('/doctors')"
            class="nav-link nav-link--btn nav-link--normal nav-link--doctors"
          >
            {{ $t('viewAllDoctors') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchStore } from '~/mixin/fetchStore'
import { splideUpdate } from '~/mixin/splideUpdate'
import SectionHeadline from '~/components/unit/SectionHeadline'
import DoctorUnit from '~/components/unit/Doctor'
export default {
  name: 'OurDoctors',
  components: { SectionHeadline, DoctorUnit },
  mixins: [
    fetchStore([
      {
        stateName: 'subTitles',
      },
      {
        stateName: 'doctors',
      },
    ]),
    splideUpdate('doctors', 'doctorsSlider'),
  ],
  data() {
    return {
      splideOptions: {
        rewind: true,
        perPage: 4,
        direction: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
        arrows: false,
        gap: '40px',
        classes: {
          pagination: 'splide__pagination doctors__pagination',
        },
        breakpoints: {
          992: {
            perPage: 2,
          },
          600: {
            perPage: 1,
            padding: {
              right: '5rem',
              left: '5rem',
            },
          },
          425: {
            perPage: 1,
            padding: {
              right: '0',
              left: '0',
            },
          },
        },
      },
    }
  },
}
</script>

<style scoped lang="scss">
.our-doctors {
  padding-top: 2rem;
  padding-bottom: 40px;
}

.edit-title {
  padding-bottom: 0 !important;
}

.small-description {
  width: 75%;
  margin: 2rem auto 0 auto;
  text-align: center;
  line-height: 1.8;
  color: #737373;
}

.splide {
  padding: 35px 0;
}
</style>
