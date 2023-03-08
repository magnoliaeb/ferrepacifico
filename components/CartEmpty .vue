<template>
  <div class="empty">
    <v-row class="justify-center fill-height align-center">
      <v-col cols="12" sm="8" md="7" lg="5" xl="4">
        <img src="../assets/imgs/sin-producto.svg" alt="sin-producto" />
        <div class="text-center mt-6 mb-4">
          <h1>Carrito de compra</h1>
          <p class="mb-6">Su carrito actualmente está vacío.</p>
          <div class="d-flex justify-center">
            <v-btn @click="goTo" dark color="" class="button-primary" depressed>
              <span class="text-uppercase font-weight-medium"
                >Continuar la compra</span
              >
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    goTo() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: 0 auto;
  height: 100px;
  width: 100px;
}

.empty {
  height: 100vh;
}

button {
  height: 43px !important;
  font-size: $fs-base;
  font-weight: bold;
  width: 100%;
  background-color: $blue !important;
  color: white !important;
  max-width: 280px !important;
}

p {
  font-size: $fs-base;
}

h1 {
  font-size: $fs-xl;
  color: $secondary;
  text-transform: uppercase;
  font-weight: 600;
}
@media screen and (min-width: $md) {
}
</style>
