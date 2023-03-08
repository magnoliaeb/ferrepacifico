<template>
  <div class="">
    <div class="img-content d-flex justify-center">
      <zoom-on-hover
        :style="{ height: heightImg, width: heightImg }"
        :img-normal="require(`../assets/imgs/web/home/${imgSelected}.png`)"
        :scale="1"
      ></zoom-on-hover>
    </div>
    <SlideProductGroup
      @changeImg="changeImgSelected"
      :imagesProduct="imagesProduct"
    />

    <!-- <SliderGalleryProduct class="hidden-md-and-up" :imgs="imgs" /> -->
  </div>
</template>

<script>
import SliderGalleryProduct from "./SliderGalleryProduct.vue";
import SlideProductGroup from "./SlideProductGroup.vue";
export default {
  computed: {
    heightImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "300px";
        case "md":
          return "400px";
        case "lg":
          return "500px";
        case "xl":
          return "600px";
      }
    },
  },

  data() {
    return {
      imgSelected: "producto1",
      imagesProduct: ["producto1", "producto2", "producto3"],
      imgs: ["producto1", "producto2", "producto3"],
    };
  },
  components: { SliderGalleryProduct, SlideProductGroup },
  methods: {
    changeImgSelected(img) {
      this.imgSelected = img;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: $xl) {
  .img-product {
    width: 100%;
    // height: 100%;
    // height: 500px;
    object-fit: cover;
  }
}
</style>
