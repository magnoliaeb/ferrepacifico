<template>
  <div v-if="product" class="">
    <v-row class="no-gutters">
      <v-col cols="12" md="6">
        <h2 class="mb-6">ESPECIFICACIONES TÉCNICAS</h2>
        <v-row class="mt-8">
          <v-col
            cols="12"
            md="6"
            class="mb-2 mb-md-8"
            v-for="(item, index) in product.especifications"
            :key="index"
          >
            <div class="d-flex align-baseline">
              <v-icon class="icon" left> mdi-chevron-right </v-icon>

              <div class="">
                <p class="mb-0">
                  {{ item.attribute }}
                </p>
                <p class="mb-0">{{ item.value }}</p>
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
  font-size: $fs-xs;
}

@media screen and (min-width: $md) {
}
</style>
