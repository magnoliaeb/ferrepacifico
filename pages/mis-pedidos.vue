<template>
  <section class="py-4 py-lg-8">
    <div class="content">
      <v-row class="mb-2 mb-md-4">
        <v-col>
          <h2 class="mb-4">MIS <strong>PEDIDOS</strong></h2>
          <v-card flat color="#ececec" class="rounded-card">
            <div class="px-6 py-4 px-lg-16 py-lg-7">
              <div class="pt-5 pt-lg-7">
                <article
                  class="mb-7"
                  v-for="(order, index) in orders"
                  :key="index"
                >
                  <div class="d-flex justify-space-between">
                    <p>PEDIDO {{ order.num }}</p>
                    <span> $12,305.00</span>
                  </div>
                  <div class="d-flex justify-space-between">
                    <p>{{ order.status }}</p>
                    <span>Realizado el {{ order.createdAt }}</span>
                  </div>
                  <p>{{ order.address }}</p>
                  <div class="d-flex justify-space-between">
                    <p>{{ order.quantityProduct }} Productos</p>
                    <v-btn depressed>ver detalle</v-btn>
                  </div>
                  <v-divider></v-divider>
                </article>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      selected: -1,
      orders: [
        {
          id: 1,
          num: "3472983",
          total: "12,305.00",
          createdAt: "Realizado el 12 de Julio",
          status: "Pendiente",
          address: "Domicilio: José María Heredia #2736",
          quantityProduct: 10,
        },
        {
          id: 2,
          num: "3759209",
          total: "12,305.00",
          createdAt: "Realizado el 12 de Julio",
          status: "Confirmado",
          address: "Domicilio: José María Heredia #2736",
          quantityProduct: 10,
        },
        {
          id: 3,
          num: "9264819",
          total: "12,305.00",
          createdAt: "Realizado el 12 de Julio",
          status: "Entregado",
          address: "Domicilio: José María Heredia #2736",
          quantityProduct: 10,
        },
        {
          id: 4,
          num: "4719471",
          total: "12,305.00",
          createdAt: "Realizado el 12 de Julio",
          status: "Entregado",
          address: "Domicilio: José María Heredia #2736",
          quantityProduct: 10,
        },
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