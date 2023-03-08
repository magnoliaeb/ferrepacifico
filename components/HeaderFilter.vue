<template>
  <div class="filter">
    <v-row class="justify-space-between align-center">
      <v-col cols="12" sm="auto" class="">
        <v-breadcrumbs class="px-0" :items="items"> </v-breadcrumbs>
      </v-col>
      <v-col cols="12" sm="auto" class="d-lg-none justify-end d-flex">
        <div class="icon">
          <v-btn depressed icon id="filter" dark @click="openFilter">
            <img src="../assets/imgs/web/icons/filter.svg" alt="filter-icon" />
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Productos",
          href: "/productos",
          disabled: true,
        },
        {
          text: "EUREKA",
          href: "/productos",
          disabled: true,
        },
        {
          text: "NC5ZYRWNNB",
          href: "/productos",
          disabled: false,
        },
      ],
    };
  },
  methods: {
    openFilter() {
      this.$store.dispatch("website/showFilter", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
