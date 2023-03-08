<template>
  <section class="categories py-10 py-md-16">
    <div class="content">
      <v-row>
        <v-col cols="12">
          <heading-title>
            <template #left>
              <p class="mb-0">Nuestras</p>
              <h2>Categorías</h2>
              <div class="line"></div>
            </template>
            <template #rigth>
              <nuxt-link :to="{ name: 'productos' }">Ver categorías</nuxt-link>
            </template>
          </heading-title>
        </v-col>
      </v-row>
      <v-row class="mt-md-8 justify-center">
        <v-col
          cols="12"
          sm="6"
          lg="4"
          v-for="(category, index) in categories"
          :key="index"
        >
          <CategoryCard :category="category" />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import CategoryCard from "./CategoryCard.vue";
export default {
  data() {
    return {
      categories: [
        {
          icon: "icono1",
          name: "Aceros",
          img: "categoria1",
          id: 1,
        },
        {
          icon: "icono2",
          name: "Ferretería",
          img: "categoria2",
          id: 2,
        },
        {
          icon: "icono3",
          name: "Terminados",
          img: "categoria3",
          id: 3,
        },
      ],
    };
  },

  components: { CategoryCard },
};
</script>

<style lang="scss" scoped>
.categories {
  background-color: $blue;
}
h2 {
  color: white !important;
}
.line {
  background-color: white !important;
}
</style>
