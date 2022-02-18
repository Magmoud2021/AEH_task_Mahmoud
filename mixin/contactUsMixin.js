export const contactUsObj = {
  data: () => ({
    showMessage: false,
    showErrorMessage: false,
    contactInfo: {
      name: '',
      phone: '',
      email: '',
      message: '',
    }
  }),
  methods: {
    onSubmit() {
      this.$axios.post('/api/contactus', this.contactInfo).then(res => {
        this.contactInfo.name = this.contactInfo.email = this.contactInfo.phone = this.contactInfo.message = '';

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.contactForm.reset();
        });

        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 4000)
      }).catch(error => {
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000)
      })
    }
  },
}
