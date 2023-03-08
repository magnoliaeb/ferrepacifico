<template>
  <div class="content mt-16 pt-8">
    <v-row class="">
      <!-- <v-col cols="8" md="4">
          <v-skeleton-loader tile type="heading"></v-skeleton-loader>
        </v-col> -->
      <v-col cols="12" md="12">
        <v-skeleton-loader
          style="border-radius: 28px"
          width="100%"
          tile
          :height="heightImg"
          :min-height="heightImg"
          type="image"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" md="12">
        <div class="content">
          <v-row class="justify-center">
            <v-col cols="12">
              <v-skeleton-loader tile type="paragraph"></v-skeleton-loader>
            </v-col>
            <v-col cols="12">
              <v-skeleton-loader tile type="sentences"></v-skeleton-loader>
              <v-skeleton-loader tile type="paragraph"></v-skeleton-loader>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    heightImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "200px";
        case "md":
          return "290px";
        case "lg":
          return "290px";
        case "xl":
          return "290px";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
