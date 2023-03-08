<template>
  <div class="filter">
    <div class="d-flex justify-space-between align-center mb-3">
      <!-- <v-breadcrumbs class="px-0" :items="items"> </v-breadcrumbs> -->
      <heading-title>
        <template #left>
          <p class="mb-0">Mantente actualizado en</p>
          <h1>ferreblog</h1>
          <div class="line"></div>
        </template>
      </heading-title>
      <div class="icon hidden-lg-and-up">
        <v-btn depressed icon dark @click="drawerFilter">
          <img src="../assets/imgs/web/icons/filter.svg" alt="filter-icon" />
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
import HeadingTitle from "./HeadingTitle.vue";
export default {
  components: { HeadingTitle },
  computed: {
    items() {
      let items = [
        {
          text: "Blog",
          href: "/posts",
          disabled: false,
        },
      ];

      items[items.length - 1].disabled = true;

      return items;
    },
  },
  methods: {
    drawerFilter() {
      this.$store.dispatch("posts/drawerFilter", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  z-index: 300;
  height: 100%;
}

// .filter {
//   position: relative;
// }
</style>
