<template>
  <footer class="footer">
    <span class="btn__top" role="button" @click="scrollToTop">
      <i class="fas fa-chevron-up"></i>
    </span>
    <div class="footer__overlay"></div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-6">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="footer__block">
                <figure class="footer__figure">
                  <nuxt-link :to="localePath('/')">
                    <img
                      v-if="$i18n.locale == 'en'"
                      src="~/assets/images/logos/Logo_header_en.png"
                      alt="Andalusia Logo "
                      class="footer__logo w-100"
                    />

                    <img
                      v-if="$i18n.locale == 'ar'"
                      src="~/assets/images/logos/Logo_header_ar.png"
                      alt="Andalusia Logo "
                      class="footer__logo w-100"
                    />
                  </nuxt-link>
                </figure>

                <p v-if="$i18n.locale == 'en'" class="footer__about">
                  {{ Setting.about_us_footer_en }}
                </p>

                <p v-if="$i18n.locale == 'ar'" class="footer__about">
                  {{ Setting.about_us_footer_ar }}
                </p>
              </div>

              <div class="footer__block">
                <h3 class="footer__title">
                  {{ $t('haveQuestion') | sliceTitle }}
                </h3>

                <ul class="menu">
                  <li class="menu__item">
                    <a href="https://goo.gl/maps/3EH6qeFPpKbKongn6">
                      <i class="fas fa-map-marker-alt menu__icon"></i>
                      <span class="menu__text">{{
                        $i18n.locale === 'ar'
                          ? Setting.address_ar
                          : Setting.address_en
                      }}</span>
                    </a>
                  </li>

                  <li class="menu__item">
                    <a :href="`tel:${Setting.hotline}`">
                      <i class="fas fa-phone menu__icon"></i>
                      <span class="menu__text">{{ Setting.hotline }}</span>
                    </a>
                  </li>

                  <li class="menu__item">
                    <a :href="`mailto:${Setting.email}`">
                      <i class="fas fa-envelope menu__icon"></i>
                      <span class="menu__text">{{ Setting.email }}</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="footer__block">
                <h3 class="footer__title">
                  {{ $t('DownloadMobileApp') | sliceTitle }}
                </h3>

                <div class="stores">
                  <figure class="stores__figure">
                    <a
                      href="https://apps.apple.com/us/app/dotcare-for-health-lifestyle/id972029385"
                      target="_blank"
                    >
                      <img
                        src="~/assets/images/icons/icon-app-store.png"
                        alt="App Store"
                        class="stores__img"
                      />
                    </a>
                  </figure>

                  <figure class="stores__figure">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=net.andalusiagroup.andalusiabooking"
                    >
                      <img
                        src="~/assets/images/icons/icon-play-store.png"
                        alt="App Store"
                        class="stores__img"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="footer__block">
                <h3 class="footer__title">
                  {{ $t('links') | sliceTitle }}
                </h3>

                <ul class="menu">
                  <li class="menu__item">
                    <nuxt-link
                      :to="
                        $i18n.locale === 'en'
                          ? localePath('/about_us')
                          : localePath(encodeURI('/من-نحن'))
                      "
                    >
                      <span class="menu__text">{{ $t('menu.about') }}</span>
                    </nuxt-link>
                  </li>

                  <li class="menu__item">
                    <nuxt-link
                      :to="
                        $i18n.locale === 'en'
                          ? localePath('/clinics')
                          : localePath(encodeURI('/clinics'))
                      "
                    >
                      <span class="menu__text">{{ $t('menu.clinics') }}</span>
                    </nuxt-link>
                  </li>

                  <li class="menu__item">
                    <nuxt-link
                      :to="
                        $i18n.locale === 'en'
                          ? localePath('/services')
                          : localePath(encodeURI('/services'))
                      "
                    >
                      <span class="menu__text">{{ $t('menu.services') }}</span>
                    </nuxt-link>
                  </li>

                  <li class="menu__item">
                    <nuxt-link
                      :to="
                        $i18n.locale === 'en'
                          ? localePath('/offers')
                          : localePath(encodeURI('/العروض'))
                      "
                    >
                      <span class="menu__text">{{ $t('menu.offers') }}</span>
                    </nuxt-link>
                  </li>

                  <li class="menu__item">
                    <nuxt-link
                      :to="
                        $i18n.locale === 'en'
                          ? localePath('/doctors')
                          : localePath(encodeURI('/doctors'))
                      "
                    >
                      <span class="menu__text">{{ $t('menu.doctors') }}</span>
                    </nuxt-link>
                  </li>

                  <li class="menu__item">
                    <nuxt-link
                      v-if="$i18n.locale === 'ar'"
                      :to="
                        $i18n.locale === 'en'
                          ? localePath('/blog')
                          : localePath(encodeURI('/المدونة'))
                      "
                    >
                      <span class="menu__text">{{ $t('menu.blog') }}</span>
                    </nuxt-link>
                  </li>

                  <li class="menu__item">
                    <nuxt-link
                      :to="
                        $i18n.locale === 'en'
                          ? localePath('/contact-us')
                          : localePath(encodeURI('/اتصل-بنا'))
                      "
                    >
                      <span class="menu__text">{{ $t('menu.contact') }}</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="footer__block">
                <h3 class="footer__title">
                  {{ $t('recentBlog') | sliceTitle }}
                </h3>

                <div
                  v-for="blog in Array.from(posts_footer).slice(0, 2)"
                  :key="blog.id"
                  class="recent"
                >
                  <figure class="recent__figure">
                    <img
                      :src="blog.image"
                      :alt="blog.image_alt"
                      class="recent__img"
                    />
                  </figure>

                  <div class="recent__content">
                    <div class="recent__title">
                      <nuxt-link :to="localePath(`/${blog.slug}`)">
                        {{ blog.title }}
                      </nuxt-link>
                    </div>

                    <ul class="meta">
                      <div class="meta__col">
                        <i
                          class="fas fa-calendar-alt meta__icon meta__icon--date"
                        ></i>
                        <span class="recent__text recent__text--date">
                          {{ blog.date }}
                        </span>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="footer__block">
                <h3 class="footer__title">
                  {{ $t('openingHours') | sliceTitle }}
                </h3>

                <ul class="menu">
                  <li class="menu__item">
                    <i class="fas fa-clock menu__icon"></i>
                    <span class="menu__text">{{ $t('twentyFourHours') }}</span>
                  </li>
                </ul>
              </div>

              <div class="footer__block">
                <h3 class="footer__title">
                  {{ $t('subscribeForNewsletter') }}
                </h3>

                <client-only>
                  <form class="subscribe" @submit.prevent="newsletter">
                    <div class="fieldset">
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                      >
                        <input
                          v-model="email"
                          type="text"
                          name="subscribe_mail"
                          class="fieldset__input"
                          :placeholder="$t('newsletter')"
                        />
                        <small
                          class="col-md-12 text-white d-block position-absolute"
                        >
                          {{ errors[0] }}
                        </small>
                      </ValidationProvider>
                    </div>

                    <div class="fieldset">
                      <button
                        type="submit"
                        class="nav-item nav-item--btn nav-item--normal"
                      >
                        <span class="nav-link nav-link--btn nav-link--normal">
                          {{ $t('subscribeShort') }}
                        </span>
                      </button>
                    </div>

                    <div class="row">
                      <small
                        v-if="newsletterSuccess"
                        class="text-success col-md-12"
                        >{{ $t('sentsuccesfully') }}</small
                      >
                      <small
                        v-if="newsletterError"
                        class="text-danger col-md-12"
                        >{{ $t('ServerError') }}</small
                      >
                    </div>
                  </form>
                </client-only>
              </div>
            </div>
          </div>

          <div class="map">
            <div class="footer__block">
              <h3 class="footer__title">{{ $t('ourClinics') }}</h3>
              <img
                v-if="!showMap"
                src="@/assets/images/bg/google-map.jpg"
                width="100%"
                @click="showMap = true"
              />
              <iframe
                v-if="showMap"
                src="https://www.google.com/maps/d/embed?mid=13i_qzUagMjrHacvfecJv_TuyeocuFPSh"
                width="100%"
                height="300px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <h6 class="copyrights">
        {{ $t('copyRights') }}
      </h6>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchStore } from '~/mixin/fetchStore'
