<template>
  <div class="container booking hold-booking">
    <div class="row booking__row">
      <div class="col-12 p-0">
        <h3 class="heading-booking">{{ $t('menu.booknow') }}</h3>
      </div>
      <div class="col-12 col-lg-4 pr-1 pl-1">
        <h4 class="sub-heading-booking">
          {{ $t('bookNowForm.choosehospital') }}
        </h4>
        <select
          class="select-option"
          @change="onChangeHospital($event.target.value)"
        >
          <option selected disabled>
            {{ $t('bookNowForm.SelectHospital') }}
          </option>
          <option
            v-for="hospital in hospitalsFilter"
            :key="hospital.HospitalID"
            :value="hospital.HospitalID"
          >
            {{ hospital.HospitalName }}
          </option>
        </select>
      </div>
      <div class="col-12 col-lg-4 pr-1 pl-1">
        <h4 class="sub-heading-booking">
          {{ $t('bookNowForm.choosespeciality') }}
        </h4>
        <select
          class="select-option"
          @change="onChangeSpeciality($event.target.value)"
        >
          <option selected disabled>
            {{ $t('bookNowForm.SelectSpeciality') }}
          </option>
          <option
            v-for="speciality in specialities"
            :key="speciality.SpecialtyID"
            :value="speciality.SpecialtyID"
          >
            {{ speciality.SpecialtyName }}
          </option>
        </select>
      </div>
      <div class="col-12 col-lg-4 pr-1 pl-1 d-none">
        <h4 class="sub-heading-booking">
          {{ $t('bookNowForm.chooseservice') }}
        </h4>
        <select
          class="select-option"
          @change="onChangeService($event.target.value)"
        >
          <option selected disabled>
            {{ $t('bookNowForm.SelectService') }}
          </option>
          <option
            v-for="service in services"
            :key="service.ClinicTagID"
            :value="service.ClinicTagID"
          >
            {{ service.ClinicTagName }}
          </option>
        </select>
      </div>
      <div class="col-12 col-lg-4 pr-1 pl-1 d-none">
        <h4 class="sub-heading-booking">
          {{ $t('bookNowForm.choosedoctor') }}
        </h4>
        <select
          class="select-option"
          @change="onChangeDoctor($event.target.value)"
        >
          <option selected disabled>
            {{ $t('bookNowForm.SelectDoctor') }}
          </option>
          <option
            v-for="doctor in doctors"
            :key="doctor.PhysicianID"
            :value="doctor.PhysicianName"
          >
            {{ doctor.PhysicianName }}
          </option>
        </select>
      </div>
      <div class="col-12 col-lg-4 pr-1 pl-1">
        <span class="booking__btn" role="button" @click="search"
          ><button class="search-btn booking__btn--reserve">
            {{ $t('SearchTitle') }}
          </button></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BookingBox',
  data() {
    return {
      specialities: [],
      services: [],
      doctors: [],
      hospitalId: '',
      specialityId: '',
      serviceId: '',
      doctorName: '',
    }
  },
  async fetch() {
    if (this.$i18n.locale === 'en') {
      if (Object.keys(this.$store.state.hospitals.en_hospitals).length === 0) {
        await this.$store.dispatch(`hospitals/load_en_hospitals`)
      }
    } else if (
      Object.keys(this.$store.state.hospitals.ar_hospitals).length === 0
    ) {
      await this.$store.dispatch(`hospitals/load_ar_hospitals`)
    }
  },
  computed: {
    // branches come from booking-portal
    ...mapState('hospitals', ['en_hospitals', 'ar_hospitals']),
    hospitals() {
      if (this.$i18n.locale === 'en') {
        return this.en_hospitals
      } else {
        return this.ar_hospitals
      }
    },
    hospitalsFilter() {
      return Array.from(this.hospitals).filter(
        (item) =>
          item.HospitalID === 65 ||
          item.HospitalID === 57 ||
          item.HospitalID === 59
      )
    },
  },
  methods: {
    onChangeHospital(id) {
      this.hospitalId = id
      if (this.$i18n.locale === 'ar') {
        this.$axios
          .$get(
            `https://booking.andalusiaegypt.com/OnlineBookingService/api/Speciality/GetClinicSpecialtyData?isArabic=true&hospitalIDs=${id}`
          )
          .then((res) => (this.specialities = res.SpecialityList))
      } else {
        this.$axios
          .$get(
            `https://booking.andalusiaegypt.com/OnlineBookingService/api/Speciality/GetClinicSpecialtyData?isArabic=false&hospitalIDs=${id}`
          )
          .then((res) => (this.specialities = res.SpecialityList))
      }
    },
    onChangeSpeciality(id) {
      this.specialityId = id
      if (this.$i18n.locale === 'ar') {
        this.$axios
          .$get(
            `https://booking.andalusiaegypt.com/OnlineBookingService/api/DoctorCustomized/GetPhysicianData?hospitalIDs=${this.hospitalId}&specialtyID=${this.specialityId}&clinicTagID=${id}&isArabic=true`
          )
          .then((res) => (this.doctors = res.PhysicianList))
      } else {
        this.$axios
          .$get(
            `https://booking.andalusiaegypt.com/OnlineBookingService/api/DoctorCustomized/GetPhysicianData?hospitalIDs=${this.hospitalId}&specialtyID=${this.specialityId}&clinicTagID=${id}&isArabic=false`
          )
          .then((res) => (this.doctors = res.PhysicianList))
      }
    },
    onChangeDoctor(name) {
      this.doctorName = name
    },
    search() {
      if (this.$i18n.locale === 'ar') {
        this.$axios
          .$get(
            `https://booking.andalusiaegypt.com/OnlineBookingService/api/SEO/GenerateSEOUrl?CountryID=1&HospitalIDs=${this.hospitalId}&ClinicTagID=&DoctorName=${this.doctorName}&SupervisoryList=%5B%5D&VisitingDoctorID=&SubSpecialtyList=&GenderList=&IsArabic=true&SearchDate=&IsVisitingDoctor=false&MonthID=&SpecialtyID=${this.specialityId}`
          )
          .then((res) => window.open(res, '_blank'))
      } else {
        this.$axios
          .$get(
            `https://booking.andalusiaegypt.com/OnlineBookingService/api/SEO/GenerateSEOUrl?CountryID=1&HospitalIDs=${this.hospitalId}&ClinicTagID=&DoctorName=${this.doctorName}&SupervisoryList=%5B%5D&VisitingDoctorID=&SubSpecialtyList=&GenderList=&IsArabic=false&SearchDate=&IsVisitingDoctor=false&MonthID=&SpecialtyID=${this.specialityId}`
          )
          .then((res) => window.open(res, '_blank'))
      }
    },
  },
}
</script>

