<template>
  <div class="doctor">
    <figure class="doctor__figure">
      <img
        :src="doctorObj.photo"
        :alt="doctorObj.image_alt == null ? 'Doctor Name' : doctorObj.image_alt"
        class="doctor__img"
      />

      <div class="socials d-none">
        <a href="#" class="socials__link">
          <i class="fab fa-facebook-square socials__icon"></i>
        </a>

        <a href="#" class="socials__link">
          <i class="fab fa-twitter-square socials__icon"></i>
        </a>

        <a href="#" class="socials__link">
          <i class="fab fa-instagram-square socials__icon"></i>
        </a>

        <a href="#" class="socials__link">
          <i class="fab fa-linkedin socials__icon"></i>
        </a>

        <a href="#" class="socials__link">
          <i class="fab fa-youtube-square socials__icon"></i>
        </a>
      </div>
    </figure>

    <div class="doctor__info">
      <h4 class="doctor__name">{{ doctorObj.title }}</h4>
      <h6 class="doctor__position">{{ doctorObj.position }}</h6>
      <p class="doctor__about d-none">
        {{ doctorObj.small_description | reduce }}
      </p>
      <div
        class="nav-item nav-item--btn nav-item--normal nav-item--doctors m-0"
      >
        <nuxt-link
          :to="
            $i18n.locale === 'en'
              ? localePath(`/doctor/${doctorObj.slug}`)
              : localePath(`/${encodeURI('doctor')}/${doctorObj.slug}`)
          "
          class="nav-link nav-link--normal nav-link--doctors nav-link--doctors--AEH"
        >
          {{ $t('More_Details') }}
          <i
            class="fas"
            :class="
              this.$i18n.locale == 'en' ? 'fa-arrow-right' : 'fa-arrow-left'
            "
          ></i>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorUnit',
  filters: {
    reduce(value) {
      return value.slice(0, 80) + '...'
    },
  },
  props: ['doctorObj'],
}
</script>

<style lang="scss" scoped>
.socials {
  position: absolute;
  bottom: -20%;
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 0.3s all ease-out;

  &__icon {
    font-size: 24px;
    color: #fbad16;
  }

  &__link {
    margin-right: 24px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 992px) {
    bottom: 0;
  }
}

.nav-link {
  background: transparent;
  &--doctors {
    color: #1474be;
    font-size: 14px;
  }
  &--doctors--AEH {
    display: block;
    text-align: right;
    padding: 0;
    min-width: auto;
  }
}

body:lang(ar) {
  .socials {
    &__link {
      &:first-of-type {
        margin-right: 0;
      }

      &:last-of-type {
        margin-right: 24px;
      }
    }
  }
  .nav-link {
    &--doctors--AEH {
      text-align: left;
    }
  }
}

.doctor {
  position: relative;
  background: #f7fafd;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  &__figure {
    position: relative;
    overflow: hidden;
    //border-top-left-radius: 14px;
    //border-top-right-radius: 14px;
    margin-bottom: 0;
    height: 300px;
    border-radius: 12px;
    @media screen and (max-width: 600px) {
      height: 400px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-position: top;
    transition: all ease-in-out 0.4s;
  }
  &__info {
    //text-align: center;
    padding: 20px;
  }

  &__name {
    color: #000;
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
  }

  &__position {
    color: #178ee6;
    font-size: 1rem;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  &__about {
    color: #7e7e7e;
    font-size: 12px;
    line-height: 1.7;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  &:hover .socials {
    bottom: 0;
  }
  &:hover {
    .doctor__figure {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.nav-item {
  background: transparent;
  &--doctors {
    color: #1474be;
    display: block;
    min-width: auto;
    &:hover {
      .nav-link {
        color: #000;
      }
    }
  }
  &:hover {
    background: transparent;
  }
}
</style>
