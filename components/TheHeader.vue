<template>
  <nav>
    <div class="">
      <TopHeader />
      <v-app-bar
        color="info"
        app
        absolute
        flat
        class="nav my-0"
        :class="{ sticky: sticky }"
      >
        <div class="content">
          <v-row class="align-center justify-space-between">
            <v-col cols="auto" lg="" class="hidden-lg-and-up">
              <div class="d-flex align-center">
                <v-btn
                  id="menu"
                  text
                  fab
                  :x-small="$vuetify.breakpoint.smAndDown"
                  @click="openMenu"
                >
                  <img
                    class="menu"
                    src="../assets/imgs/web/icons/menu.svg"
                    alt="menu-burger"
                  />
                </v-btn>
                <v-btn
                  text
                  fab
                  :x-small="$vuetify.breakpoint.smAndDown"
                  @click="openSearch"
                  id="search"
                  class="ml-2 hidden-lg-and-up"
                >
                  <img
                    src="../assets/imgs/web/icons/Search.svg"
                    alt="Buscador"
                  />
                </v-btn>
              </div>
            </v-col>
            <v-col
              cols="auto"
              class="text-center text-lg-left d-flex align-center justify-center justify-lg-start"
            >
              <router-link
                :to="{ name: 'index' }"
                class="logo mr-lg-5 d-inline-block"
              >
                <img
                  class="fill-height"
                  width="100%"
                  src="../assets/imgs/web/icons/LogoTop.svg"
                  alt="logo-ferrepacifico"
                />
              </router-link>
              <div class="d-none d-lg-block">
                <SearchForm :showSearch="showSearch" @close="closeSearch" />
              </div>
            </v-col>
            <v-col
              cols="auto"
              class="text-right d-flex align-center text-lg-right justify-end"
            >
              <div class="" style="position: relative">
                <v-btn
                  depressed
                  class="hidden-md-and-down"
                  text
                  dark
                  @click="goToLogin"
                >
                  <img
                    class="carreta"
                    src="../assets/imgs/web/icons/Perfil.svg"
                    alt="perfil"
                  />
                  <span
                    class="text-capitalize font-weight-bold hidden-md-and-down"
                  >
                    {{
                      isAuthenticate
                        ? `${$store.state.user.auth.name}`
                        : "Iniciar Sesión"
                    }}
                  </span>
                </v-btn>
                <v-expand-transition>
                  <LoginPopover
                    v-if="showPopover"
                    @closePopover="showPopover = false"
                  />
                </v-expand-transition>
              </div>
              <v-divider
                vertical
                class="mx-3 hidden-md-and-down"
                dark
              ></v-divider>
              <v-btn
                depressed
                text
                :fab="$vuetify.breakpoint.xsOnly"
                :x-small="$vuetify.breakpoint.xsOnly"
                class="d-flex cart"
                :to="{ name: 'mi-carrito' }"
              >
                <img
                  class="mr-md-1 carreta"
                  src="../assets/imgs/web/icons/Carreta.svg"
                  alt="carreta"
                />
                <p class="mb-0 d-none d-sm-block">(0)</p>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-app-bar>
    </div>
    <MenuSidebar />
    <FilterSidebar />

    <HeaderBottom
      class="hidden-md-and-down nav-bottom"
      :class="{ sticky: sticky }"
    />
  </nav>
</template>

<script>
import HeaderBottom from "./HeaderBottom.vue";
import MenuSidebar from "./MenuSidebar.vue";
import FilterSidebar from "./FilterSidebar.vue";
import TopHeader from "./TopHeader.vue";
import SearchForm from "./SearchForm.vue";
export default {
  components: {
    HeaderBottom,
    TopHeader,
    SearchForm,
    MenuSidebar,
    FilterSidebar,
  },

  data() {
    return {
      sticky: false,
      drawer: false,
      showPopover: false,
      showSearch: false,
      products: [
        { title: "Producto 1", redirecTo: "" },
        { title: "Producto 2", redirecTo: "" },
        { title: "Producto 3", redirecTo: "" },
        { title: "Producto 4", redirecTo: "" },
        { title: "Producto 5", redirecTo: "" },
      ],
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    // window.addEventListener("resize", this.updateWindowDimensions);
  },
  computed: {
    isAuthenticate() {
      return this.$store.getters["user/getIsAutenticate"];
    },
  },
  methods: {
    openPopover() {
      this.showPopover = !this.showPopover;
    },
    goToLogin() {
      if (this.isAuthenticate) {
        this.openPopover();
        this.drawer = false;
      } else {
        this.$router.push({ name: "login" });
      }
    },
    openMenu() {
      this.$store.dispatch("website/showMenu", true);
    },

    openSearch() {
      console.log("abrir");
      this.showSearch = true;
    },
    closeSearch() {
      this.showSearch = false;
    },

    handleScroll() {
      if (window.scrollY > 0) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid red;
}
nav {
  z-index: 80;
  // position: relative;
  .nav {
    min-height: 57px !important;
    position: fixed;
    width: 100%;
    top: 24px;
  }
  .nav.sticky {
    top: 0;
  }
}
.nav-bottom {
  position: fixed;
  width: 100%;
}
.nav-bottom.sticky {
  top: 88px;
}

p {
  font-size: $fs-sm;
  color: #ffffff;
  font-weight: bold;
}

button {
  span {
    font-size: $fs-sm !important;
  }
}

.menu {
  width: 15px;
  height: 15px;
}
.carreta {
  width: 30px;
  height: 20px;
}
.logo {
  width: 130px;
  height: 37px;
}

// .nav-title.v-list-item__title {
//   color: #373736;
//   font-weight: bold;
// }

@media screen and (min-width: $sm) {
  a.cart,
  button.profile {
    width: 65px !important;
    max-width: 65px !important;
  }

  a.cart {
    width: 90px !important;
    max-width: 90px !important;
  }
  .nav {
    min-height: 66px !important;
    height: 66px !important;
  }
  .carreta {
    width: 34px;
    height: 24px;
  }
  .logo {
    width: 180px;
    height: 58px;
  }
  button.login-btn {
    position: relative !important;
  }
}
@media screen and (min-width: $md) {
  button.profile {
    width: 150px !important;
    max-width: 150px !important;
  }
  .nav {
    height: 88px !important;
  }
}
</style>
