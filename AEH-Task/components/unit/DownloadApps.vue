<template>
  <div class="download-apps">
    <div class="container text-center text-white">
      <h6>{{ $t('NeedaDoctor') }}</h6>
      <h2 v-if="$i18n.locale == 'ar'" class="mt-4 mb-4">
        <span class="d-none d-sm-block"
          >قم بتنزيل تطبيقات الجوال الخاصة بنا<br />
          واحصل على استشارة عبر الإنترنت الآن</span
        >
        <span class="d-block d-sm-none"
          >قم بتحميل تطبيق الجوال الخاص بنا الآن!</span
        >
      </h2>
      <h2 v-if="$i18n.locale == 'en'" class="mt-4 mb-4">
        <span class="d-none d-sm-block"
          >Download our mobile apps<br />
          and get online consultation now</span
        >
        <span class="d-block d-sm-none">Download Our Mobile App Now!</span>
      </h2>
      <div class="download-logos d-flex justify-content-center">
        <a
          href="https://play.google.com/store/apps/details?id=net.andalusiagroup.andalusiabooking"
          target="_blank"
          class="mr-4 ml-4"
          ><img src="~assets/images/google-play.png" class="mb-2 img-fluid"
        /></a>
        <a
          href="https://apps.apple.com/us/app/dotcare-for-health-lifestyle/id972029385"
          target="_blank"
          class="mr-4 ml-4"
          ><img src="~assets/images/app-store.png" class="mb-2 img-fluid"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadApps',
}
</script>

<style lang="scss" scoped>
$small: 768px;
.download-apps {
  background-image: url('~assets/images/downloadourapps-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 70px 0;
  h6 {
    font-size: 26px;
    @media screen and (max-width: $small) {
      font-size: 20px;
      font-weight: bold;
    }
  }
  h2 {
    font-size: 48px;
    font-weight: bold;
    line-height: 1.21;
    @media screen and (max-width: $small) {
      font-size: 20px;
      font-weight: normal;
    }
  }
}
.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}
.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}
</style>
