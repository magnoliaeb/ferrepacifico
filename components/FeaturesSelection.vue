<template>
  <div class="">
    <v-row class="justify-space-between">
      <v-col cols="12" md="">
        <h2 class="mb-6">PRINCIPALES CARACTERÍSTICAS</h2>
        <ul>
          <li v-for="(feature, index) in product.characteristics" :key="index">
            <p>{{ feature }}</p>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" md="auto">
        <v-divider :vertical="$vuetify.breakpoint.mdAndUp" dark></v-divider>
      </v-col>
      <v-col cols="12" md="">
        <h2 class="mb-6">ACCESORIOS INCLUIDOS</h2>
        <v-row class="mt-8">
          <v-col
            cols="12"
            sm="6"
            class="mb-2 mb-md-8"
            v-for="(accesory, index) in product.accesories"
            :key="index"
          >
            <div class="d-flex align-baseline">
              <v-icon class="icon" left> mdi-chevron-right </v-icon>

              <div class="">
                <p class="mb-0">
                  {{ accesory.attribute }}
                </p>
                <p class="mb-0">{{ accesory.value }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    eavs() {
      // return this.product.eavs ?? [];
    },

    accesories() {
      return this.eavs.filter((eav) => eav.type == "ACCESORIOS INCLUIDOS");
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: $fs-3xl;
  color: #ffffff;
  text-align: left;
}

p {
  font-size: $fs-base;
  color: #ffffff;
  list-style: square;
  list-style-position: outside;
}
.icon {
  color: white;
  font-size: $fs-sm;
}
li {
  list-style: circle;
}

@media screen and (min-width: $md) {
  .icon {
    font-size: $fs-sm;
  }
}
</style>
