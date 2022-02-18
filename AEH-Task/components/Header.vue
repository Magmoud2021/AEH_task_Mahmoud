<template>
  <section class="wrapper">
    <header class="header">
      <div class="header__upper">
        <div class="container container--px">
          <div class="row">
            <div class="col-md-6 col-12">
              <a :href="'tel:' + Setting.hotline" class="menu menu--has-mr">
                <i class="fas fa-phone menu__icon"></i>

                <span class="menu__text">{{ Setting.hotline }}</span>
              </a>

              <a :href="'mailto:' + Setting.email" class="menu menu--has-mr">
                <i class="fas fa-envelope menu__icon"></i>

                <span class="menu__text">{{ Setting.email }}</span>
              </a>
            </div>
            <div class="col-md-6 col-12 fix-header">
              <div class="social">
                <a
                  :href="Setting.facebook"
                  class="social__item"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square social__icon"></i>
                </a>

                <a :href="Setting.twitter" class="social__item" target="_blank">
                  <i class="fab fa-twitter-square social__icon"></i>
                </a>

                <a
                  :href="Setting.instagram"
                  class="social__item"
                  target="_blank"
                >
                  <i class="fab fa-instagram-square social__icon"></i>
                </a>

                <a :href="Setting.youtube" class="social__item" target="_blank">
                  <i class="fab fa-youtube-square social__icon"></i>
                </a>
              </div>
              <client-only>
                <div class="menu--mobile">
                  <button
                    v-if="windowWidth <= 499"
                    id="lang__btn"
                    href="tel:+200122166671"
                    class="menu menu--select flex flex--row"
                    @click="toggle"
                  >
                    <i
                      class="fas fa-globe-americas menu__icon menu__icon--lang"
                    ></i>

                    <div class="select flex flex--col">
                      <div class="select__current">
                        {{ $i18n.locale == "en" ? "English" : "العربية" }}
                      </div>

                      <div class="select__list flex flex--col">
                        <nuxt-link
                          class="select__lang"
                          :to="switchLocalePath('ar')"
                        >
                          Arabic
                        </nuxt-link>

                        <nuxt-link
                          class="select__lang"
                          :to="switchLocalePath('en')"
                        >
                          English
                        </nuxt-link>
                      </div>
                    </div>

                    <i
                      class="fas fa-sort-down menu__icon menu__icon--shift"
                    ></i>
                  </button>
                </div>
              </client-only>

              <div class="btn-trans">
                <button
                  class="btn-trans__item"
                  title="increase text size"
                  @click="zoomPlus"
                >
                  <span class="btn-trans__title">A</span>

                  <i class="fas fa-plus btn-trans__icon"></i>
                </button>

                <button
                  class="btn-trans__item"
                  title="reset text size"
                  @click="zoomReset"
                >
                  <span class="btn-trans__title">A</span>
                </button>

                <button
                  class="btn-trans__item"
                  title="decrease text size"
                  @click="zoomMinus"
                >
                  <span class="btn-trans__title">A</span>

                  <i class="fas fa-minus btn-trans__icon"></i>
                </button>
              </div>

              <client-only>
                <a href="#" class="menu menu--profile menu--desktop d-none">
                  <i class="fas fa-user menu__icon"></i>

                  <span class="menu__text">{{ $t("profile") }}</span>
                </a>

                <button
                  v-if="windowWidth >= 500"
                  id="lang__btn"
                  class="menu menu--select menu--desktop flex flex--row"
                  @click="toggle"
                >
                  <i
                    class="fas fa-globe-americas menu__icon menu__icon--lang"
                  ></i>

                  <div class="select flex flex--col">
                    <div class="select__current">
                      {{ $i18n.locale == "en" ? "English" : "العربية" }}
                    </div>

                    <div class="select__list flex flex--col">
                      <nuxt-link
                        class="select__lang"
                        :to="switchLocalePath('ar')"
                      >
                        Arabic
                      </nuxt-link>

                      <nuxt-link
                        class="select__lang"
                        :to="switchLocalePath('en')"
                      >
                        English
                      </nuxt-link>
                    </div>
                  </div>

                  <i class="fas fa-sort-down menu__icon menu__icon--shift"></i>
                </button>
              </client-only>
            </div>
          </div>
        </div>
      </div>

      <div class="header__lower">
        <div class="container container--max">
          <Menu />
        </div>
      </div>
    </header>

    <SearchForm id="search-form" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "@/components/Menu";
import SearchForm from "@/components/SearchForm";
// import { fetchStore } from '~/mixin/fetchStore'

