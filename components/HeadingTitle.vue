<template>
  <div class="d-flex justify-space-between">
    <div class="title-header">
      <slot name="left"></slot>
    </div>
    <slot name="rigth"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-size: $fs-xl;
  font-weight: 800;
}
p {
  font-size: $fs-sm;
}
a {
  font-size: $fs-xs;
  letter-spacing: 1px;
  color: #00a0df;
  font-weight: bold;
  text-transform: uppercase;
}

@media screen and (min-width: $md) {
}
</style>
