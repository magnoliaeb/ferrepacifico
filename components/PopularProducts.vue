<template>
  <v-row class="popular py-10 py-md-16">
    <v-col>
      <div class="content">
        <v-row class="">
          <v-col cols="12">
            <heading-title>
              <template #left>
                <p class="mb-0">Productos</p>
                <h2>Destacados</h2>
                <div class="line"></div>
              </template>
              <template #rigth>
                <nuxt-link :to="{ name: 'productos' }">Ver productos</nuxt-link>
              </template>
            </heading-title>
          </v-col>
        </v-row>
        <SliderPopularProducts class="d-md-none" :products="products" />
        <v-row class="justify-center justify-md-start">
          <v-col
            class="d-none d-md-block"
            v-for="(product, index) in products"
            :key="index"
            cols="6"
            md="4"
            lg="3"
          >
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import SliderPopularProducts from "./SliderPopularProducts.vue";
export default {
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
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto3",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto4",
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

  components: { ProductCard, SliderPopularProducts },
};
</script>

<style lang="scss" scoped>
.popular {
  background-color: #f6f6f6 !important;
}
</style>
