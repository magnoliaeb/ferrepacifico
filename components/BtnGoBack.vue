<template>
  <v-btn text class="" @click="goBack">
    <v-icon left color="black">mdi-chevron-left </v-icon>
    <span>Regresar</span>
  </v-btn>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  span {
    text-transform: capitalize !important;
    font-size: $fs-sm !important;
    color: #000000 !important;
    font-weight: 400 !important;
    text-align: center !important;
  }
}
</style>
