<template>
  <v-row class="">
    <v-col cols="12" class="banner">
      <div class="content">
        <v-row class="text-right justify-end">
          <v-col class="" cols="12" md="10" lg="8">
            <h2>DESDE CIMENTACIÓN HASTA TERMINADOS</h2>
          </v-col>
          <v-col class="" cols="12" md="10" lg="7">
            <p>
              Comprometidos con sus clientes, con el respaldo de marcas líderes
              nacionales e internacionales. Ferrepacifico pone a su disposición
              los productos necesarios para la realización de su obra de manera
              integral.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      banner: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: 516px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/imgs/web/home/banner2.jpg");
}
h2 {
  font-size: $fs-2xl;
  letter-spacing: 2px;
  color: #ffffff;
  text-align: right;
  font-weight: bold;
}
p {
  font-size: $fs-lg;
  color: #ffffff;
  font-weight: 300;
  text-align: right;
}

@media screen and (min-width: $md) {
  .banner {
    height: 388px;
  }
}
</style>
