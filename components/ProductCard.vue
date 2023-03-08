<template>
  <article v-if="product" class="py-2">
    <div class="d-flex justify-center py-2">
      <router-link
        class="my-md-4 d-inline-block"
        :to="{
          name: 'productos-id-slug',
          params: { id: product.id, slug: product.id },
        }"
      >
        <v-img
          v-if="product.img"
          :width="heightAndWidthImg"
          transition="scale-transition"
          :height="heightAndWidthImg"
          :src="require(`../assets/imgs/web/home/${product.img}.png`)"
          :alt="product.name"
          aspect-ratio="1"
          class="grey lighten-3 img scale"
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
      </router-link>
    </div>
    <div class="mt-4 px-2 px-md-3">
      <div class="mb-4" style="position: relative">
        <div class="product-title">
          <h3 class="text-break" v-if="product.brand">
            {{ product.brand }}
          </h3>
        </div>
        <h4 class="text-break">
          <router-link
            :to="{
              name: 'productos-id-slug',
              params: { id: product.id, slug: product.id },
            }"
            >{{ product.name }}</router-link
          >
        </h4>
      </div>
      <footer class="">
        <div class="d-flex align-start justify-space-between">
          <div class="d-flex flex-wrap">
            <p class="mb-0 mr-2">
              {{ $util.getMoneyFormat(product.price) }}
            </p>
            <span>{{
              $util.getMoneyFormat(product.price_without_discount)
            }}</span>
          </div>
          <v-btn
            class="cart px-1 py-2"
            depressed
            :loading="loading"
            :disabled="false"
            @click="add"
          >
            <img
              src="../assets/imgs/web/icons/Carreta.svg"
              height="20"
              alt="carreta-icon"
            />
          </v-btn>
        </div>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },

  data() {
    return {
      loading: false,
      alert: false,
      duration: 3000,
    };
  },

  computed: {
    heightAndWidthImg() {
      let heightAndWidthImg = 0;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          heightAndWidthImg = 100;
          break;
        case "sm":
          heightAndWidthImg = 120;
          break;
        case "md":
          heightAndWidthImg = 150;
          break;
        case "lg":
          heightAndWidthImg = 150;
          break;
        case "xl":
          heightAndWidthImg = 150;
          break;
      }

      return heightAndWidthImg;
    },
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
article {
  border: 1px solid #cecece;
  background-color: white;
  // max-width: 300px;
}

.img-content {
  display: flex;
  justify-content: center;
  align-items: center;
  // max-height: 121px;
  // width: 121px;
  margin: 0 auto;
}
.product-title {
  min-height: 40px;
  width: 100%;
  height: 40px;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
h3 {
  font-size: $fs-base;
  color: #6c6c6c;
  text-align: center;
  text-transform: uppercase;
}

h4,
a {
  font-size: $fs-md;
  color: #6c6c6c;
  font-weight: bold;
  text-align: center;
  &:hover {
    color: $primary;
  }
}

p {
  font-size: $fs-base;
  color: $secondary;
  font-weight: bold;
}
span {
  font-size: $fs-sm;
  text-decoration: line-through;
  color: #6c6c6c;
  font-weight: bold;
}
button.cart {
  height: 30px !important;
  min-width: 30px !important;
  background-color: $secondary !important;
  border-radius: 4px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  img {
    height: 24px;
    width: 24px;
  }
}

@media screen and (min-width: $sm) {
}
@media screen and (min-width: $md) {
  button.cart {
    height: 34px !important;
    min-width: 34px !important;

    img {
      height: 28px;
      width: 28px;
    }
  }
  .product-title {
    min-height: 30px;
    height: 30px;
    -webkit-line-clamp: 1;
  }
  .img-content {
    // max-height: 162px;
    // width: 162px;
  }
}
@media screen and (min-width: $md) {
}
</style>
