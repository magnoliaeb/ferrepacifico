<template>
  <div class="py-6 py-lg-16">
    <div class="content">
      <v-row class="">
        <v-col cols="12">
          <v-breadcrumbs :items="breadcrumbs" class="px-0"> </v-breadcrumbs>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <SingleProduct class="" />
    </div>
    <FeatureSingleProduct />
    <div class="content">
      <ProductsRelated />
    </div>
  </div>
</template>

<script>
import ProductsRelated from "../../../components/ProductsRelated.vue";
import FeatureSingleProduct from "../../../components/FeatureSingleProduct.vue";
import SingleProduct from "../../../components/SingleProduct.vue";
export default {
  components: { ProductsRelated, FeatureSingleProduct, SingleProduct },
  data() {
    return {
      ready: false,
    };
  },
  head() {
    return {
      title: this.computedTitle,
      meta: [
        {
          hid: "description",
          name: this.computedTitle,
          content: this.computedDescription,
        },
        { hid: "keywords", name: "keywords", content: "" },
      ],
    };
  },
  computed: {
    computedTitle() {
      return "Detalle del producto";
    },
    computedDescription() {
      return "";
    },
    breadcrumbs() {
      let breadcrumbs = [
        {
          text: "Productos",
          href: "/productos",
          disabled: false,
        },
        {
          text: "Acero",
          href: "/productos?category=3",
          disabled: false,
        },
        {
          text: "Soldadora inversor",
          href: "/productos",
          disabled: true,
        },
      ];

      return breadcrumbs;
    },
  },
};
</script>

<style lang="scss" scoped></style>
