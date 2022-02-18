<template>
  <section class="testimonials">
    <div class="container">
      <SectionIntro
        :small-tite="$t('testimonials')"
        :title="$t('OurPatientsSaysAboutUs')"
      />

      <client-only>
        <splide ref="testimonialsSliders" :options="options">
          <splide-slide
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <Testimonial :testimonial-obj="testimonial" />
          </splide-slide>
        </splide>
      </client-only>
    </div>
  </section>
</template>

<script>
import Testimonial from '@/components/unit/Testimonial'
import SectionIntro from '~/components/unit/SectionHeadline'
import { fetchStore } from '~/mixin/fetchStore'
// import { splideOptions } from '~/utilities/splideOptions'
import { splideUpdate } from '~/mixin/splideUpdate'
export default {
  name: 'Testimonials',
  components: { SectionIntro, Testimonial },
  mixins: [
    fetchStore([
      {
        stateName: 'testimonials',
      },
    ]),
    splideUpdate('testimonials', 'testimonialsSliders'),
  ],
  data() {
    return {
      subTitlesData: {},
      options: {
        // ...splideOptions(this),
        rewind: true,
        perPage: 1,
        direction: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
        arrows: false,
        classes: {
          pagination: 'splide__pagination testimonials__pagination',
        },
      },
    }
  },
  mounted() {
    this.$axios
      .$get(`/api/sub_titles?lang=${this.$i18n.locale}`)
      .then((res) => (this.subTitlesData = res.data))
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  background-image: url('~assets/images/testimonials/img_testmonials_bg.png');
  background-size: cover;
  padding-bottom: 7rem;
}
</style>
