<template>
  <div class="search-box">
    <div class="group d-flex">
      <input type="text" v-model="query" placeholder="¿Que estas buscando?" />
      <v-btn
        class="search"
        depressed
        style="height: 100%"
        color="secondary"
        :to="{ name: 'productos', query: { query: this.query } }"
      >
        <img src="../assets/imgs/web/icons/Search.svg" alt="Search" />
      </v-btn>
    </div>
    <v-slide-y-transition>
      <div
        class="dialog-card elevation-7"
        v-click-outside="clickOutside"
        v-show="showDialog"
      >
        <div class="search-card">
          <v-row class="">
            <v-col
              cols="12"
              lg="5"
              class="py-2 px-3 left-menu hidden-md-and-down"
            >
              <h3 class="py-2">Categorias</h3>

              <v-divider class="mb-4"></v-divider>
              <ul>
                <li
                  class="pb-1"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <div @click="redirecTo('productos', category)">
                    <p class="mb-0">{{ category.name }}</p>
                  </div>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" lg="7" class="py-2 px-3">
              <h3 class="py-2">Productos</h3>
              <v-divider class="mb-4"></v-divider>
              <v-row
                class="my-1 mb-2 align-start"
                v-for="(product, index) in products"
                :key="index"
              >
                <v-col cols="" class="py-0 flex-grow-0">
                  <v-img
                    style="cursor: pointer"
                    transition="scale-transition"
                    :height="heightImg"
                    @click="redirecTo('productos-id-slug', product)"
                    :src="require(`../assets/imgs/web/home/${product.img}.png`)"
                    :alt="product.name"
                    :width="heightImg"
                    aspect-ratio="1"
                    class="grey lighten-3"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
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
                <v-col cols="" class="py-0 content-title">
                  <div @click="redirecTo('productos-id-slug', product)">
                    <h4>{{ product.name }}</h4>
                    <h5 class="hidden-sm-and-down">marca</h5>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-slide-y-transition>

    <v-dialog
      scrollable
      @click:outside="closeShowSearch"
      :value="showSearch && $vuetify.breakpoint.mdAndDown"
      max-width="500"
    >
      <v-card>
        <v-card-title class="mb-1 mb-md-3 px-0 px-2">
          <div class="group d-flex">
            <input
              type="text"
              v-model="query"
              placeholder="¿Que estas buscando?"
            />
            <v-btn
              class="search"
              depressed
              style="height: 100%"
              color="secondary"
              :to="{ name: 'productos', query: { query: this.query } }"
            >
              <img src="../assets/imgs/web/icons/Search.svg" alt="Search" />
            </v-btn>
          </div>
        </v-card-title>

        <v-card-text style="height: 400px" class="px-0 px-2">
          <v-row class="">
            <v-col cols="12" md="5" class="px-3 left-menu d-none d-md-block">
              <h3 class="py-2">Categorias</h3>

              <v-divider class="mb-4"></v-divider>
              <ul>
                <li
                  class="pb-1"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <div @click="redirecTo('productos', category)">
                    <p class="mb-0">{{ category.name }}</p>
                  </div>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="7" class="">
              <h3 class="py-2">Productos</h3>
              <v-divider class="mb-4"></v-divider>
              <v-row
                class="my-1 mb-2 align-start"
                v-for="(product, index) in products"
                :key="index"
              >
                <v-col cols="auto" class="py-0 px-0">
                  <v-img
                    style="cursor: pointer"
                    transition="scale-transition"
                    :height="heightImg"
                    @click="redirecTo('productos-id-slug', product)"
                    :src="require(`../assets/imgs/web/home/${product.img}.png`)"
                    :alt="product.name"
                    :width="heightImg"
                    aspect-ratio="1"
                    class="grey lighten-3 img"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
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
                <v-col cols="" class="py-0 content-title">
                  <div @click="redirecTo('productos-id-slug', product)">
                    <h4>{{ product.name }}</h4>
                    <h5 class="hidden-sm-and-down">
                      {{ $util.getMoneyFormat(product.price) }}
                    </h5>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      showDialog: false,
      // getShowSearch: true,
      searching: false,
      results: [],
      categories: [
        {
          id: 1,
          name: "Acero",
        },
        {
          id: 2,
          name: "Ferrteria",
        },
        {
          id: 3,
          name: "Plomería",
        },
        {
          id: 4,
          name: "Construcción",
        },
      ],
      products: [
        {
          id: 1,
          name: "producto1",
          price: 10,
          img: "producto1",
        },
        {
          id: 2,
          name: "producto1",
          price: 10,
          img: "producto2",
        },
        {
          id: 3,
          name: "producto1",
          price: 10,
          img: "producto3",
        },
        {
          id: 4,
          name: "Producto4",
          img: "producto4",
        },
        {
          id: 1,
          name: "producto1",
          price: 10,
          img: "producto1",
        },
        {
          id: 2,
          name: "producto1",
          price: 10,
          img: "producto2",
        },
        {
          id: 3,
          name: "producto1",
          price: 10,
          img: "producto3",
        },
        {
          id: 4,
          name: "Producto4",
          img: "producto4",
        },
        {
          id: 1,
          name: "producto1",
          price: 10,
          img: "producto1",
        },
        {
          id: 2,
          name: "producto1",
          price: 10,
          img: "producto2",
        },
        {
          id: 3,
          name: "producto1",
          price: 10,
          img: "producto3",
        },
        {
          id: 4,
          name: "Producto4",
          img: "producto4",
        },
      ],
    };
  },
  computed: {
    heightImg() {
      let heightImg = 0;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          heightImg = 60;
          break;
        case "sm":
          heightImg = 70;
          break;
        case "md":
          heightImg = 70;
          break;
        case "lg":
          heightImg = 80;
          break;
        case "xl":
          heightImg = 80;
          break;
      }
      return heightImg;
    },
  },
  props: {
    showSearch: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    query() {
      this.showDialog = true;
      if (this.query.length <= 0) {
        this.showDialog = false;
      } else {
        this.search();
      }
    },
  },
  methods: {
    search() {
      if (!this.searching) {
        this.searching = true;

        if (this.query.length) {
          this.searching = false;
        }
      }
    },

    clickOutside(event) {
      // if (event.target.id !== "search") {
      //   console.log("cerrra");
      this.showDialog = false;
      this.query = "";
      //   this.$emit("close");
      // }
      // console.log("Click externo. Evento: ", event);
    },
    closeShowSearch() {
      console.log("cerrar dialog");
      this.query = "";
      this.$emit("close");

      // console.log("Click externo. Evento: ", event);
    },
    redirecTo(name, element) {
      // if (element.table == "products") {
      this.$router.push({
        name,
        params: { id: element.id, slug: element.id },
      });
      // } else {
      //   this.$router.push({ name, query: { categories: element.name } });
      // }
      this.showDialog = false;
      this.query = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.group {
  // height: 34px;
  height: 38px;
  border-radius: 2px;
  width: 100%;
  display: flex;
}
input {
  width: 100%;
  // width: 220px;
  height: 100%;
  background-color: white;
  padding: 0 10px;
  border-top-left-radius: 3px;
  border: 0;
  border-bottom-left-radius: 3px;
  font-size: $fs-sm !important;
  &::placeholder {
    color: #565a5e;
  }
  &:focus {
    // outline-color: $primary;
    // border: 0;
    outline: none;
    border: 2px solid $primary;
  }
}
a.search {
  width: 39px !important;
  height: 100% !important;
  border-radius: 0 !important;
  // background-color: $info !important;
  border-top-right-radius: 3px !important;
  border-bottom-right-radius: 3px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.search-box {
  position: relative !important;
  // width: 550px;
  // border: 2px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
}

.dialog-card {
  position: absolute;
  top: 56px;
  width: 350px;
  max-height: 300px;
  overflow-y: auto;
}

.search-card {
  background-color: white !important;
  color: #565a5e;
  height: auto;
  // overflow: scroll;
  img {
    // max-height: 100%;
    // height: 60px;
    object-fit: cover;
    cursor: pointer;
  }
  .content-title {
    cursor: pointer;
    &:hover h4 {
      color: $primary;
    }
    &:hover h5 {
      color: $info;
    }
  }
  .left-menu {
    background-color: rgba(228, 223, 223, 0.301);
    height: auto;
    p {
      color: #373736;
      cursor: pointer;
      &:hover {
        color: $primary;
      }
    }
  }
  h3 {
    color: black;
    font-size: $fs-sm;
    font-weight: 600;
  }
  h4 {
    text-transform: uppercase;
    color: #565a5e;
    font-size: $fs-sm;
    font-weight: 500;
  }
  h5 {
    color: #373736;
    font-size: $fs-xs;
    font-weight: 700;
  }
}

// @media screen and (min-width: $md) {
//   .dialog-card {
//     position: absolute;
//     top: 48px;
//     max-width: 400px;
//   }
// }

@media screen and (min-width: $lg) {
  .group {
    height: 34px;
  }
  .search-card {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .dialog-card {
    min-width: 540px;
  }
  input {
    width: 270px;
  }
  button {
    width: 49px;
  }
}
</style>
