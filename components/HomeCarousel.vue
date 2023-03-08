<template>
  <section class="home no-gutters grey lighten-4">
    <client-only>
      <VueSlickCarousel v-bind="slickOptions" :dots="true">
        <div
          v-for="(item, index) in slides"
          :key="index"
          class="bg-img"
          :style="{
            backgroundImage: `url(${require('../assets/imgs/web/home/' +
              item.image)})`,
          }"
        >
          <div class="content fill-height" style="position: relative">
            <v-row
              class="pb-16 fill-height align-end justify-center justify-md-start"
            >
              <v-col cols="12" sm="10" md="7" lg="7" xl="5" class="pl-md-0">
                <h2 class="mb-2">{{ item.title }}</h2>
                <h3 class="mb-6">{{ item.description }}</h3>
                <v-btn outlined depressed class="px-10">{{
                  item.button_text
                }}</v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
      },
      slides: [
        {
          id: 1,
          title: "Tenemos increibles descuentos",
          description: "Compra tus marcas favoritas",
          image: "Banner.png",
          button_text: "descubre nuestras marcas",
        },
        {
          id: 1,
          title: "Tenemos increibles descuentos",
          description: "Compra tus marcas favoritas",
          image: "banner2.jpg",
          button_text: "descubre nuestras marcas",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-img,
.home {
  height: 90vh;
  background-size: cover;
}

.home .slick-slider {
  > :first-child {
    width: 100%;
  }
}

h2 {
  font-size: $fs-6xl;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
  color: #ffffff;
}
h3 {
  font-size: $fs-2xl;
  text-transform: uppercase;
  text-align: left;
  color: #ffffff;
  font-weight: 800;
}
button {
  font-size: $fs-xs !important;
  color: white !important;
  font-weight: bold !important;
  border: 2px solid !important;
}

@media screen and (min-width: $md) {
  .bg-img,
  .home {
    height: 60vh;
  }
}
@media screen and (min-width: $lg) {
  .bg-img,
  .home {
    height: 70vh;
  }
}
</style>
