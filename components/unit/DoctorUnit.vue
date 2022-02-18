<template>
  <div class="doctor-card single-doctor">
    <h3 class="doctor-name">{{ doctor.title }}</h3>

    <div class="hold-doctor-img">
      <img
        :src="doctor.photo"
        :alt="doctor.image_alt"
        :title="doctor.image_title"
        class="img-fluid"
      />
    </div>

    <span class="doctor-specialty">{{ doctor.speciality }}</span>

    <p class="doctor-address">{{ doctor.address }}</p>

    <p class="doctor-description">
      {{ doctor.small_description | cutParagraph }}
    </p>

    <div class="hold-buttons">
      <nuxt-link
        :to="
          this.$i18n.locale === 'en'
            ? localePath(`/doctor/${doctor.slug}`)
            : localePath(`/${encodeURI('doctor')}/${doctor.slug}`)
        "
        class="btn-main"
      >
        <span></span>{{ $t('details') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorUnit',
  filters: {
    cutParagraph(value) {
      if (value.length > 150) {
        return value.slice(0, 100) + '...'
      } else {
        return value
      }
    },
  },
  props: {
    doctor: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/var.scss';

.single-doctor {
  position: relative;
  width: 100%;
  border: 1px solid transparent;
  background: url('~assets/images/bg/bg-background-doctor.png') no-repeat;
  border-radius: 0.2rem;
  margin: 1rem 0;
  height: 480px;
  @media (max-width: 992px) {
    height: 530px;
  }

  .hold-doctor-img {
    width: 130px;
    height: 130px;
  }

  .doctor-specialty {
    color: #f39e25;
  }

  .doctor-address {
    margin-bottom: 1rem;
  }

  .doctor-description {
    width: 95% !important;
    margin: 0 auto;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.88;
  }

  .hold-buttons {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 2%;
    left: 0;
    right: 0;

    .btn-main {
      width: 40%;
      font-size: 0.8rem;
      display: inline-block;
      margin-right: auto;
      text-align: center;

      @media (max-width: 1200px) {
        width: 90%;
      }
    }
  }

  &:hover {
    transform: scale(1);
    border: 1px solid map-get($colors, accent);
  }
}
</style>
