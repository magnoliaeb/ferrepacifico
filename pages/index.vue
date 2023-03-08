<template>
  <div>
    <HomeCarousel />
    <UsOffers />
    <PopularProducts />
    <UsCategories />
    <BannerHome />
    <UsBrandSlider />
  </div>
</template>

<script>
import UsOffers from "../components/UsOffers.vue";
import HomeCarousel from "../components/HomeCarousel.vue";
import UsBrandSlider from "../components/UsBrandSlider.vue";
import BannerHome from "../components/BannerHome.vue";
import PopularProducts from "../components/PopularProducts.vue";
import UsCategories from "../components/UsCategories.vue";
export default {
  head: {
    title: "Inicio",
  },
  components: {
    UsBrandSlider,
    BannerHome,
    PopularProducts,
    UsOffers,
    HomeCarousel,
    UsCategories,
  },
};
</script>

<style lang="scss" scoped></style>
