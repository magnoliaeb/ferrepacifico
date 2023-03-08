<template>
  <v-row class="align-center white py-md-14">
    <v-col cols="12" md="6">
      <div class="content">
        <div class="title-header my-6">
          <p class="mb-0">Nuestra</p>
          <h2>Compañia</h2>
          <div class="line"></div>
        </div>
        <p>
          Ferrepacifico tuvo su origen en La Huerta, Jalisco el 1° de Mayo de
          1992, siendo su antecesora la empresa Ferretera de la costa, fundada
          en 1974 en Villa Purificación, Jalisco, por Don Gorgonio García
          Palomera, quien fue pionero en su ramo. Ferrepacifico logró liderazgo
          regional; abriendo las puertas de su primer sucursal en San Patricio
          Melaque, Jalisco en el año 2000, fusionando de manera simultánea a su
          antecesora.
        </p>
      </div>
    </v-col>
    <v-col class="bg-content" cols="12" md="6">
      <div class="bg-img"></div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  font-size: $fs-base;
  line-height: 30px;
  color: #373736;
  font-weight: 300;
}

.bg-content {
  height: 360px;
  position: relative;
}

.bg-img {
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
  background-position: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/imgs/web/nosotros/img1.jpg");
}

@media screen and (min-width: $md) {
  .bg-content {
    height: 450px;
  }
}
</style>
