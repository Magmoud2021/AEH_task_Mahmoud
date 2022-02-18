export function splideUpdate(stateName, sliderName = null) {
  return {
    updated: function () {
      this.$nextTick(function () {
        if (this[stateName] !== undefined && this[stateName].length !== 0 && this.$refs[sliderName]) {
          this.$refs[sliderName].splide.refresh()
        }
      })
    },
  }
}
