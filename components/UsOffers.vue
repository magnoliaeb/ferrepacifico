<template>
  <div class="popular py-10">
    <div class="content">
      <v-row class="">
        <v-col cols="12">
          <heading-title>
            <template #left>
              <p class="mb-0">Nuestras mejores</p>
              <h2>Ofertas</h2>
              <div class="line"></div>
            </template>
            <template #rigth>
              <nuxt-link :to="'/productos'">Ver ofertas</nuxt-link>
            </template>
          </heading-title>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col v-for="(offert, index) in offerts" :key="index" cols="auto">
          <OffertCard :offert="offert" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import OffertCard from "./OffertCard.vue";
export default {
  components: { OffertCard },

  data() {
    return {
      offerts: [
        {
          brand: "xtools",
          title: "Inversores",
          discount: "25% de desuento",
          link: "",
          img: "promo1",
          button_text: "obtener ahora",
        },
        {
          brand: "xtools",
          title: "Herramientas",
          discount: "25% de desuento",
          link: "",
          img: "promo2",
          button_text: "obtener ahora",
        },
        {
          brand: "xtools",
          title: "Caretas",
          discount: "25% de desuento",
          link: "",
          img: "promo3",
          button_text: "obtener ahora",
        },
        {
          brand: "xtools",
          title: "Construcción",
          discount: "25% de desuento",
          link: "",
          img: "promo4",
          button_text: "obtener ahora",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
