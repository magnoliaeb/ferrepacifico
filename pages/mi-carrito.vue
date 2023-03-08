<template>
  <div class="">
    <CartEmpty v-if="emptyCart" />
    <section v-else class="py-6 py-lg-16">
      <div class="content">
        <v-row class="align-center">
          <v-col cols="12" sm="auto">
            <BtnGoBack />
          </v-col>
          <v-col cols="12" sm="auto">
            <h2>Carrito</h2>
          </v-col>
        </v-row>
        <v-row class="align-start">
          <v-col cols="12" md="12" lg="7" class="">
            <!-- tableCard -->
            <TableCart :products="products" />
          </v-col>
          <v-col cols="12" sm="auto" class="" style="position: sticky; top: 0%">
            <!-- resumen del carrito -->
            <ResumenCart />
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
import CartEmpty from "../components/CartEmpty .vue";
import ResumenCart from "../components/ResumenCart.vue";
import TableCart from "../components/TableCart.vue";
import BtnGoBack from "../components/BtnGoBack.vue";
export default {
  //   head: {
  //     title: "Carrito",
  //   },
  components: { CartEmpty, ResumenCart, TableCart, BtnGoBack },
  computed: {
    emptyCart() {
      return this.products.length <= 0;
      //   return this.$store.state.cart.content.number_items <= 0;
    },
  },
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
          img: "producto3",
          total: 10,
          unit_total: 20,
          sku: "E2351",
          quantity: 1,
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto2",
          total: 10,
          unit_total: 20,
          sku: "E2351",
          quantity: 1,
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto1",
          total: 10,
          unit_total: 20,
          sku: "E2351",
          quantity: 1,
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto4",
          total: 10,
          unit_total: 20,
          sku: "E2351",
          quantity: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: $fs-lg;
  color: #373736;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
