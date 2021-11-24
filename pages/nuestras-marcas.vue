<template>
  <div class="content py-4 py-lg-8">
    <v-row>
      <v-col cols="12">
        <div class="title-header">
          <p class="mb-0">nuestras</p>
          <h2>marcas</h2>
          <div class="line"></div>
        </div>
      </v-col>
      <v-col
        class="pb-0"
        cols="4"
        md="3"
        lg="2"
        v-for="(brand, index) in brands"
        :key="index"
      >
        <img
          :src="require(`@/assets/img/Web/Logos/${brand.url}.jpg`)"
          :alt="brand.img"
          width="90%"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { name: "Cruz Azul", url: "CruzAzul", w: "73", h: "43" },
        { name: "Mexichem", url: "Mexichem", w: "60", h: "50" },
        { name: "Galvasid", url: "Galvasid", w: "60", h: "60" },
        { name: "Arcerol", url: "Arcerol", w: "60", h: "60" },
        { name: "Panel W", url: "PanelW", w: "60", h: "60" },
        { name: "mexalit", url: "mexalit", w: "60", h: "20" },
        { name: "eureka", url: "eureka", w: "64", h: "31" },
        { name: "Coflex", url: "Coflex", w: "46", h: "14" },
        {
          name: "aceros nacionales",
          url: "acerosnacionales",
          w: "60",
          h: "60",
        },
        { name: "werner", url: "werner", w: "64", h: "63" },
        { name: "gerdau", url: "gerdau", w: "48", h: "41" },
        { name: "Panel Rey", url: "PanelRey", w: "76", h: "43" },
        { name: "Ternium", url: "Ternium", w: "", h: "" },
        { name: "Cinsa", url: "Cinsa", w: "", h: "" },
        { name: "Rotoplas", url: "Rotoplas", w: "", h: "" },
        { name: "Grupoprotexa", url: "Grupoprotexa", w: "", h: "" },
        { name: "Bexel", url: "Bexel", w: "", h: "" },
        { name: "Cato", url: "Cato", w: "", h: "" },
        { name: "porcelanite", url: "porcelanite", w: "", h: "" },
        { name: "xtool", url: "xtool", w: "", h: "" },
        { name: "Pacific Standard", url: "PacificStandard", w: "", h: "" },
        { name: "aisla forte", url: "aislaforte", w: "", h: "" },
        { name: "makita", url: "makita", w: "", h: "" },
        { name: "Urrea", url: "Urrea", w: "", h: "" },
        { name: "Phillips", url: "Phillips", w: "", h: "" },
        { name: "pennsylvania", url: "pennsylvania", w: "", h: "" },
        { name: "Truper", url: "Truper", w: "", h: "" },
        { name: "Simon", url: "Simon", w: "", h: "" },
        { name: "Tecnolite", url: "Tecnolite", w: "", h: "" },
        { name: "Sika", url: "Sika", w: "", h: "" },
        { name: "Maxxireja", url: "Maxxireja", w: "", h: "" },
        { name: "Evans", url: "Evans", w: "", h: "" },
        { name: "condumex", url: "condumex", w: "", h: "" },
        { name: "iusa", url: "iusa", w: "", h: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// .title-header {
//   .line {
//     width: 12% !important;
//   }
// }

// @media screen and (min-width: $md) {
//   .title-header {
//     .line {
//       width: 7% !important;
//     }
//   }
// }
</style>