export default {
  name: "Header",
  components: { Menu, SearchForm },
  // mixins: [fetchStore({ stateName: 'allSettings' })],
  data() {
    return {
      windowWidth: null,
    };
  },
  computed: {
    ...mapGetters(["Setting"]),
  },
  beforeMount() {
    this.windowSize();
  },
  mounted() {
    this.$nextTick(function () {
      document.body.addEventListener("click", (e) => {
        if (!e.target.classList.contains("fieldset__input--search")) {
          document.querySelector(".select__list").classList.remove("active");
        }
      });
    });
  },
  methods: {
    toggle(e) {
      e.stopPropagation();
      const searchBtn = document.getElementById("search-btn");
      const searchForm = document.getElementById("search-form");
      // eslint-disable-next-line prefer-regex-literals
      const matchReg = new RegExp(
        "btn-trans__item--search|fas|fieldset__input--search",
        "g"
      );

      if (e.target.classList.value.match(matchReg) === null) {
        searchBtn.querySelector("i").classList.add("fa-search");
        searchBtn.querySelector("i").classList.remove("fa-times");
        searchForm.classList.remove("active");
      }

      if (e.target.closest("#lang__btn") !== null) {
        document.querySelector(".select__list").classList.toggle("active");
      } else {
        document.querySelector(".select__list").classList.remove("active");
      }
    },
    windowSize() {
      if (process.client) {
        this.windowWidth = window.outerWidth;
      }
    },
    zoomMinus() {
      document.querySelector("*").style.cssText = "zoom: 90%";
      document.querySelector("*").style.cssText += "-moz-transform: scale(0.8)";
      document.querySelector("*").style.cssText +=
        "-moz-transform-origin: center 0";
      document.body.classList.add("zoom-out");
      document.body.classList.remove("zoom-in");
    },
    zoomReset() {
      document.querySelector("*").style.cssText = "zoom: normal";
      document.body.classList.remove("zoom-in");
      document.body.classList.remove("zoom-out");
    },
    zoomPlus() {
      document.querySelector("*").style.cssText = "zoom: 120%";
      document.querySelector("*").style.cssText += "-moz-transform: scale(1.1)";
      document.querySelector("*").style.cssText +=
        "-moz-transform-origin: left 0";
      document.body.classList.add("zoom-in");
      document.body.classList.remove("zoom-out");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.container {
  &--max {
    @media screen and (max-width: 991px) {
      max-width: 100%;
    }
  }

  &--px {
    @media screen and (min-width: 992px) {
      padding: 0 30px 0 40px;
    }
  }
}

.flex {
  display: flex;
  align-items: center;

  &--row {
    flex-direction: row;
  }

  &--col {
    flex-direction: column;
  }
}

.header {
  position: relative;
  overflow: hidden;

  &__upper {
    background-color: #0a3a5f;
    padding: 8px 0;
  }

  &__lower {
    &--100 {
      height: 100vh;
    }
  }

  &__col {
    @media screen and (max-width: 1199px) {
      width: 100%;
    }

    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;

      &--mb {
        margin-bottom: 15px;
      }

      &--space {
        > * {
          margin-bottom: 10px;
        }
      }
    }

    &--vcenter {
      line-height: 2;
    }

    &--100 {
      @media screen and (max-width: 1200px) {
        justify-content: center !important;
        text-align: center;
      }
    }

    &--space {
      @media screen and (max-width: 500px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between !important;
      }

      @media screen and (min-width: 501px) and (max-width: 767px) {
        margin-top: 10px;
      }
    }
  }

  &__row,
  &__flex {
    justify-content: space-between;
  }

  &__flex {
    justify-content: flex-end;

    & > * {
      margin-right: 5px;
    }
  }
}

.social {
  display: inline-block;
  line-height: 1;

  @media all and (min-width: 768px) {
    margin-right: 60px;
  }

  @media all and (max-width: 500px) {
    margin: 0;
    padding-left: 20px;
  }

  &__item {
    margin-right: 22px;

    &:last-of-type {
      margin-right: 0;
    }

    @media all and (max-width: 767px) {
      font-size: 22px;
    }
  }

  &__icon {
    color: #fff;
    font-size: 24px;
  }
}

.menu {
  font-size: 13px;
  margin-right: 5px;

  &--location {
    display: inline-block;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }

  &--profile {
    @media screen and (max-width: 1199px) {
      display: none;
    }
  }

  &__icon {
    margin-right: 4px;
    color: #fff;

    &--lang {
      margin-right: 0;
      font-size: 20px;
      color: #fff;
    }

    &--shift {
      color: #fff;
      transform: translateY(-3px);
    }
  }

  &__text {
    color: #fff;
  }

  &--select {
    background: none;
    border: none;
    margin-right: 0;
    padding-right: 0;

    @media screen and (min-width: 501px) and (max-width: 767px) {
      padding: 0 15px;
    }
  }

  &--has-mr {
    margin-right: 15px;

    @media all and (max-width: 500px) {
      margin: 0 !important;
    }
  }

  &--desktop {
    @media all and (max-width: 500px) {
      display: flex;
    }
  }

  &--mobile {
    margin: 0;
    padding: 0 15px 0 5px;

    @media all and (min-width: 501px) {
      display: none;
    }
  }
}

.select {
  position: relative;
  z-index: 99;

  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
  }

  &__list {
    position: absolute;
    padding: 5px 15px;
    bottom: -60px;
    background: #fff;

    &:not(.active) {
      display: none;
    }
  }

  &__current {
    margin: 0 8px;
    color: #fff;
  }

  &__lang {
    height: auto;
    margin-bottom: 5px;
    font-size: 11px;
    font-weight: normal;
    color: #007bff !important;

    &.exact-active-link {
      font-weight: bold;
    }
  }
}

.btn-trans {
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 501px) and (max-width: 767px) {
    margin: 0 10px !important;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
}
.fix-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
body:lang(ar) {
  .menu {
    &__icon {
      margin-right: unset;
      margin-left: 4px;
    }

    &--has-mr {
      margin-right: unset;
      margin-left: 15px;
    }

    &--profile {
      margin-right: unset;
      margin-left: 10px;
    }
  }

  .social {
    @media all and (min-width: 768px) {
      margin-right: unset;
      margin-left: 60px;
    }

    @media all and (max-width: 500px) {
      padding-right: 20px;
    }

    &__item {
      margin-right: 22px;

      &:first-of-type {
        margin-right: 0;
      }
      @media (max-width: 992px) {
        margin-right: 15px;
      }
    }
  }
}
</style>
