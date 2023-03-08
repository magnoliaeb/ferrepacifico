<template>
  <v-row v-if="products && products.length">
    <v-col cols="12" style="position: relative">
      <client-only>
        <VueSlickCarousel v-bind="slickOptions">
          <div class="px-2" v-for="(product, index) in products" :key="index">
            <div class="product-content">
              <ProductCard :product="product" />
            </div>
          </div>

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
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  data() {
    return {
      slickOptions: {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        // pauseOnDotsHover: true,
        // pauseOnFocus: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        variableWidth: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "10px",

        responsive: [],
      },
    };
  },
  components: { ProductCard },
};
</script>

<style lang="scss" scoped>
.custom-arrow.slick-arrow.slick-next {
  right: -20px !important;
}
.custom-arrow.slick-arrow.slick-prev {
  left: -20px !important;
}
.product-content {
  width: 250px;
}
</style>
