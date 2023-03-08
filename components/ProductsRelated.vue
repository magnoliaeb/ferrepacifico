<template>
  <v-row class="py-6">
    <v-col cols="12">
      <div class="title-header">
        <p>PRODUCTOS</p>
        <h2>RELACIONADOS</h2>
        <div class="line"></div>
      </div>
    </v-col>
    <v-col cols="12" class="px-0">
      <ProductRetaledSlider :products="products" />
    </v-col>
  </v-row>
</template>

<script>
import ProductRetaledSlider from "./ProductRetaledSlider.vue";
export default {
  components: { ProductRetaledSlider },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto1",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto1",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto2",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
