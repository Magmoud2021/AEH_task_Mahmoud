export const splideOptions = (nuxt) => {
  const _this = nuxt

  return {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    rewind: true,
    gap: 10,
    autoplay: true,
    interval: 4000,
    pagination: false,
    direction: _this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
    classes: {
      prev: 'splide__arrow--prev splide-button-prev',
      next: 'splide__arrow--next splide-button-next',
    },
    breakpoints: {
      991: {
        perPage: 2,
        gap: 10,
      },
      767: {
        perPage: 1,
        gap: 0,
      },
    },
  }
}
