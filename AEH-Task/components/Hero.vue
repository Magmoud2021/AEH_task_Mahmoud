<template>
  <section class="hero">
    <client-only>
      <splide ref="heroSlider" :options="options" @splide:move="onMove">
        <splide-slide v-for="slide in sliders" :key="slide.id">
          <div class="container">
            <div class="hero__sliderInfo text-center text-white">
              <!-- <h3 class="hero__sliderTitle">We Care</h3> -->

              <h3 class="hero__sliderTitle">
                {{ slide.title || 'This is default slider title' }}
              </h3>

              <nuxt-link :to="slide.link" class="hero__sliderBtn">
                {{ $t('readMore') }}
              </nuxt-link>
            </div>
          </div>

          <div class="hero__overlay"></div>

          <img class="hero__sliderImg" :src="slide.photo" :alt="slide.title" />
        </splide-slide>
      </splide>
    </client-only>
  </section>
</template>

<script>
import { fetchStore } from '~/mixin/fetchStore'
import { splideOptions } from '~/utilities/splideOptions'
import { splideUpdate } from '~/mixin/splideUpdate'

export default {
  name: 'Hero',
  mixins: [
    fetchStore([{ stateName: 'sliders' }]),
    splideUpdate('sliders', 'heroSlider'),
  ],
  data() {
    return {
      options: {
        ...splideOptions(this),
        type: 'loop',
        autoplay: true,
        interval: 5000,
        speed: 2500,
        rewind: true,
        perPage: 1,
        height: '80vh',
        direction: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
        arrows: true,
        classes: {
          pagination: 'splide__pagination hero__pagination',
          prev: 'splide__arrow--prev edit-prev',
          next: 'splide__arrow--next edit-next',
        },
        breakpoints: {
          767: {
            height: '80vh',
          },
        },
      },
    }
  },
  methods: {
    onMove(splide) {
      const body = document.body

      if (
        body.classList.contains('zoom-in') ||
        body.classList.contains('zoom-out')
      ) {
        splide.refresh()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  overflow: hidden;
  max-height: 100vh;

  &__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(51, 51, 51, 0.5);
    z-index: 99;
    pointer-events: none;
  }

  &__sliderInfo {
    width: 600px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }

  &__sliderTitle,
  &__sliderSecondTitle {
    margin-bottom: 60px;
    font-size: 56px;
    line-height: 1.22;
  }

  &__sliderTitle {
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 565px) {
      font-size: 18px;
    }
  }

  &__sliderSecondTitle {
    color: #fff; /* #5e5e5e */
  }

  &__sliderContent {
    margin-bottom: 25px;
    color: #fff; /* #5e5e5e */
    font-size: 20px;
    line-height: 40px;
  }

  &__sliderImg {
    width: 100%;
    height: 100%;

    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }

  &__sliderBtn {
    font-size: 16px;
    text-transform: capitalize;
    color: #fff;
    background-color: transparent;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #fff;
    transition: all 0.3s ease-out;
    width: 218px;
    display: block;
    margin: 0 auto;

    &:hover {
      color: #fff;
      background-color: #1474be;
    }
  }

  &__btnIcon {
    margin-right: 10px;
  }
}
body:lang(ar) {
  .hero {
    &__sliderBtn {
      direction: ltr;
    }

    &__btnIcon {
      margin-right: 0;
      margin-left: 10px;
    }
  }
}

::v-deep {
  .splide__arrow--prev,
  .edit-prev,
  .splide__arrow--next,
  .edit-next {
    background: transparent !important;
    color: #fff !important;
    font-size: 30px;
    @media (max-width: 565px) {
      display: none !important;
    }
  }
}
</style>
