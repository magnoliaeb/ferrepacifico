<template>
  <!-- menu rigth filtros -->
  <v-navigation-drawer
    :value="showFilter"
    max-width="370"
    right
    class="d-lg-none"
    fixed
    v-click-outside="clickOutside"
  >
    <v-row class="justify-center pt-10">
      <v-col cols="11" class="pt-0">
        <FilterProducts />
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    showFilter() {
      return this.$store.getters["website/getShowFilter"];
    },
  },
  methods: {
    closeMenu() {
      this.$store.dispatch("website/showFilter", false);
    },

    clickOutside(event) {
      if (event.target.id !== "filter") {
        this.closeMenu();
      }
    },
  },
};
</script>

<style lang="sass" scoped></style>
