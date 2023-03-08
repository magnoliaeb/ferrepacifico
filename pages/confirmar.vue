<template>
  <div class="justify-center d-flex py-6 py-lg-16">
    <div class="content-article">
      <v-row class="justify-center">
        <!-- <v-col cols="12" class="text-center">
      <h2 class="mb-3">Estamos procesando su pago</h2>
      <h3>Un momento por favor.</h3>
    </v-col> -->
        <v-col cols="12" class="text-center">
          <h2 class="mb-3">¡Tu pedido ha sido confirmado!</h2>
          <h3>
            Hemos enviado el resumen de tu pedido a tu correo electrónico.
          </h3>
        </v-col>
        <v-col cols="12" sm="12">
          <article class="pa-2 pa-sm-6 py-4">
            <div class="">
              <h5 class="mb-5">Pago</h5>

              <v-row class="justify-space-between">
                <v-col cols="auto">
                  <p class="">Subtotal</p>
                </v-col>
                <v-col cols="auto">
                  <span>{{ $util.getMoneyFormat(100) }}</span>
                </v-col>
              </v-row>
              <v-row class="justify-space-between">
                <v-col cols="auto">
                  <p class="">Descuento</p>
                </v-col>
                <v-col cols="auto">
                  <span>{{ $util.getMoneyFormat(20) }}</span>
                </v-col>
              </v-row>
              <v-row class="justify-space-between">
                <v-col cols="auto">
                  <p class="">Envío</p>
                </v-col>
                <v-col cols="auto">
                  <span>{{ $util.getMoneyFormat(0) }}</span>
                </v-col>
              </v-row>

              <v-row class="card-total justify-space-between">
                <v-col cols="auto">
                  <h4>Total</h4>
                </v-col>
                <v-col cols="auto">
                  <span>{{ $util.getMoneyFormat(2562) }}</span>
                </v-col>
              </v-row>
            </div>
            <div class="py-2">
              <v-row
                class="flex justify-space-between d-md-none"
                tag="li"
                v-for="(item, index) in items"
                :key="index"
              >
                <v-col
                  cols="auto"
                  md="auto"
                  class="flex-grow-0 mx-auto d-flex justify-center justify-sm-start"
                >
                  <nuxt-link
                    class="d-block"
                    :to="{ name: 'productos-id', params: { id: 1 } }"
                  >
                    <v-img
                      v-if="item.img"
                      :width="heightAndWidthImg"
                      transition="scale-transition"
                      :height="heightAndWidthImg"
                      :src="require(`../assets/imgs/web/home/${item.img}.png`)"
                      :alt="item.name"
                      aspect-ratio="1"
                      class="grey lighten-3 mr-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            :size="30"
                            :width="3"
                            indeterminate
                            color="primary"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </nuxt-link>
                </v-col>
                <v-col cols="auto" md="" class="text-left flex-grow-1">
                  <nuxt-link
                    class="d-block"
                    :to="{ name: 'productos-id', params: { id: 1 } }"
                  >
                    <h3 class="mb-2 text-left">
                      {{ item.name }}
                    </h3>
                  </nuxt-link>
                  <p class="">{{ "$ 20.00" }}</p>
                </v-col>
                <v-col cols="12" md="auto" class="text-right d-md-block">
                  <span class="">
                    {{ $util.getMoneyFormat(345.0) }}
                  </span>
                  <small class="d-block my-3">{{ 3 }} pz</small>
                </v-col>
              </v-row>

              <!-- table -->
              <div class="d-none d-md-block my-4">
                <table class="">
                  <tr class="">
                    <th class="text-left"><h5>Productos</h5></th>
                    <th>Cant</th>
                    <th class="">P. Unitario</th>
                    <th>Total</th>
                  </tr>
                  <tr class="" v-for="(item, index) in items" :key="index">
                    <td class="d-flex align-center">
                      <nuxt-link
                        class="d-block"
                        :to="{ name: 'productos-id', params: { id: 1 } }"
                      >
                        <v-img
                          v-if="item.img"
                          :width="heightAndWidthImg"
                          transition="scale-transition"
                          :height="heightAndWidthImg"
                          :src="
                            require(`../assets/imgs/web/home/${item.img}.png`)
                          "
                          :alt="item.name"
                          aspect-ratio="1"
                          class="grey lighten-3 mr-2"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                :size="30"
                                :width="3"
                                indeterminate
                                color="primary"
                              ></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </nuxt-link>

                      <nuxt-link
                        class="d-block"
                        :to="{ name: 'productos-id', params: { id: 1 } }"
                      >
                        <span>{{ item.name }}</span>
                      </nuxt-link>
                    </td>
                    <td class="text-center">{{ 15 }}</td>
                    <td class="text-center">
                      {{ $util.getMoneyFormat(30) }}
                    </td>
                    <td class="text-center">
                      {{ $util.getMoneyFormat(3265) }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <v-row class="">
              <v-col cols="12">
                <h5 class="mb-5">Dirección de envío</h5>
                <div class="mx-1 mx-md-3">
                  <p class="">
                    Donato Guerra #23 Colonia Centro C.P. 44210 Guadalajara,
                    Jalisco, México. Claudia Espinosa Monrroy Correo:
                    clau.esmo@gmail.com Teléfono: (33) 2345 6789
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-row class="">
              <v-col cols="12">
                <h5 class="mb-5">Método de Pago</h5>
                <div class="mx-1 mx-md-3">
                  <div class="d-flex align-center">
                    <img
                      class="mr-2"
                      src="../assets/imgs/web/pay-metodos/amex.svg"
                      alt="amex"
                    />
                    <span>Numero de tarjeta: **** **** **** 2475</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </article>
        </v-col>
        <v-col cols="12">
          <v-btn outlined block to="/productos">Seguir comprando</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Confirmar envio",
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto4",
        },

        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto1",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto2",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto3",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto1",
        },
      ],
    };
  },
  computed: {
    heightAndWidthImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 70;
        case "sm":
          return 70;
        case "md":
          return 70;
        case "lg":
          return 70;
        case "xl":
          return 70;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content-article {
  max-width: 540px;
}
.table-responsibe {
  overflow: auto;
}
article {
  background-color: #f0f0f0;
  border-radius: $fs-xs;
}
h2 {
  font-size: $fs-3xl;
  color: #003a70;
  font-weight: 900;
  font-family: "Montserrat";
  text-align: center;
}
h3 {
  font-size: $fs-base;
  color: #003a70;
  font-weight: 400;
  font-family: "Montserrat";
  text-align: center;
}
h4 {
  font-size: $fs-md;
  color: #000000;
  font-weight: 700;
  font-family: "Montserrat";
  text-align: left;
}
p,
span {
  font-size: $fs-sm;
  color: #061528;
  font-weight: 400;
  font-family: "Montserrat";
}
.card-total {
  background-color: #f7f7f7;
  border-radius: 4px;
  h4,
  span {
    font-size: $fs-md;

    color: #003a70;
    font-weight: 700;
    font-family: "Montserrat";
  }
}

table {
  width: 100%;
}
th {
  font-size: $fs-xs;
  color: #b0b0b0;
  font-weight: 400;
  font-family: "Montserrat";
  &:first-child {
    h5 {
      font-size: $fs-md;
      color: #003a70;
      font-weight: 700;
      font-family: "Montserrat";
      text-align: left;
    }
  }
}
td {
  font-size: $fs-xs;
  color: #000000;
  padding: 6px 0;
}

h5 {
  font-size: $fs-base;
  color: #003a70;
  font-weight: 700;
  font-family: "Montserrat";
}

button {
  font-size: $fs-xs !important;
  color: #979797 !important;
  font-weight: bold !important;
  border: 3px solid #979797;
}

@media screen and (min-width: $md) {
}
</style>
