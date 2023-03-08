<template>
  <section class="py-6 py-lg-16">
    <div class="content">
      <HeaderFilter />

      <v-row>
        <v-col cols="12" lg="2" xl="2" class="hidden-md-and-down">
          <FilterProducts />
        </v-col>
        <v-col cols="12" lg="10" xl="10" class="px-0 px-lg-3">
          <GridProducts />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import GridProducts from "../../components/GridProducts.vue";
import HeaderFilter from "../../components/HeaderFilter.vue";
import FilterProducts from "../../components/FilterProducts.vue";
export default { components: { GridProducts, HeaderFilter, FilterProducts } };
</script>

<style lang="scss" scoped></style>
