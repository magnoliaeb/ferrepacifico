<template>
  <div class="mb-8 table">
    <v-row class="header-table d-none d-md-flex">
      <v-col cols="8" md="7">
        <p>Producto</p>
      </v-col>

      <v-col cols="2" md="2" class="text-center">
        <p>Precio unitario</p>
      </v-col>

      <v-col cols="2" md="3" class="text-center">
        <p>Total</p>
      </v-col>
    </v-row>
    <v-row
      v-for="(product, index) in products"
      :key="index"
      class="align-start py-1 product"
    >
      <v-col cols="12" md="7" class="pa-0">
        <v-row>
          <v-col cols="auto" md="auto" class="mx-auto">
            <v-img
              transition="scale-transition"
              :height="heightImg"
              :width="heightImg"
              :src="require(`@/assets/imgs/web/home/${product.img}.png`)"
              :alt="product.name"
              aspect-ratio="1"
              class="grey lighten-3 img"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    :size="30"
                    :width="3"
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
          <v-col cols="auto" md="" class="flex-grow-1 px-0">
            <v-row class="align-start">
              <v-col cols="10" md="12" class="py-0">
                <h3>{{ product.name }}</h3>
              </v-col>
              <v-col class="hidden-md-and-up py-0" cols="2">
                <v-btn icon small color="error" @click="remove(product)">
                  <img
                    src="../assets/imgs/web/icons/delete.svg"
                    alt="delete-icon"
                  />
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="flex-column flex-md-row align-baseline">
              <v-col cols="12" md="12" lg="8" class="px-0">
                <v-row class="justify-space-between align-center align-center">
                  <v-col cols="auto">
                    <h4>SKU: {{ product.sku }}</h4>
                  </v-col>
                  <v-col cols="auto">
                    <img
                      src="../assets/imgs/web/icons/brand.svg"
                      alt="brand-icon"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="4">
                <v-row class="justify-space-between align-center">
                  <v-col cols="10" sm="6" md="12" class="py-0 px-0">
                    <div
                      class="text-center d-flex justify-space-between align-center"
                      style="max-width: 140px"
                    >
                      <v-btn
                        class="spinbutton pa-1 pa-md-2"
                        icon
                        dark
                        small
                        color="black"
                        outlined
                        @click="minus(product)"
                      >
                        <v-icon small dark> mdi-minus </v-icon>
                      </v-btn>

                      <span>
                        {{ product.quantity }}
                      </span>

                      <v-btn
                        class="spinbutton pa-1 pa-md-2"
                        fab
                        dark
                        small
                        color="black"
                        outlined
                        @click="plus(product)"
                      >
                        <v-icon small dark> mdi-plus </v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="hidden-md-and-up px-0"
                  >
                    <span>{{ $util.getMoneyFormat(product.total) }}</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2" md="2" class="d-none d-md-block">
        <span class="d-flex align-center fill-height justify-center">{{
          $util.getMoneyFormat(product.unit_total)
        }}</span>
      </v-col>
      <v-col
        cols="2"
        md="3"
        class="d-none d-md-block"
        style="position: relative"
      >
        <div class="fill-height d-flex justify-center">
          <span class="d-flex align-center">{{
            $util.getMoneyFormat(product.total)
          }}</span>
          <v-btn
            style="right: 0; top: 7px"
            icon
            small
            absolute
            color="error"
            @click="remove(product)"
          >
            <img
              width="20"
              height="20"
              src="../assets/imgs/web/icons/delete.svg"
              alt="delete-icon"
            />
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      deleting: false,
    };
  },

  methods: {
    minus(product) {
      // let clone = this.$util.clone(product);
      // clone.quantity--;
      // if (clone.quantity >= 1) {
      //   this.update(clone);
      // }
    },

    plus(product) {
      // let clone = this.$util.clone(product);
      // clone.quantity++;
      // this.update(clone);
    },

    update(product) {
      // this.$app.$cart.updateItem(product);
    },

    remove(product) {
      // this.$app.$cart.removeItem(product);
    },
  },

  computed: {
    heightImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 70;
        case "sm":
          return 70;
        case "md":
          return 80;
        case "md":
          return 80;
        case "lg":
          return 80;
        case "xl":
          return 80;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: $fs-md;
  color: #373736;
  font-weight: bold;
}
h4 {
  font-size: $fs-sm;
  color: #373736;
}

span {
  font-size: $fs-base;
  color: #373736;
  font-weight: bold;
}
// input {
//   width: 53px;
//   height: 30px;
//   border: 1px solid #979797;
//   border-radius: 6px;
//   font-size: 15px;
//   color: #373736;
//   font-weight: 300;
//   text-align: center;
//   &:focus {
//     outline-color: $info;
//   }
// }

.product {
  border-bottom: 1px solid #ececec;
  &:first-child {
    border-top: 1px solid $info;
  }
}

.spinbutton {
  width: 17px !important;
  height: 17px !important;
  margin: 0px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

@media screen and (min-width: $md) {
  .table {
    max-width: 800px;
  }
  .header-table {
    border-bottom: 1px solid $info;
    p {
      font-size: $fs-xs;
      color: #373736;
      font-weight: bold;
      margin-bottom: 0;
    }
  }
}
@media screen and (min-width: $lg) {
  .table {
    max-width: 1200px;
  }
}
</style>
