<template>
  <div class="text-center empty text-center d-flex justify-center d-flex">
    <div class="empty-img d-flex justify-center align-center">
      <!-- <img
        class=""
        src="../assets/img/web/bg-not-product.jpg"
        alt="bg-not-product"
      /> -->
      <div class="empty-text">
        <div>
          <p>Próximamente…</p>
          <h1>¡Espéralo!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// .empty {
//   height: 100vh;
// }

p {
  color: #00a0df;
  font-size: $fs-base;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

h1 {
  color: #002a49;
  font-size: $fs-2xl;
  font-weight: 700;
  text-transform: uppercase;
}

.empty-text {
  position: absolute;
  top: 0;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
}

.empty-img {
  width: 100%;
  max-width: 810px;
  height: 350px;
  position: relative;
}

img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media screen and (min-width: $md) {
  .empty-img {
    height: 450px;
  }
}
</style>
