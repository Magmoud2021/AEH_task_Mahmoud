<template>
  <section class="home-page">

    <Hero />
    <BookingBox />
    <AboutUsHome />
    <DownloadApps />
    <OurDoctors />
    <PatientStories />
    <Blog />
    <Offer />

   
  </section>
</template>

<script>
import DownloadApps from '@/components/unit/DownloadApps'
export default {
  name: "Homepage",
  components: { DownloadApps },


  mounted() {
    this.$store.dispatch("service/reset_en_service");
    this.$store.dispatch("service/reset_ar_service");
    this.$store.dispatch("doctor/reset_en_doctor");
    this.$store.dispatch("doctor/reset_ar_doctor");
    this.$store.dispatch("category/reset_en_category");
    this.$store.dispatch("category/reset_ar_category");
    this.$store.dispatch("tag/reset_en_tag");
    this.$store.dispatch("tag/reset_ar_tag");
  },
};
</script>
<style lang="scss" scoped>
.splide {
  .splide__track {
    padding: 0 !important;
  }
}
</style>
