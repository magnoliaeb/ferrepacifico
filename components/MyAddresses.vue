<template>
  <section class="mb-4 mb-md-6">
    <v-row class="">
      <v-col cols="12">
        <h2 class="">MIS <strong>DIRECCIONES</strong></h2>
      </v-col>
    </v-row>
    <v-card flat color="#ececec" class="rounded-card">
      <div class="pa-md-10">
        <v-row class="">
          <v-col cols="12">
            <div class="mb-5 mb-lg-7">
              <header class="d-flex justify-space-between">
                <h3 class="mb-3">CASA</h3>
                <span>Dirección principal</span>
              </header>
              <p class="">
                Calle José María Heredia #1234 Col. Ladron de Guevara C.P. 23456
                Manzanillo Colima
              </p>
            </div>
          </v-col>

          <v-col cols="12">
            <v-divider></v-divider>
          </v-col>
          <v-col
            cols="12"
            v-for="(address, index) in [1, 2, 3, 4]"
            :key="index"
          >
            <header
              class="d-flex flex-column flex-md-row justify-md-space-between align-start"
            >
              <h3 class="mb-3 text-uppercase">CASA</h3>

              <v-btn
                cl
                @click="selectAddress(address.id)"
                class="text d-none d-md-block mb-2 mb-lg-0"
                depressed
                text
                small
                :loading="isLoading && address.id == selected"
              >
                Seleccionar como principal</v-btn
              >
            </header>
            <p class="">
              Calle José María Heredia #1234 Col. Ladron de Guevara C.P. 23456
              Manzanillo Colima
            </p>
            <v-btn
              @click="selectAddress(address.id)"
              class="text d-md-none"
              depressed
              text
              small
              :loading="isLoading && address.id == selected"
            >
              Seleccionar como principal</v-btn
            >
          </v-col>
          <v-col cols="12">
            <v-divider></v-divider>
          </v-col>
          <v-col cols="12">
            <v-btn
              :to="{ name: 'agregar-direccion' }"
              depressed
              class="button-primary"
              >Agregar dirección</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      selected: -1,
    };
  },
  computed: {},
  methods: {
    selectAddress(id) {
      this.selected = id;
      this.isLoading = true;
      setTimeout(() => {
        this.addresses = this.addresses.map((item) => {
          return item.id === id
            ? { ...item, isPrincipal: true }
            : { ...item, isPrincipal: false };
        });
        this.isLoading = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: left;
  font-size: $fs-xl;
}

article {
  background-color: #ececec;
}

h3 {
  font-size: $fs-md;
  color: #002a49;
  font-weight: 800;
}

p {
  font-size: $fs-base;
  color: #373736;
  font-weight: 500;
  font-family: "Montserrat";
}

button.text {
  font-size: $fs-sm !important;
  color: #00a0df !important;
  font-weight: 400 !important;
  font-family: "Montserrat" !important;
  text-transform: none !important;
  text-decoration: underline;
}

span {
  color: #00a0df;
  font-weight: 600;
  font-family: "Montserrat";
  font-size: $fs-sm;
}

@media screen and (min-width: $md) {
  .rounded-card {
    border-radius: 8px !important;
  }
}
</style>
