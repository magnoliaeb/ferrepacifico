<template>
  <section>
    <v-row class="mb-2 mb-md-4">
      <v-col>
        <h2 class="mb-4">MIS <strong>DIRECCIONES</strong></h2>
        <v-card flat color="#ececec" class="rounded-card">
          <div class="px-6 py-4 px-lg-16 py-lg-7">
            <article class="mb-5 mb-lg-7">
              <header class="d-flex justify-space-between">
                <h3 class="mb-3">{{ addressPrincipal.name }}</h3>
                <span>Dirección principal</span>
              </header>
              <p class="mb-0">
                {{ addressPrincipal.text }}
              </p>
            </article>
            <v-divider></v-divider>

            <div class="pt-5 pt-lg-7">
              <article
                class="mb-7"
                v-for="(address, index) in addressesFilter"
                :key="index"
              >
                <header
                  class="
                    d-flex
                    flex-column flex-md-row
                    justify-md-space-between
                    align-start
                  "
                >
                  <h3 class="mb-3">{{ address.name }}</h3>
                  <v-btn
                    @click="selectAddress(address.id)"
                    class="text mb-2 mb-lg-0"
                    depressed
                    text
                    small
                    :loading="isLoading && address.id == selected"
                  >
                    Seleccionar como principal</v-btn
                  >
                </header>
                <p class="mb-0">
                  {{ address.text }}
                </p>
              </article>
            </div>
            <v-divider></v-divider>
            <v-btn
              :to="{ name: 'agregar-direccion' }"
              depressed
              class="mt-7 btn-blue"
              >Agregar dirección</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      selected: -1,
      addresses: [
        {
          id: 1,
          name: "BODEGA",
          text: "Avenida Juárez #1456 Col. Jardines del country C.P. 23456 Manzanillo Colima",
          isPrincipal: false,
        },
        {
          id: 2,
          name: "LOCAL",
          text: "José María Heredia #1234 Col. Ladron de Guevara C.P. 23456 Manzanillo Colima",
          isPrincipal: false,
        },
        {
          id: 3,
          name: "LOCAL CENTRO",
          text: "José María Heredia #1234 Col. Ladron de Guevara C.P. 23456 Manzanillo Colima",
          isPrincipal: false,
        },
        {
          id: 4,
          name: "CASA",
          text: "Calle José María Heredia #1234 Col. Ladron de Guevara C.P. 23456 Manzanillo Colima",
          isPrincipal: true,
        },
      ],
    };
  },
  computed: {
    addressesFilter() {
      return this.addresses.filter((item) => !item.isPrincipal);
    },
    addressPrincipal() {
      return this.addresses.find((item) => item.isPrincipal);
    },
  },
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
.rounded-card {
  border-radius: 8px !important;
}

h2 {
  text-align: left;
  font-size: 19px;
}

article {
  background-color: #ececec;
}

h3 {
  font-size: 15px;
  color: #002a49;
  font-weight: 800;
}

p {
  font-size: 12px;
  color: #373736;
  font-weight: 500;
  font-family: "Montserrat";
}

.btn-blue {
  font-size: 10px;
  font-weight: bold;
  height: 33px !important;
  width: 100%;
  font-size: 10px;
  background-color: #003a70 !important;
  color: white;
}

button.text {
  font-size: 10px !important;
  color: #00a0df !important;
  font-weight: 400 !important;
  font-family: "Montserrat" !important;
  text-transform: none !important;
  text-decoration: underline;
}

span {
  font-size: 12px;
  color: #00a0df;
  font-weight: 600;
  font-family: "Montserrat";
}

@media screen and (min-width: $md) {
  h2 {
    font-size: 21px;
  }

  h3 {
    font-size: 17px;
  }

  p {
    font-size: 13px;
  }

  .btn-blue {
    font-size: 10px;
    width: 246px;
  }

  button.text {
    font-size: 13px !important;
  }

  span {
    font-size: 13px;
  }
}
</style>