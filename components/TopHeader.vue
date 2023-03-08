<template>
  <v-system-bar height="" app absolute class="top-header">
    <div class="content justify-center d-flex">
      <div class="d-flex align-center">
        <img
          class="mr-2"
          src="../assets/imgs/web/icons/Carrito.svg"
          alt="carrito-ferrepacifico"
        />
        <p class="mb-0">Envío gratis a partir de $599.00</p>
      </div>
    </div>
  </v-system-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-header {
  p {
    font-size: $fs-sm;
    color: #373736;
  }
}
img {
  width: 18px;
  height: 13px;
}

@media screen and (min-width: $md) {
  .top-header {
  }
  img {
    width: 25px;
    height: 20px;
  }
}
</style>
