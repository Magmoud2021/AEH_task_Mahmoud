<template>
  <div class="posts">
    <nuxt-link
      :to="localePath(`/${blog.slug}`)"
      class="nav-link nav-link--btn nav-link--normal nav-link--readMore nav-link--bhover"
    >
      <figure class="posts__figure">
        <img class="posts__img" :src="blog.image" :alt="blog.image_alt" />
        <!-- <div class="posts__date d-flex justify-content-between">
        <div class="posts__day"><i class="fas fa-calendar-alt pr-1 pl-1 posts__date-icon"></i> {{ blog.date }}</div>
        <div class="posts__user"><i class="fas fa-user pr-1 pl-1 posts__date-icon"></i> Admin</div>
      </div> -->
      </figure>

      <div class="posts__content">
        <h4 class="posts__name">
          {{ blog.title | sliceTitle }}
        </h4>
        <p class="text-muted">{{ blog.short_description }}</p>

        <p v-if="blog.body" class="posts__about">
          {{ blog.body | sliceAbout }}
        </p>

        <div class="posts__wrapper">
          <div
            class="nav-item nav-item--btn nav-item--normal nav-item--readMore nav-item--bhover"
          ></div>

          <div class="posts__link">
            <div class="posts__wrapper">
              <h6 class="posts__wrapper comments d-none">
                <i
                  class="fas fa-comments comments__icon comments__icon--comment"
                ></i>
                <div class="comments__num mt-2">12</div>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SingleBlog',
  filters: {
    sliceTitle(value) {
      return value.length > 51 ? value.slice(0, 51) : value
    },
    sliceAbout(value) {
      console.log(value)
      let newValue = value.length > 120 ? value.slice(0, 120) : value
      newValue = newValue.replaceAll('<p>', '').replaceAll('</p>', '')
      return newValue
    },
  },
  props: ['blog'],
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/var';

.nav-link {
  &--readMore {
    font-size: 16px;
    font-weight: 600;
    color: map-get($colors, accent);
  }
}

.nav-item {
  &--readMore {
    min-width: 130px;
    background-color: transparent;

    &:hover {
      background-color: #1474be;

      .nav-link {
        color: #fff;
      }
    }

    @media screen and (max-width: 767px) and (min-width: 600px) {
      min-width: unset;
      margin: 0;
    }
  }
}

body:lang(ar) {
  .nav-item {
    &--readMore {
      margin-right: 0;
    }
  }
}
.posts {
  &__figure {
    position: relative;
    margin-bottom: 0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #f7fafd;
  }

  &__img {
    width: 100%;
    border-radius: 12px;
    height: 250px;
  }

  &__date-icon {
    font-size: 1.4rem;
  }

  &__date {
    position: relative;
    top: -20px;
    right: 15px;
    padding: 8px 15px 0 15px;
    text-align: center;
    background-color: #faad29;
    color: #fff;
    border-radius: 10px;
    max-width: 320px;
    min-width: 320px;

    &:lang(en) {
      right: 0;
      left: 15px;
    }

    > * {
      margin-bottom: 8px;
    }

    @media screen and (max-width: 992px) {
      padding: 10px 12px;
      max-width: unset;
      min-width: unset;
      display: block !important;
      position: absolute;
      right: 0;
      left: 0;
    }

    @media screen and (max-width: 500px) {
      position: absolute;
      bottom: -10px;
      top: unset;
      display: flex !important;
      height: 60px;
      line-height: 43px;
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
      right: 0;
      left: 0;
    }
  }

  &__day {
    font-size: 14px;
  }

  &__month {
    font-size: 9px;
  }

  &__year {
    font-size: 10px;
    margin-bottom: 0;
  }

  &__user {
    font-size: 10px;
    margin-bottom: 0;
  }

  &__content {
    padding: 15px;
    background-color: #f7fafd;
  }

  &__name {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    // line-break: anywhere;
    height: 70px;
    overflow: hidden;

    @media screen and (max-width: 767px) and (min-width: 600px) {
      font-size: 18px;
    }
  }

  &__about {
    color: #828485;
    font-size: 16px;
    line-height: 1.75;
    margin-bottom: 10px;
    height: 85px;
    overflow: hidden;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > * {
      margin-bottom: 0;
    }
  }

  &__author {
    color: #1474be;
    font-size: 13px;
  }
}

.comments {
  &__icon {
    margin-left: 7px;
    transform: translateY(1px);

    &--comment {
      font-size: 18px;
      margin-right: 9px;
      color: #7e7e7e;
    }
  }

  &__num {
    font-size: 16px;
    color: map-get($colors, accent);
  }
}
</style>
