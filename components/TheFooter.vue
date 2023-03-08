<template>
  <v-footer padless>
    <div class="content pt-6 pb-4 pb-lg-16">
      <div class="footer pb-10 pb-pa-md-14">
        <v-row class="justify-space-between my-0">
          <v-col cols="4" lg="2">
            <img
              :src="require(`@/assets/imgs/web/icons/american_express.svg`)"
              :alt="'american_express'"
              width="100%"
              height="55"
            />
          </v-col>
          <v-col cols="4" lg="2">
            <img
              :src="require(`@/assets/imgs/web/icons/Visa.svg`)"
              :alt="'Visa'"
              width="100%"
              height="55"
            />
          </v-col>
          <v-col cols="4" lg="2">
            <img
              :src="require(`@/assets/imgs/web/icons/MasterCard.svg`)"
              :alt="'Master Card'"
              width="100%"
              height="55"
            />
          </v-col>
          <v-col cols="4" lg="2">
            <img
              :src="require(`@/assets/imgs/web/icons/Seven.svg`)"
              :alt="'Seven'"
              width="100%"
              height="55"
            />
          </v-col>
          <v-col cols="4" lg="2">
            <img
              class="hidden-md-and-down"
              :src="require(`@/assets/imgs/web/icons/Walmart.svg`)"
              :alt="'Walmart'"
              width="100%"
              height="55"
            />
            <img
              class="hidden-lg-and-up"
              :src="require(`@/assets/imgs/web/icons/oxxo-gris.svg`)"
              :alt="'Walmart'"
              width="100%"
              height="55"
            />
          </v-col>
        </v-row>
        <v-divider class="my-2" dark></v-divider>
        <v-row
          class="mt-10 justify-center justify-lg-space-between text-center text-lg-left mx-auto"
        >
          <!-- logo -->
          <v-col
            cols="12"
            sm="8"
            lg="auto"
            class="order-10 mb-6 mb-lg-0 order-lg-0"
          >
            <img
              src="../assets/imgs/web/home/Logo2.png"
              alt="logo ferrepacifico"
              height="200px"
            />
          </v-col>
          <!-- menu -->
          <v-col cols="12" sm="8" md="4" lg="auto" class="mb-6 mb-lg-0">
            <h3 class="mb-3 mb-lg-4">Menú</h3>
            <ul>
              <li
                class="mb-2 mb-lg-2"
                v-for="(link, index) in links"
                :key="index"
              >
                <nuxt-link :to="{ name: link.redirecTo }" class="">{{
                  link.title
                }}</nuxt-link>
              </li>
            </ul>
          </v-col>
          <!-- contacto -->
          <v-col cols="12" sm="8" md="4" lg="auti" class="mb-6 mb-lg-0">
            <h3 class="mb-3 mb-lg-4">Contacto</h3>
            <ul class="contact text-center">
              <li
                class="d-flex align-start mb-3 justify-center justify-md-start"
              >
                <div class="icon mr-2 mr-lg-3">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p class="mb-0 text-left">
                  Recibiras noticias y las mejores promociones antes que nadie.
                </p>
              </li>
              <li
                class="d-flex align-start mb-3 justify-center justify-md-start"
              >
                <div class="icon mr-2 mr-lg-3">
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
                <a href="tel:+3143312131">314 331 21 31</a>
              </li>
              <li
                class="d-flex align-start mb-3 justify-center justify-md-start"
              >
                <div class="icon mr-2 mr-lg-3">
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
                <a
                  href="mailto:atencionaclientes@ferrepacifico.com.mx"
                  class="text-left text-break"
                  >atencionaclientes@ferrepacifico.com.mx</a
                >
              </li>
            </ul>
          </v-col>
          <!-- redes -->
          <v-col cols="12" sm="8" md="4" lg="auto" class="mb-6 mb-lg-0">
            <h3 class="mb-3 mb-lg-4">Síguenos</h3>
            <ul class="social">
              <li
                class="d-flex mb-3 justify-center justify-md-start"
                v-for="(item, index) in socials"
                :key="index"
              >
                <a
                  :href="item.redirecTo"
                  class="d-flex align-center"
                  target="_blank"
                >
                  <div class="icon mr-3">
                    <img
                      :src="require(`@/assets/imgs/web/icons/${item.icon}.svg`)"
                      :alt="item.name"
                    />
                  </div>
                  {{ item.name }}</a
                >
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-row class="justify-center mx-auto bottom">
      <v-col cols="10" md="12">
        <small
          ><nuxt-link to="/aviso-de-privacidad">Aviso de privacidad</nuxt-link>
          <span class="px-2">|</span>
          <nuxt-link to="/terminos-y-condiciones"
            >Términos y condiciones</nuxt-link
          ><span class="px-2">|</span
          ><nuxt-link to="/politica-de-venta"
            >Política de venta</nuxt-link
          ></small
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,

      links: [
        { title: "Productos", redirecTo: "productos" },
        { title: "Sucursales", redirecTo: "sucursales" },
        { title: "Marcas", redirecTo: "nuestras-marcas" },
        { title: "Nosotros", redirecTo: "nosotros" },
        { title: "Contacto", redirecTo: "contacto" },
      ],
      socials: [
        {
          name: "FerrepacificoMEX",
          redirecTo: "https://www.facebook.com/FerrepacificoMEX",
          icon: "facebook",
        },
        {
          name: "ferrepacifico",
          redirecTo: "https://instagram.com/ferrepacifico?utm_medium=copy_link",
          icon: "instagram",
        },
        {
          name: "ferrepacifico",
          redirecTo: "https://www.linkedin.com/company/ferrepacifico/",
          icon: "Linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #363636 !important;
  color: #ffffff !important;
  font-weight: 400 !important;
  flex-direction: column;
}

a {
  color: #ffffff !important;
  &:hover {
    // opacity: 0.6;
    text-decoration: underline;
  }
}

p {
  font-size: $fs-base;
}

h3 {
  font-size: $fs-md;
  text-transform: uppercase;
  font-weight: 400;
}
.bottom {
  background-color: #000000;
  font-size: $fs-base;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
img {
  object-fit: contain;
}
.contact {
  .icon {
    min-height: 16px;
    height: 16px;
    min-width: 16px;
    width: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      min-height: 14px;
      min-width: 14px;
    }
  }
}
.social {
  .icon {
    min-height: 20px;
    min-width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      min-height: 18px;
      min-width: 18px;
    }
  }
}
</style>
