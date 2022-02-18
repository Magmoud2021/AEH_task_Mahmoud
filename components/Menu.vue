<template>
  <nav class="navbar navbar-expand-xl">
    <NuxtLink :to="localePath('/')" class="navbar-brand navbar__brand">
      <img
        v-if="$i18n.locale == 'en'"
        class="navbar__logo"
        src="~/assets/images/logos/Logo_header_en.png"
        alt="Logo"
        loading="lazy"
      />

      <img
        v-if="$i18n.locale == 'ar'"
        class="navbar__logo"
        src="~/assets/images/logos/Logo_header_ar.png"
        alt="Logo"
        loading="lazy"
      />
    </NuxtLink>

    <div class="navbar__wrapper">
      <a href="#" class="menu menu--profile">
        <i class="fas fa-user menu__icon"></i>
      </a>

      <button
        id="menu__btn"
        class="navbar-toggler menu__btn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse justify-content-end"
    >
      <ul class="navbar-nav ml-auto navbar__nav">
        <li class="nav-item nav-item--menu">
          <NuxtLink
            :to="$i18n.locale === 'en' ? '/en/about_us' : encodeURI('/من-نحن')"
            class="nav-link"
          >
            {{ $t("menu.about") }}
          </NuxtLink>
        </li>

        <li class="nav-item nav-item--menu">
          <NuxtLink
            :to="
              $i18n.locale === 'en'
                ? localePath('/clinics')
                : localePath(encodeURI('/clinics'))
            "
            class="nav-link"
          >
            {{ $t("menu.clinics") }}
          </NuxtLink>
        </li>

        <li class="nav-item nav-item--menu">
          <NuxtLink
            :to="
              $i18n.locale === 'en'
                ? localePath('/services')
                : localePath(encodeURI('/services'))
            "
            class="nav-link"
          >
            {{ $t("menu.services") }}
          </NuxtLink>
        </li>

        <li class="nav-item nav-item--menu">
          <NuxtLink
            :to="$i18n.locale === 'en' ? '/en/offers' : encodeURI('/العروض')"
            class="nav-link"
          >
            {{ $t("menu.offers") }}
          </NuxtLink>
        </li>

        <li class="nav-item nav-item--menu">
          <NuxtLink
            :to="
              $i18n.locale === 'en'
                ? localePath('/doctors')
                : localePath(encodeURI('/doctors'))
            "
            class="nav-link"
          >
            {{ $t("menu.doctors") }}
          </NuxtLink>
        </li>

        <li class="nav-item nav-item--menu">
          <NuxtLink
            v-if="$i18n.locale === 'ar'"
            :to="
              $i18n.locale === 'en'
                ? localePath('/blog')
                : localePath(encodeURI('/المدونة'))
            "
            class="nav-link"
          >
            {{ $t("menu.blog") }}
          </NuxtLink>
        </li>

        <li class="nav-item nav-item--menu">
          <NuxtLink
            :to="
              $i18n.locale === 'en' ? '/en/contact-us' : encodeURI('/اتصل-بنا')
            "
            class="nav-link"
          >
            {{ $t("menu.contact") }}
          </NuxtLink>
        </li>

        <li class="btn-trans btn-trans--search">
          <button
            id="search-btn"
            class="btn-trans__item btn-trans__item--search"
            title="Search"
          >
            <i
              class="fas fa-search btn-trans__icon btn-trans__icon--search"
            ></i>
          </button>

          <SearchForm class="search__mobile" />
        </li>

        <li class="nav-item nav-item--btn">
          <a
            href="https://booking.andalusiaegypt.com/"
            class="nav-link nav-link--btn"
            target="_blank"
          >
            {{ $t("menu.booknow") }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(function () {
      if (!this.$store.state.menuFuncAdded.funcAdded) {
        // hide menu when window is clicked
        document.body.addEventListener("click", (e) => {
          if (!e.target.classList.contains("fieldset__input--search")) {
            this.removeMenu();
          }
        });

        this.$store.dispatch("menuFuncAdded/update_funcAdded");
      }
    });
  },
  methods: {
    toggleMenu: (e) => {
      const mobileBtn = document.getElementById("menu__btn");
      const mobileMenu = document.getElementById("navbarSupportedContent");

      e.stopPropagation();
      const btnAttr = mobileBtn.getAttribute("aria-expanded");
      btnAttr === "false"
        ? mobileBtn.setAttribute("aria-expanded", "true")
        : mobileBtn.setAttribute("aria-expanded", "false");
      mobileMenu.classList.toggle("collapse");
      document
        .querySelector(".header__lower")
        .classList.toggle("header__lower--100");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.classList.toggle("body--hidden");
    },
    removeMenu() {
      const mobileBtn = document.getElementById("menu__btn");
      const mobileMenu = document.getElementById("navbarSupportedContent");

      mobileBtn.setAttribute("aria-expanded", "false");
      mobileMenu.classList.add("collapse");
      document
        .querySelector(".header__lower")
        .classList.remove("header__lower--100");
      document.body.classList.remove("body--hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding-left: 0;
  padding-right: 0;

  @media screen and (min-width: 1200px) {
    position: static;
  }

  @media screen and (max-width: 767px) {
    padding: 0;

    &__brand {
      max-width: 65%;

      @media screen and (max-width: 500px) {
        margin: 0;
      }
    }

    &__logo {
      width: 100%;
    }
  }
}
.menu {
  &__btn {
    color: #1474be;
    font-size: 25px;

    @media screen and (max-width: 992px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &--profile {
    color: #1474be;
    font-size: 25px;
    margin: 0 15px;

    @media screen and (min-width: 1200px) {
      display: none;
    }
  }
}

.nav-item {
  &--btn {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0 10px;
    text-transform: capitalize;
    margin-right: 0;

    @media screen and (max-width: 1199px) {
      margin-right: 15px;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 500px) {
      margin-top: 0;
    }
  }

  &--menu {
    background-color: transparent;

    &:hover {
      color: #1474be;
    }

    @media screen and (max-width: 1199px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 500px) {
      margin-top: 8px;
    }
  }
}

.btn-trans {
  &--search {
    border: 1px solid #1474be;
    border-radius: 5px;
    color: #1474be;
    i {
      color: #1474be;
      &:hover {
        color: #1474be;
      }
    }
    @media screen and (max-width: 1199px) {
      margin-top: 20px;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    @media screen and (max-width: 500px) {
      margin-top: 0;
    }
  }

  &__item {
    &--search {
      @media screen and (max-width: 1199px) {
        display: none;
      }
    }
  }
}

.search {
  &__mobile {
    @media screen and (max-width: 1199px) {
      position: static !important;
      opacity: 1 !important;
      pointer-events: unset !important;
    }
  }
}
body:lang(ar) {
  .navbar {
    &__nav {
      margin-left: unset !important;
      margin-right: auto !important;
    }
  }
}
</style>
