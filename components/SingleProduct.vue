<template>
  <v-row class="justify-space-around pb-6 pb-md-12">
    <v-col cols="12" sm="auto" lg="auto" class="">
      <SliderSingleProduct :product="product" />
    </v-col>
    <v-col cols="12" md="12" lg="5" class="">
      <v-row class="justify-space-between align-end">
        <v-col cols="12">
          <h2>Soldadora inversor M 205</h2>
        </v-col>
        <v-col cols="7">
          <h3>SKU: 29978</h3>
        </v-col>
        <v-col cols="5" class="py-0 d-flex justify-start">
          <img
            style="object-fit: cover"
            class="brand"
            src="../assets/imgs/web/brands/Coflex.jpg"
            width=""
            alt="brand"
          />
          <!-- <div
            class="brand"
            style="
              'background-image':url('../assets/imgs/web/brands/Bexel.jpg'), ;
            "
          ></div> -->
        </v-col>
      </v-row>
      <div class="d-flex flex-wrap align-start">
        <div class="pa-3">
          <h4 class="">{{ $util.getMoneyFormat(120) }}</h4>
        </div>
        <div class="pa-3">
          <span>{{ $util.getMoneyFormat(99) }}</span>
        </div>
      </div>
      <v-row class="mb-3 mb-md-11">
        <v-col cols="12">
          <p>
            Soldador inversor M 205, marca XTOOLS para uso industrial, MAG/ y
            TIG LIFT).  Cuenta con 200 amperios, un voltaje de entrada de
            110-220 voltios
          </p>
        </v-col>
      </v-row>
      <v-row class="align-center justify-space-between">
        <v-col cols="2">
          <input class="" type="number" value="1" />
        </v-col>

        <v-col cols="10">
          <v-btn
            depressed
            class="button-primary"
            block
            :loading="loading"
            @click="add"
          >
            AGREGAR AL CARRITO
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import SliderSingleProduct from "./SliderSingleProduct.vue";
export default {
  components: { SliderSingleProduct },
  data() {
    return {
      loading: false,
      alert: false,
      duration: 3000,
    };
  },
  computed: {
    product() {
      return {};
    },
    buyable() {},
    brand() {},
  },
  methods: {
    add() {
      this.loading = true;
    },

    showAlert() {},
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: $fs-4xl;
  color: #003a70;
  font-weight: 500;
  text-align: left;
}
h3 {
  font-size: $fs-2xl;
  color: #003a70;
  font-weight: 300;
}
h4 {
  font-size: $fs-xl;
  font-weight: bold;
}
span {
  font-size: $fs-md;
  text-decoration: line-through;
  color: #d9d8d6;
  font-weight: bold;
}
p {
  font-size: $fs-base;
  letter-spacing: 0px;
  color: #000000;
}
input {
  width: 100%;
  height: 31px;
  border: 1px solid #979797;
  border-radius: 6px;
  font-size: $fs-base;
  color: #373736;
  font-weight: 300;
  text-align: center;
  &:focus {
    outline-color: $info;
  }
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.brand {
  width: 100%;
  height: 60px;
  background-size: contain;
  // border: 1px solid red;
  background-position: center;
}

@media screen and (min-width: $md) {
  input {
    height: 44px;
  }
}
</style>
