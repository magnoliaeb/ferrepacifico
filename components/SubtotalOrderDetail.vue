<template>
  <div>
    <v-row class="align-center justify-space-between">
      <v-col cols="auto">
        <p>Subtotal</p>
      </v-col>
      <v-col cols="auto">
        <span>{{ $util.getMoneyFormat(45378.0) }}</span>
      </v-col>
    </v-row>
    <v-row class="align-center justify-space-between">
      <v-col cols="auto">
        <p>Descuento</p>
      </v-col>
      <v-col cols="auto">
        <span>{{ $util.getMoneyFormat(200.0) }}</span>
      </v-col>
    </v-row>
    <v-row class="align-center justify-space-between">
      <v-col cols="auto">
        <p>IVA</p>
      </v-col>
      <v-col cols="auto">
        <span>{{ $util.getMoneyFormat(10) }}</span>
      </v-col>
    </v-row>
    <v-row class="align-center justify-space-between">
      <v-col cols="auto">
        <p>Costo de envío</p>
      </v-col>
      <v-col cols="auto">
        <span>{{ $util.getMoneyFormat(134) }}</span>
      </v-col>
    </v-row>
    <v-row class="align-center justify-space-between">
      <v-col cols="auto">
        <p class="total">Total</p>
      </v-col>
      <v-col cols="auto">
        <span class="total">{{ $util.getMoneyFormat(66578.0) }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style lang="scss" scoped>
* {
  font-size: $fs-base;
  color: #272727;
}
p.total,
span.total {
  font-size: $fs-md;
  font-weight: 500;
}
</style>