export default {
  name: 'Footer',
  filters: {
    sliceTitle(value) {
      return value.length > 18 ? value.slice(0, 18) : value
    },
  },
  mixins: [
    fetchStore([
      {
        stateName: 'posts_footer',
      },
    ]),
  ],
  data() {
    return {
      showMap: false,
      email: '',
      newsletterSuccess: '',
      newsletterError: '',
      subscription_page: '',
    }
  },
  computed: {
    ...mapGetters(['Setting']),
  },
  mounted() {},
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    newsletter() {
      this.$axios
        .post('api/newsletter', {
          email: this.email,
          subscription_page: decodeURI(window.location.href),
        })
        .then((res) => {
          this.newsletterSuccess = true
          setTimeout(() => {
            this.newsletterSuccess = false
          }, 3000)
        })
        .catch((err) => {
          this.newsletterError = true
          setTimeout(() => {
            this.newsletterError = false
          }, 3000)
          throw new Error(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 115px 0 40px;
  background-color: #0a3a5f;

  @media screen and (max-width: 767px) {
    padding-top: 75px;
  }

  &__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    pointer-events: none;
    background: {
      image: url('~assets/images/bg/bg-footer-shape.webp');
      repeat: no-repeat;
      position: center center;
      size: cover;
    }
  }

  &__about {
    color: #ebf3fa;
    font-size: 16px;
    line-height: 2.5;
    margin-bottom: 0;
  }

  &__block {
    margin-bottom: 39px;

    &:last-of-type {
      @media screen and (min-width: 1200px) {
        margin-bottom: 0;
      }
    }
  }

  &__title {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 32px;
    text-transform: capitalize;
  }
}

.menu {
  &__item {
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__icon,
  &__text {
    color: #fff;
    font-size: 16px;
  }

  &__icon {
    min-width: 16px;
    margin-right: 5px;
    font-size: 13px;
    text-align: center;
  }

  &__text {
    font-weight: normal;
  }
}

.stores {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__figure {
    &:first-of-type {
      margin-right: 30px;
    }
  }
}

.recent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 340px;
  }

  &__figure {
    margin-right: 15px;
    margin-bottom: 0;
    width: 80px;
    height: 80px;
  }

  &__img {
    width: 80px;
    height: 100%;
    border-radius: 14px;
  }

  &__content {
    width: 100%;
  }

  &__title {
    overflow: hidden;
    color: #ebf3fa;
    font-size: 16px;
    height: 72px;
    a {
      color: #fff;
    }
  }

  &__text {
    color: #ebf3fa;
    font-size: 12px;

    &--date {
      color: #1474be;
    }

    &--user {
      margin-right: 10px;
      color: #cecece;
    }

    &--comments {
      color: #cecece;
    }
  }
}

.meta {
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    max-width: 340px;
  }

  &__figure {
    margin-right: 15px;
    margin-bottom: 0;
    width: 80px;
    height: 80px;
  }

  &__img {
    width: 80px;
    height: 100%;
    border-radius: 14px;
  }

  &__content {
    width: 100%;
  }

  &__title {
    overflow: hidden;
    color: #ebf3fa;
    font-size: 16px;
    height: 72px;
  }

  &__text {
    color: #ebf3fa;
    font-size: 12px;

    &--date {
      color: #1474be;
    }

    &--user {
      margin-right: 10px;
      color: #cecece;
    }

    &--comments {
      color: #cecece;
    }
  }

  justify-content: flex-start;
  margin-bottom: 0;
  align-items: center;

  &__col {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media screen and (min-width: 768px) {
      max-width: 340px;
    }

    &__figure {
      margin-right: 15px;
      margin-bottom: 0;
      width: 80px;
      height: 80px;
    }

    &__img {
      width: 80px;
      height: 100%;
      border-radius: 14px;
    }

    &__content {
      width: 100%;
    }

    &__title {
      overflow: hidden;
      color: #ebf3fa;
      font-size: 16px;
      height: 72px;
    }

    &__text {
      color: #ebf3fa;
      font-size: 12px;

      &--date {
        color: #1474be;
      }

      &--user {
        margin-right: 10px;
        color: #cecece;
      }

      &--comments {
        color: #cecece;
      }
    }

    margin-bottom: 0;
    align-items: center;

    &--admin {
      margin-right: 10px;
    }
  }

  &__icon {
    color: #ebf3fa;
    font-size: 9px;
    margin-right: 7px;

    &--date {
      color: #1474be;
    }

    &--user,
    &--comments {
      color: #cecece;
    }
  }
}

.fieldset {
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__input {
    border-radius: 8px;
    border: solid 2px #cecece;
    background-color: transparent;
    padding: 7px;
    text-align: center;
    width: 100%;
    color: #bebebe;
  }
}

.nav-item {
  &--normal {
    min-width: unset;
    margin: 0;
    width: 100%;
    border: none;
  }
}

.nav-link {
  &--normal {
    font-size: 16px;
  }
}

.copyrights {
  color: #ebf3fa;
  font-size: 16px;
  text-align: center;
  margin-top: 100px;

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
}

.btn__top {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -30px;
  width: 60px;
  height: 60px;
  color: #0a3a5f;
  font-size: 30px;
  text-align: center;
  line-height: 62px;
  border-radius: 50%;
  background-color: #fff;

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
    margin-left: -25px;
    font-size: 30px;
    line-height: 50px;
  }
}
body:lang(ar) {
  .recent {
    &__figure {
      margin-right: 0;
      margin-left: 15px;
    }
  }

  .stores {
    &__figure {
      width: 45%;
      a {
        img {
          width: 100%;
        }
      }
      &:first-of-type {
        margin-right: 0;
        margin-left: 15px;
      }
    }
  }

  .meta__icon--date,
  .meta__icon--user,
  .meta__icon--comments,
  .recent__text--user,
  .menu__icon {
    margin-left: 10px;
    margin-right: 0;
  }
}

body:lang(en) {
  .meta {
    &__col {
      &--admin {
        margin-left: 10px;
        margin-right: unset;
      }
    }
  }
}
</style>
