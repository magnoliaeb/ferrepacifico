<template>
  <v-toolbar height="41px" dark flat class="nav-bottom">
    <div class="content d-flex fill-height align-center">
      <v-row class="justify-space-between menu align-center">
        <v-col cols="auto" class="d-flex justify-start">
          <!-- <v-btn class="mr-2" small text depressed>Products</v-btn> -->
          <v-menu
            offset-y
            rounded
            min-width="460"
            v-if="$vuetify.breakpoint.lgAndUp"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mr-2 px-xl-6"
                small
                v-bind="attrs"
                v-on="on"
                text
                depressed
              >
                <span>Productos</span>
                <v-icon class="icon-arrow mt-0" right>
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </template>

            <v-row class="menu-categories justify-center">
              <v-col cols="5" class="px-0">
                <v-list flat>
                  <v-list-item
                    v-for="(item, index) in categories"
                    :key="index"
                    exact
                    color="primary"
                    :to="{ name: 'productos', query: { category: item.id } }"
                    @mousemove="selectedSubcategories(item.children)"
                  >
                    <v-list-item-title class="title__category">{{
                      item.name
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="1">
                <v-divider vertical></v-divider>
              </v-col>
              <v-col cols="5" class="px-0">
                <v-list flat>
                  <v-list-item
                    color="primary"
                    v-for="(item, index) in subCategories"
                    :key="index"
                    _to="{
                      path: 'productos',
                      query: { category: item.id },
                    }"
                    exact
                    :to="{ name: 'productos', query: { category: item.id } }"
                  >
                    <v-list-item-title class="title__sub-category">{{
                      item.name
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-menu>
          <v-btn
            class="mr-2 px-xl-6"
            small
            :to="{ name: 'sucursales' }"
            text
            depressed
            >Sucursales</v-btn
          >
          <v-btn
            class="mr-2 px-xl-6"
            small
            :to="{ name: 'nosotros' }"
            text
            depressed
            >Nosotros</v-btn
          >
          <v-btn class="px-xl-6" small :to="{ name: 'contacto' }" text depressed
            >Contacto</v-btn
          >
        </v-col>
        <v-col cols="auto" class="d-flex info-contact align-center justify-end">
          <div class="d-flex align-center px-lg-1 px-xl-2">
            <div class="icon mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p class="mb-0">
              <a class="" href="mailto:atencionaclientes@ferrepacifico.com.mx"
                >atencionaclientes@ferrepacifico.com.mx</a
              >
            </p>
          </div>
          <div
            class="hidden-lg-and-down d-xl-flex align-center px-lg-1 px-xl-2"
          >
            <div class="icon mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p class="mb-0"><a href="tel:3143312131">(314) 331 21 31</a></p>
          </div>
          <div class="d-flex">
            <v-btn class="mr-2" small href="" target="_blank" icon depressed>
              <img
                src="../assets/imgs/web/icons/facebook-blue.svg"
                alt="facebook"
              />
            </v-btn>
            <v-btn class="mr-2" small href="" target="_blank" icon depressed>
              <img
                src="../assets/imgs/web/icons/instagram-blue.svg"
                alt="instagram"
              />
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  mounted() {
    this.subCategories = this.categories[0].children;
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Acero",
          children: [
            {
              id: 1,
              name: "Aceros de construcción",
            },
            {
              id: 2,
              name: "Aceros estructurales",
            },
            {
              id: 3,
              name: "Aceros tabulares",
            },
          ],
        },
        {
          id: 2,
          name: "Ferrteria",
          children: [
            {
              id: 1,
              name: "Cerraduras",
            },
            {
              id: 2,
              name: "Herrajes",
            },
            {
              id: 3,
              name: "Aislante",
            },
            {
              id: 4,
              name: "Herramientas",
            },
          ],
        },
        {
          id: 3,
          name: "Plomería",
          children: [
            {
              id: 1,
              name: "Válvulas",
            },
            {
              id: 2,
              name: "Gas",
            },
            {
              id: 3,
              name: "Tuberías",
            },
          ],
        },
        {
          id: 4,
          name: "Construcción",
          children: [
            {
              id: 1,
              name: "Concreto",
            },
            {
              id: 2,
              name: "Polvos",
            },
            {
              id: 3,
              name: "Materiales livianos",
            },
          ],
        },
      ],
      subCategories: [],
    };
  },
  methods: {
    selectedSubcategories(categories) {
      this.subCategories = categories;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bottom {
  position: absolute;
  width: 100%;
  height: 41px;
  // z-index: 10;
  top: 110px;
  background-color: #d9d8d6a9 !important;
  // background-color: red !important;
}

.menu-categories {
  background-color: white !important;
}

.title__sub-category {
  font-size: $fs-xs;
  color: #373736;
  font-weight: 300;
  display: block;
}
.title__category {
  font-weight: 500;
  font-size: $fs-sm;
}
.icon {
  height: 17px;
  width: 17px;
  color: black;
}

.icon-arrow {
  font-size: $fs-xs;
  color: #000000;
}

.menu {
  button,
  a {
    color: #373736 !important;
    font-weight: bold;
    font-size: $fs-xs;
    text-transform: capitalize !important;
  }
}

.info-contact {
  p {
    a {
      font-size: $fs-xs;
      color: #373736;
      font-weight: normal;
      text-transform: lowercase !important;
      display: block;
    }
  }
  img {
    width: 14px;
    height: 14px;
  }
}

a.v-btn--active {
  color: $info !important;
}
</style>
