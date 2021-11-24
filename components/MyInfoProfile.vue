<template>
  <section>
    <v-row class="mb-2 mb-md-4">
      <v-col>
        <h2 class="mb-4">MIS <strong>DATOS</strong></h2>
        <v-card flat color="#ececec" class="rounded-card">
          <article class="px-6 py-4 px-lg-16 py-lg-7">
            <h3 class="mb-8">CARLOS HERNÁNDEZ QUEZADA</h3>
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
                <p class="mb-0 text-break">carlos.herque23@mail.com</p>
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
            <v-btn depressed>Editar</v-btn>
          </article>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {};
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
  color: #002a49;
  font-weight: 800;
  font-size: 17px;
}

p {
  font-size: 13px;
  color: #373736;
  font-weight: 500;
  font-family: "Montserrat";
}

button {
  font-size: 10px !important;
  font-weight: bold;
  text-align: center;
  height: 33px !important;
  width: 118px;
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
      color: $blue-ligth;
    }
  }
}

@media screen and (min-width: $md) {
  h2 {
    font-size: 21px;
  }

  button {
    font-size: 10px;
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