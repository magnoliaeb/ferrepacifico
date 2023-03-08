<template>
  <div>
    <v-skeleton-loader
      tile
      style="border-radius: 28px"
      type="image"
      :height="heightImg"
      :max-height="heightImg"
    ></v-skeleton-loader>
    <v-skeleton-loader
      tile
      type="image"
      width="100%"
      class="mt-4"
      max-height="20px"
      height="20px"
    ></v-skeleton-loader>
    <v-skeleton-loader
      class="skeleton-line-text-post"
      tile
      type="list-item-two-line"
    ></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  computed: {
    heightImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 160;
        case "sm":
          return 160;
        case "md":
          return 200;
        case "lg":
          return 200;
        case "xl":
          return 200;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
