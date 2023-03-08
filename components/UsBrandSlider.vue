<template>
  <section v-if="brands && brands.length" class="brand py-10">
    <div class="content" style="position: relative">
      <v-row>
        <v-col cols="12">
          <heading-title>
            <template #left>
              <p class="mb-0">Nuestras mejores</p>
              <h2>Marcas</h2>
              <div class="line"></div>
            </template>
            <template #rigth>
              <nuxt-link :to="{ name: 'productos' }">Ver marcas</nuxt-link>
            </template>
          </heading-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <client-only>
            <VueSlickCarousel v-bind="slickOptions">
              <nuxt-link
                v-for="(brand, index) in brands"
                :key="index"
                :to="{ path: '/productos', query: { brand: brand.name } }"
              >
                <img
                  class="scale"
                  :src="require(`../assets/imgs/web/brands/${brand.icon}.jpg`)"
                  :alt="brand.name"
                  width="90%"
                />
              </nuxt-link>

              <template #prevArrow>
                <div class="custom-arrow" style="height: 16px; width: 16px">
                  <svg
                    style="height: 100%; width: 100%; color: #000000"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="{2}"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </template>
              <template #nextArrow>
                <div class="custom-arrow" style="height: 16px; width: 16px">
                  <svg
                    style="height: 100%; width: 100%; color: #000000"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="{2}"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </template>
            </VueSlickCarousel>
          </client-only>
        </v-col>
      </v-row>
    </div>
  </section>
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
      slickOptions: {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        initialSlide: 0,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,

        // centerMode: true,
        // centerPadding: "20",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              arrows: true,
              //   centerMode: true,
              //   centerPadding: "20px",
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 3,
              arrows: true,
              //   centerMode: true,
              //   centerPadding: "20px",
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 2,
              arrows: true,
              //   centerMode: true,
              //   centerPadding: "20px",
            },
          },
        ],
      },
    };
  },
  async fetch() {
    if (!this.brands.length) {
      this.brands = await this.$store.dispatch("brand/all").then((r) => r.data);
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 124px;
  object-fit: contain;
  display: block;
}

img {
  display: block;
  width: 100%;
}

@media screen and (min-width: $md) {
  img {
    height: 150px;
  }
}
</style>
