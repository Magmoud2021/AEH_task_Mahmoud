<template>
  <div class="sectionIntro">
    <h5 class="sectionIntro__small text-center">{{ smallTite }}</h5>
    <h2 class="sectionIntro__title text-center">{{ title }}</h2>
    <p class="sectionIntro__text text-center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionIntro',
  props: ['smallTite', 'title', 'text'],
}
</script>

<style lang="scss" scoped>
.sectionIntro {
  padding: 40px 0;

  &__small {
    color: #1474be;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  &__title {
    color: #5e5e5e;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 18px;
    text-transform: capitalize;

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
