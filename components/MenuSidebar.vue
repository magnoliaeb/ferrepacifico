<template>
  <v-navigation-drawer
    v-click-outside="clickOutside"
    :value="showMenu"
    max-width="370"
    fixed
    class="menu d-lg-none"
  >
    <v-toolbar color="info" flat>
      <v-row class="align-center justify-space-between px-4">
        <v-col cols="auto">
          <router-link :to="{ name: 'index' }">
            <img
              class="logo"
              src="../assets/imgs/web/icons/LogoTop.svg"
              alt="logo-ferrepacifico"
            />
          </router-link>
        </v-col>
        <v-col cols="auto">
          <v-btn depressed icon small @click="goToLogin"
            ><img
              class="perfil"
              src="../assets/imgs/web/icons/Perfil.svg"
              alt="logo-perfil"
          /></v-btn>
        </v-col>
      </v-row>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list v-if="isAuthenticate" flat class="py-0">
      <v-list-item-group color="info">
        <v-list-item
          @click="closeMenu"
          v-for="(item, i) in links"
          :key="i"
          :to="{ name: item.redirecTo }"
        >
          <v-list-item-content>
            <v-list-item-title
              class="nav-title"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-list class="py-0">
      <v-list-group :value="false" color="info">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="nav-title">Productos</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
          v-for="(item, index) in categories"
          :key="index"
          color="primary"
          prepend-icon="mdi-chevron-down"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            @click="closeMenu"
            color="info"
            v-for="child in item.children"
            :key="child.id"
            exact
            :to="{ name: 'productos', query: { category: child.id } }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
    <v-list flat class="py-0">
      <v-list-item-group color="info">
        <v-list-item
          v-for="(item, i) in items"
          @click="closeMenu"
          :key="i"
          :to="{ name: item.redirecTo }"
        >
          <v-list-item-content>
            <v-list-item-title
              class="nav-title"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item color="info">
        <v-list-item-content>
          <v-row class="justify-start">
            <v-col cols="2" class="py-0">
              <v-btn icon large depressed href="" target="_blank">
                <img
                  src="../assets/imgs/web/icons/facebook-blue.svg"
                  alt="facebook-icon"
                />
              </v-btn>
            </v-col>
            <v-col cols="2" class="py-0">
              <v-btn icon large depressed href="" target="_blank">
                <img
                  src="../assets/imgs/web/icons/instagram-blue.svg"
                  alt="instagram-icon"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "Mi perfil", redirecTo: "mi-perfil" },
        { text: "Mis pedidos", redirecTo: "mis-pedidos" },
      ],
      items: [
        { text: "Sucursales", redirecTo: "sucursales" },
        { text: "Nosotros", redirecTo: "nosotros" },
        { text: "Contacto", redirecTo: "contacto" },
      ],
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
    };
  },
  computed: {
    isAuthenticate() {
      return false;
    },
    showMenu() {
      return this.$store.getters["website/getShowMenu"];
    },
  },

  methods: {
    goToLogin() {
      if (this.isAuthenticate) {
        this.openPopover();
        this.drawer = false;
      } else {
        this.$router.push({ name: "login" });
      }
    },
    closeMenu() {
      this.$store.dispatch("website/showMenu", false);
    },

    clickOutside(event) {
      if (event.target.id !== "menu") {
        this.closeMenu();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 145px;
  height: 35px;
}
.perfil {
  width: 18px;
  height: 21px;
}
</style>
