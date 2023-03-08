<template>
  <section class="mb-4 mb-md-6">
    <v-row class="">
      <v-col cols="12">
        <h2 class="">MIS <strong>DATOS</strong></h2>
      </v-col>
    </v-row>
    <v-card flat color="#ececec" class="rounded-card">
      <div class="pa-md-10">
        <v-row>
          <v-col cols="12">
            <h3 class="mb-8 text-uppercase">CARLOS HERNÁNDEZ QUEZADA</h3>

            <ul>
              <li class="d-flex align-start mb-4">
                <div class="icon mr-3">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p class="mb-0 text-break">carlos.herque23@gmail.com</p>
              </li>
              <li class="d-flex align-start mb-4">
                <div class="icon mr-3">
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
                <p class="mb-0">(314) 331 2131</p>
              </li>
            </ul>
            <v-divider class="mb-4"></v-divider>
            <v-btn
              class="button-primary"
              depressed
              :to="{ name: 'editar-perfil' }"
              >Editar</v-btn
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
      clone: {},
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: left;
  font-size: $fs-lg;
}

article {
  background-color: #ececec;
}

h3 {
  color: $secondary;
  font-weight: 800;
  font-size: $fs-md;
}

p {
  font-size: $fs-base;
  color: #373736;
  font-weight: 500;
  font-family: "Montserrat";
}

.icon {
  min-height: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 18px;
    width: 18px;
    path {
      color: $info;
    }
  }
}

@media screen and (min-width: $md) {
  .rounded-card {
    border-radius: 8px !important;
  }
  .icon {
    min-height: 24px;
    min-width: 24px;

    svg {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
