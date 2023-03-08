<template>
  <div class="content py-6 py-lg-16">
    <v-row>
      <v-col cols="12">
        <div class="title-header">
          <p class="mb-0">nuestras</p>
          <h2>marcas</h2>
          <div class="line"></div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class=""
        cols="6"
        sm="3"
        md="3"
        lg="2"
        v-for="(brand, index) in brands"
        :key="index"
      >
        <router-link :to="{ path: '/productos', query: { brand: brand.name } }">
          <img
            class="scale"
            :src="require(`../assets/imgs/web/brands/${brand.icon}.jpg`)"
            :alt="brand.name"
            width="90%"
          />
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { name: "acerosnacionales", icon: "acerosnacionales" },
        { name: "aislaforte", icon: "aislaforte" },
        { name: "Arcerol", icon: "Arcerol" },
        { name: "Bexel", icon: "Bexel" },
        { name: "Cato", icon: "Cato" },
        { name: "Cinsa", icon: "Cinsa" },
        { name: "Coflex", icon: "Coflex" },
        { name: "condumex", icon: "condumex" },
        { name: "CruzAzul", icon: "CruzAzul" },
        { name: "eureka", icon: "eureka" },
        { name: "Evans", icon: "Evans" },
        { name: "Galvasid", icon: "Galvasid" },
        { name: "gerdau", icon: "gerdau" },
        { name: "Grupoprotexa", icon: "Grupoprotexa" },
        { name: "iusa", icon: "iusa" },
        { name: "makita", icon: "makita" },
        { name: "Maxxireja", icon: "Maxxireja" },
        { name: "mexalit", icon: "mexalit" },
        { name: "Mexichem", icon: "Mexichem" },
        { name: "PacificStandard", icon: "PacificStandard" },
        { name: "PanelRey", icon: "PanelRey" },
        { name: "PanelW", icon: "PanelW" },
        { name: "pennsylvania", icon: "pennsylvania" },
        { name: "Phillips", icon: "Phillips" },
        { name: "porcelanite", icon: "porcelanite" },
        { name: "Rotoplas", icon: "Rotoplas" },
        { name: "Sika", icon: "Sika" },
        { name: "Simon", icon: "Simon" },
        { name: "Tecnolite", icon: "Tecnolite" },
        { name: "Ternium", icon: "Ternium" },
        { name: "Truper", icon: "Truper" },
        { name: "Urrea", icon: "Urrea" },
        { name: "werner", icon: "werner" },
        { name: "xtool", icon: "xtool" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
