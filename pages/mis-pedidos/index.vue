<template>
  <section class="py-6 py-lg-16 order">
    <div class="content">
      <v-row class="justify-space-between align-center">
        <v-col cols="auto" sm="auto">
          <h2 class="">MIS <strong>PEDIDOS</strong></h2>
        </v-col>
        <v-col cols="auto" sm="auto">
          <div class="d-flex align-center">
            <h4 class="mr-3">Mes</h4>
            <v-select
              flat
              outlined
              solo
              hide-details
              :items="months"
              item-text="text"
              item-value="value"
              v-model="month"
            >
              <template v-slot:append>
                <v-icon class="icon"> mdi-chevron-down </v-icon>
              </template>
            </v-select>
          </div>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col cols="12">
          <v-card flat color="#ececec" class="rounded-card">
            <v-row class="justify-center">
              <v-col cols="12" md="11">
                <article
                  class="text-center text-md-left my-6"
                  v-for="(order, index) in orders"
                  :key="index"
                >
                  <v-row class="justify-space-between">
                    <v-col cols="12" class="" md="auto">
                      <h3>PEDIDO {{ order.id }}</h3>
                    </v-col>
                    <v-col cols="12" class="" md="auto">
                      <span class="hidden-sm-and-down price">{{
                        $util.getMoneyFormat(order.total)
                      }}</span>
                    </v-col>
                  </v-row>
                  <v-row class="justify-space-between">
                    <v-col cols="12" class="py-0" md="auto">
                      <p>{{ order.status }}</p>
                    </v-col>
                    <v-col cols="12" class="py-0" md="auto">
                      <p>
                        Realizado el
                        {{ order.date }}
                      </p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" class="py-0">
                      <p>
                        <b>Domicilio: </b>
                        {{ order.address }}
                      </p>
                    </v-col>
                  </v-row>

                  <v-row class="justify-space-between">
                    <v-col cols="12" class="py-0" md="auto">
                      <p>{{ order.number_items }} Productos</p>
                    </v-col>
                    <v-col cols="12" class="py-0" md="auto">
                      <v-btn
                        depressed
                        dark
                        small
                        class="button-primary"
                        color=""
                        :to="{
                          name: 'mis-pedidos-id',
                          params: { id: order.id },
                        }"
                        >ver detalle</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-row class="mt-4">
                    <v-col cols="12">
                      <v-divider></v-divider>
                    </v-col>
                  </v-row>
                </article>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: "Mis pedidos",
    meta: [
      // {
      //   hid: "description",
      //   name: "description",
      //   content: "Mis pedidos",
      // },
      // { hid: "keywords", name: "keywords", content: "" },
    ],
  },
  data() {
    return {
      orders: [
        {
          id: 3472983,
          total: "12,305.0",
          status: "Pendiente",
          address: "José María Heredia #2736",
          number_items: 10,
          date: "12 de Julio",
        },
        {
          id: 3472983,
          total: "12,305.0",
          status: "Pendiente",
          address: "José María Heredia #2736",
          number_items: 10,
          date: "12 de Julio",
        },
        {
          id: 3472983,
          total: "12,305.0",
          status: "Pendiente",
          address: "José María Heredia #2736",
          number_items: 10,
          date: "12 de Julio",
        },
        {
          id: 3472983,
          total: "12,305.0",
          status: "Pendiente",
          address: "José María Heredia #2736",
          number_items: 10,
          date: "12 de Julio",
        },
      ],
      month: null,
      months: [
        { text: "Todos", value: null },
        { text: "Enero", value: 1 },
        { text: "Febrero", value: 2 },
        { text: "Marzo", value: 3 },
        { text: "Abril", value: 4 },
        { text: "Mayo", value: 5 },
        { text: "Junio", value: 6 },
        { text: "Julio", value: 7 },
        { text: "Agosto", value: 8 },
        { text: "Septiembre", value: 9 },
        { text: "Octubre", value: 10 },
        { text: "Noviembre", value: 11 },
        { text: "Diciembre", value: 12 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.rounded-card {
  border-radius: 8px !important;
}

h2 {
  text-align: left;
  font-size: $fs-xl;
}

article {
  background-color: #ececec;
}

h3,
.price {
  font-size: $fs-md;
  color: #002a49;
  font-weight: 800;
}

h4 {
  font-size: $fs-md;
  color: #003a70;
  font-weight: 700;
  font-family: "Montserrat";
}

p {
  font-size: $fs-base;
  color: #373736;
  font-weight: 500;
  font-family: "Montserrat";
}

.icon {
  font-size: $fs-sm;
}
</style>
