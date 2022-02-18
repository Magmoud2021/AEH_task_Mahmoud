<template>
  <div class="sectionIntro">
    <h2 class="sectionIntro__title text-center">{{ title }}</h2>
    <h5 class="sectionIntro__small text-center">{{ smallTite }}</h5>
    <p class="sectionIntro__text text-center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeadline',
  props: ['smallTite', 'title', 'text'],
}
</script>

<style lang="scss" scoped>
.sectionIntro {
  padding: 40px 0;

  &__small {
    color: #1474be;
    font-size: 20px;
    margin: 1.3rem 0;
    text-transform: uppercase;
    font-weight: 700;
  }

  &__title {
    color: #363636;
    font-weight: 700;
    font-size: 40px;
    text-transform: capitalize;
    margin-top: 1.8rem;

    &--tabs {
      font-size: 38px;
    }

    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }

  &__text {
    color: #5e5e5e;
    font-size: 20px;
    line-height: 2;
    margin-bottom: 0;

    &--tabs {
      font-size: 18px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
}
</style>
