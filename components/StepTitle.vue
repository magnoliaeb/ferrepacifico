<template>
  <v-row class="my-4">
    <v-col cols="12" class="">
      <h2>
        <span class="mr-3">{{ number }}</span> {{ title }}
      </h2>
    </v-col>
    <v-col cols="12" class="">
      <v-divider> </v-divider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: $fs-md;
  color: #003a70;
  font-weight: 700;
  font-family: "Montserrat";
  text-align: left;
  span {
    font-size: $fs-md;
    color: #00a0df;
    font-weight: 400;
    font-family: "Montserrat";
    text-align: center;
  }
}
</style>
