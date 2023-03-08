<template>
  <section class="banner">
    <v-row class="fill-height align-end align-md-center">
      <v-col cols="12" class="">
        <h2 class="text-uppercase">Nosotros</h2>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/imgs/web/nosotros/banner-1.jpg");
}
h2 {
  font-size: $fs-4xl;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
}

@media screen and (min-width: $md) {
  .banner {
    height: 268px;
  }
}
</style>
