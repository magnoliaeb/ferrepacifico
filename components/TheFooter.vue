<template>
  <v-footer padless>
    <div class="content pt-6 pb-0 pb-lg-16">
      <div class="footer pb-10 pb-lg-0">
        <v-row class="justify-space-between mx-auto my-0">
          <v-col cols="4" md="6" lg="2">
            <img
              :src="require(`@/assets/img/Web/Icons/american_express.svg`)"
              :alt="'american_express'"
              width="100%"
              height="60"
            />
          </v-col>
          <v-col cols="4" md="6" lg="2">
            <img
              :src="require(`@/assets/img/Web/Icons/Visa.svg`)"
              :alt="'Visa'"
              width="100%"
              height="60"
            />
          </v-col>
          <v-col cols="4" md="6" lg="2">
            <img
              :src="require(`@/assets/img/Web/Icons/MasterCard.svg`)"
              :alt="'Master Card'"
              width="100%"
              height="60"
            />
          </v-col>
          <v-col cols="4" md="6" lg="2">
            <img
              :src="require(`@/assets/img/Web/Icons/Seven.svg`)"
              :alt="'Seven'"
              width="100%"
              height="60"
            />
          </v-col>
          <v-col cols="4" md="6" lg="2">
            <img
              class="hidden-sm-and-down"
              :src="require(`@/assets/img/Web/Icons/Walmart.svg`)"
              :alt="'Walmart'"
              width="100%"
              height="60"
            />
            <img
              class="hidden-md-and-up"
              :src="require(`@/assets/img/Web/Icons/oxxo-gris.svg`)"
              :alt="'Walmart'"
              width="100%"
              height="60"
            />
          </v-col>
        </v-row>
        <v-divider class="my-2" dark></v-divider>
        <v-row
          class="
            mt-10
            justify-center justify-lg-space-between
            text-center text-lg-left
            mx-auto
          "
        >
          <!-- logo -->
          <v-col cols="8" lg="" class="order-10 order-lg-0 pb-8 pb-lg-0">
            <img
              src="../assets/img/Web/home/Logo2.png"
              alt="logo ferrepacifico"
            />
          </v-col>
          <!-- menu -->
          <v-col cols="8" class="pb-8 pb-lg-0" lg="">
            <h3 class="mb-3 mb-lg-2">Menú</h3>
            <ul>
              <li v-for="(link, index) in links" :key="index">
                <nuxt-link :to="{ name: link.redirecTo }">{{
                  link.title
                }}</nuxt-link>
              </li>
            </ul>
          </v-col>
          <!-- contacto -->
          <v-col cols="8" class="pb-8 pb-lg-0" lg="">
            <h3 class="mb-3 mb-lg-2">Contacto</h3>
            <ul class="contact text-center">
              <li
                class="d-flex align-start mb-3 justify-center justify-lg-start"
              >
                <div class="icon">
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
                <p class="mb-0">
                  Recibiras noticias y las mejores promociones antes que nadie.
                </p>
              </li>
              <li
                class="d-flex align-start mb-3 justify-center justify-lg-start"
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
                <a href="tel:+31 4125 6538">31 4125 6538</a>
              </li>
              <li
                class="d-flex align-start mb-3 justify-center justify-lg-start"
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
                <a href="mailto:gcomercial@ferrepacifico.com.mx" class=""
                  >gcomercial@ferrepacifico.com.mx</a
                >
              </li>
            </ul>
          </v-col>
          <!-- redes -->
          <v-col cols="8" class="pb-8 pb-lg-0" lg="">
            <h3 class="mb-3 mb-lg-2">Síguenos</h3>
            <ul class="social">
              <li
                class="d-flex mb-3 justify-center justify-lg-start"
                v-for="(item, index) in socials"
                :key="index"
              >
                <div class="icon mr-3">
                  <img
                    :src="require(`@/assets/img/Web/Icons/${item.icon}.svg`)"
                    :alt="item.name"
                  />
                </div>
                <a :href="item.redirecTo">{{ item.name }}</a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="bottom py-2">
      <div class="content">
        <v-row class="justify-center mx-auto">
          <v-col cols="8" md="12">
            <small
              >Aviso de privacidad
              <span class="px-2 hidden-sm-and-down">|</span> Términos y
              condiciones</small
            >
          </v-col>
        </v-row>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,

      links: [
        { title: "Productos", redirecTo: "productos-generales" },
        { title: "Sucursales", redirecTo: "sucursales" },
        { title: "Marcas", redirecTo: "nuestras-marcas" },
        { title: "Nosotros", redirecTo: "nosotros" },
        { title: "Contacto", redirecTo: "contacto" },
      ],
      socials: [
        {
          name: "/ferrepacifico",
          redirecTo: "/ferrepacifico",
          icon: "Facebook",
        },
        {
          name: "/ferrepacifico",
          redirecTo: "/ferrepacifico",
          icon: "Instagram",
        },
        {
          name: "/ferrepacifico",
          redirecTo: "/ferrepacifico",
          icon: "Twitter",
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
  color: #ffffff;
  &:hover {
    opacity: 0.6;
  }
}

p,
a {
  font-size: 13px;
}

h3 {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
}
.bottom {
  background-color: #000000;
  font-size: 13px;
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
    min-width: 16px;
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