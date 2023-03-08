<template>
  <v-card
    v-click-outside="clickExterno"
    color="#003A70"
    dark
    class="popover text-center elevation-4"
    flat
  >
    <div class="py-4 px-6 fill-height d-flex flex-column justify-space-between">
      <div class="">
        <h3 class="text-uppercase my-3">
          Hola {{ $store.state.user.auth.name }}
        </h3>
        <v-divider></v-divider>
        <ul class="py-4">
          <li
            v-ripple="{ class: `info--text` }"
            class="py-2 text-center"
            @click="closePopover"
            v-for="(link, index) in links"
            :key="index"
          >
            <nuxt-link :to="{ name: link.to }">{{ link.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="">
        <v-btn @click="logout" depressed block dark outlined
          >cerrar sesión</v-btn
        >
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Mi perfil",
          to: "mi-perfil",
        },
        {
          title: "Mi pedidos",
          to: "mis-pedidos",
        },
      ],
    };
  },
  methods: {
    closePopover() {
      this.$emit("closePopover");
    },
    logout() {
      this.$router.push({ name: "index" });
      this.$store.dispatch("user/isAutenticate", false);
      this.$emit("closePopover");
    },
    clickExterno(event) {
      this.$emit("closePopover");
    },
  },
};
</script>

<style lang="scss" scoped>
.popover {
  position: fixed;
  top: 0;
  z-index: 1000 !important;
  height: 100vh !important;
  width: 100%;
  right: 0;
  bottom: 0;
  background: #003a70 !important;
  border-radius: 0 !important;
  z-index: 200;
  max-width: 350px !important;
  //   width: 350px !important;
}

h3 {
  font-size: $fs-md;
  color: #ffffff;
  font-weight: 900;
  font-family: "Montserrat";
  text-align: center;
  text-transform: uppercase;
}

a {
  font-size: $fs-sm;
  color: white;
  font-weight: normal;
  font-family: "Montserrat";
}
a.nuxt-link-exact-active.nuxt-link-active {
  color: #00a0df;
  font-weight: 700;
  font-style: italic;
}

button {
  color: #979797 !important;
  font-weight: bold !important;
  font-family: "Gotham" !important;
  text-align: center !important;
  border-color: #979797 !important;
}

@media screen and (min-width: $lg) {
  .popover {
    position: absolute;
    top: 55px;
    z-index: 1000 !important;
    height: 251px !important;
    width: 293px !important;
    min-width: 293px !important;

    left: -50% !important;

    // height: 251px;
    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      top: -12px;
      background-color: #003a70;
      border-radius: 5px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
</style>
