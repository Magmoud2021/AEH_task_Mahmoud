<template>
  <form class="search-form" @submit.prevent="searchSubmit">
    <div class="fieldset fieldset--search flex flex--row">
      <button
        type="submit"
        class="search-form__submit"
        :disabled="searchKey.length < 3"
        :style="searchKey.length < 3 ? 'opacity: .5' : ''"
      >
        <i class="fas fa-search menu__icon menu__icon--search"></i>
      </button>

      <input
        v-model="searchKey"
        type="search"
        class="fieldset__input fieldset__input--search"
        :placeholder="$t('searchForDoctor')"
        name="search"
        @keydown="test"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchKey: "",
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.bodyClose("btn-trans__item--search|fas|fieldset__input--search");
      this.fixFormPosition();
    });
  },
  methods: {
    bodyClose(target) {
      const searchBtn = document.getElementById("search-btn");
      const searchForm = document.getElementById("search-form");

      if (
        window.innerWidth > 1199 &&
        !searchForm.classList.contains("event-added")
      ) {
        searchForm.classList.add("event-added");
        document.body.addEventListener("click", (e) => {
          const matchReg = new RegExp(target, "g");

          if (e.target.classList.value.match(matchReg) === null) {
            searchBtn.querySelector("i").classList.add("fa-search");
            searchBtn.querySelector("i").classList.remove("fa-times");
            searchForm.classList.remove("active");
          }
        });
      }
    },
    fixFormPosition() {
      const searchBtn = document.getElementById("search-btn");
      const searchForm = document.getElementById("search-form");

      if (
        window.innerWidth > 1199 &&
        !searchBtn.classList.contains("event-added")
      ) {
        searchBtn.classList.add("event-added");

        searchBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (this.$i18n.locale === "en") {
            searchForm.style.left = `${
              searchBtn.getClientRects()[0].right -
              searchForm.getClientRects()[0].width
            }px`;
          } else {
            searchForm.style.left = `${searchBtn.getClientRects()[0].left}px`;
          }

          searchBtn.querySelector("i").classList.toggle("fa-search");
          searchBtn.querySelector("i").classList.toggle("fa-times");
          searchForm.classList.toggle("active");
        });
      }
    },
    searchSubmit() {
      if (this.$i18n.locale === "en") {
        this.$router.push(this.localePath(`/search/${this.searchKey}`));
      } else {
        this.$router.push(
          this.localePath(`/${encodeURI("البحث")}/${this.searchKey}`)
        );
      }
    },
    test() {
      console.log(this.searchKey);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  position: absolute;
  bottom: -50px;
  opacity: 0;
  z-index: 9999;
  pointer-events: none;
  transition: 0.3s all ease-out;

  &.active {
    opacity: 1;
    bottom: -70px;
    pointer-events: unset;
  }

  &__submit {
    all: unset;
    cursor: pointer;
  }
}

.fieldset {
  &--search {
    display: flex;
    min-width: 380px;
    min-height: 50px;
    padding: 4px 8px;
    border-radius: 8px;
    border: 2px solid #1474be;
    background-color: #fff;
    color: #1474be;

    @media screen and (max-width: 1199px) {
      min-width: auto;
    }
  }

  &__input {
    border: none;
    font-size: 13px;
    color: #1474be;
    width: 100%;
    background-color: transparent;
  }

  ::placeholder {
    color: #1474be;
  }

  ::-webkit-input-placeholder {
    color: #1474be;
  }

  ::-moz-placeholder {
    color: #1474be;
  }

  :-moz-placeholder {
    color: #1474be;
  }

  :-ms-input-placeholder {
    color: #1474be;
  }
}

.menu {
  &__icon {
    &--search {
      display: inline-block;
      transform: translateY(3px);
      margin-right: 5px;
    }
  }
}
</style>
