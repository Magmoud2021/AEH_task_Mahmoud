<template>
  <section class="testimonial">
    <div class="quote">
      <div class="quote__col quote__col--block quote__fullwidth">
        <figure class="quote__figure">
          <img
            class="quote__img"
            :src="testimonialObj.image"
            alt="Patient Name"
          />
        </figure>
      </div>
      <div class="quote__col text-center">
        <p class="quote__text">{{ testimonialObj.description }}</p>
        <h4 class="quote__name">{{ testimonialObj.username }}</h4>
        <h6 class="quote__position">{{ testimonialObj.disease }}</h6>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonial',
  props: ['testimonialObj'],
}
</script>

<style lang="scss" scoped>
.quote {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  align-items: flex-end;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  &__col {
    &--block {
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }

  &__figure {
    width: 120px;
    height: 120px;
    margin-bottom: 0;
    margin-right: 20px;

    @media screen and (max-width: 767px) {
      margin: auto;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &__icon {
    font-size: 40px;
    color: #1474be;
    margin-bottom: 15px;
  }

  &__text {
    font-size: 20px;
    color: #5e5e5e;
    line-height: 1.6;
    margin-bottom: 5px;
    padding: 2rem 0;
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__name {
    font-size: 24px;
    font-weight: 600;
    color: #1474be;
    line-height: 1.2;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  &__position {
    font-size: 16px;
    color: #5e5e5e;
    line-height: 1.2;
    text-transform: capitalize;
    margin: 1rem 0 3rem 0;
  }
  &__fullwidth {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &__figure {
      margin: 0;
    }
  }
}

body:lang(ar) {
  .quote {
    &__figure {
      margin-right: unset;
      margin-left: 20px;
    }
  }
}
</style>
