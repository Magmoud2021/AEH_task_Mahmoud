<template>
  <section class="blog">
    <div class="container">
      <SectionIntro :title="$t('ourLatestNews')" />
      <client-only>
        <splide ref="blogSlider" :options="options">
          <splide-slide v-for="blog in allPosts" :key="blog.id">
            <SingleBlog :blog="blog" />
          </splide-slide>
        </splide>
      </client-only>

      <div class="wrapper text-center has__mt--doctors">
        <div class="nav-item nav-item--btn nav-item--normal nav-item--doctors">
          <nuxt-link
            :to="
              $i18n.locale === 'en'
                ? localePath('/blog')
                : localePath(encodeURI('/المدونة'))
            "
            class="nav-link nav-link--btn nav-link--normal nav-link--doctors"
          >
            {{ $t('viewAllBlogs') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from '@/components/unit/SectionIntro'
import SingleBlog from '@/components/unit/SingleBlog'
import { fetchStore } from '~/mixin/fetchStore'
import { splideOptions } from '~/utilities/splideOptions'
import { splideUpdate } from '~/mixin/splideUpdate'
export default {
  name: 'Blog',
  components: { SectionIntro, SingleBlog },
  mixins: [
    fetchStore([
      {
        stateName: 'allPosts',
      },
    ]),
    splideUpdate('allPosts', 'blogSlider'),
  ],
  data() {
    return {
      subTitlesData: {},
      options: {
        ...splideOptions(this),
        rewind: true,
        perPage: 3,
        direction: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
        arrows: false,
        gap: '40px',
        classes: {
          pagination: 'splide__pagination blog__pagination',
        },
        breakpoints: {
          992: {
            perPage: 2,
          },
          600: {
            perPage: 1,
          },
        },
      },
    }
  },
  mounted() {
    this.$axios
      .$get(`/api/sub_titles?lang=${this.$i18n.locale}`)
      .then((res) => (this.subTitlesData = res.data))
  },
}
</script>

<style lang="scss" scoped>
.blog {
  padding-bottom: 40px;
}
</style>