<style scoped lang="scss">
// booking and filter
.hold-booking {
  position: relative;
  margin-top: -8%;
  z-index: 999;
}
.booking {
  background: #1474be;
  padding: 25px 40px 40px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  -webkit-box-shadow: 0 6px 16px -10px rgba(94, 94, 94, 1);
  -moz-box-shadow: 0 6px 16px -10px rgba(94, 94, 94, 1);
  box-shadow: 0 6px 16px -10px rgba(94, 94, 94, 1);
  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }
}

.booking__row {
  @media screen and (max-width: 992px) {
    margin: 0;
  }
}

.heading-booking,
.sub-heading-booking {
  text-transform: capitalize;
  font-weight: bolder;
  color: #fff;
  margin-bottom: 1rem;
}

.heading-booking {
  font-size: 26px;
}

.sub-heading-booking,
.select-option {
  font-size: 16px;
  line-height: 19px;
  color: #1474be;
  border-radius: 12px;
  padding: 8px 20px;
  border: none;
  text-transform: capitalize;

  @media (max-width: 767px) {
    padding: 10px 15px;
  }
}

.sub-heading-booking {
  background-color: #fff;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media (max-width: 992px) {
    margin-top: 1rem;
  }
}

.select-option {
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 13px;
}

.booking__btn {
  height: 100%;

  &--reserve {
    &:hover {
      color: #fff;
      background-color: #0a3a5f;
      border-color: #0a3a5f;
    }

    @media (max-width: 767px) {
      font-size: 22px;
      padding: 0;
    }
  }
}
</style>
