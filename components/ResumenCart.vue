<template>
  <v-row>
    <v-col cols="12">
      <v-card flat color="#ececec" class="rounded-card py-6 px-3 px-md-6">
        <v-row>
          <v-col cols="12">
            <h3 class="">Resumen</h3>
          </v-col>
        </v-row>
        <v-row class="justify-space-between">
          <v-col cols="auto" class="pb-0">
            <p>Subtotal</p>
          </v-col>
          <v-col cols="auto" class="pb-0">
            <span>{{ $util.getMoneyFormat(3500) }}</span>
          </v-col>
        </v-row>

        <v-row class="justify-space-between">
          <v-col cols="auto" class="pb-0">
            <p>Descuento</p>
          </v-col>
          <v-col cols="auto" class="pb-0">
            <span>{{ $util.getMoneyFormat(10) }}</span>
          </v-col>
        </v-row>

        <v-row class="justify-space-between">
          <v-col cols="auto" class="pb-0">
            <p>IVA</p>
          </v-col>
          <v-col cols="auto" class="pb-0">
            <span>{{ $util.getMoneyFormat(3) }}</span>
          </v-col>
        </v-row>

        <v-row class="justify-space-between">
          <v-col cols="auto" class="pb-0">
            <p>Envio</p>
          </v-col>
          <v-col cols="auto" class="pb-0">
            <span>{{ $util.getMoneyFormat(400) }}</span>
          </v-col>
        </v-row>
        <v-row class="justify-space-between">
          <v-col cols="auto" class="pb-0">
            <h4>Total</h4>
          </v-col>
          <v-col cols="auto" class="">
            <span>{{ $util.getMoneyFormat(7500) }}</span>
          </v-col>
        </v-row>
        <v-row class="">
          <v-col cols="12" class="pb-0">
            <h5>Cupón de descuento</h5>
          </v-col>
        </v-row>
        <v-form @submit.prevent="setCoupon">
          <v-row>
            <v-col cols="12">
              <v-text-field
                id="coupon_name"
                type="text"
                solo
                color="primary"
                flat
                hide-details
                outlined
                v-model="coupon_name"
                :disabled="false"
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                depressed
                block
                dark
                class="button-primary"
                color=""
                :to="{ name: 'info-de-envio' }"
                :disabled="false"
              >
                Proceder al pago
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      coupon_name: "",
      alert: false,
    };
  },

  methods: {
    setCoupon() {},

    showAlert() {},
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #373736;
}
.rounded-card {
  border-radius: 5px !important;
  max-width: 371px;
}

h3 {
  font-size: $fs-md;
  font-weight: bold;
}
p,
h5 {
  font-size: $fs-sm;
}

span {
  font-size: $fs-base;
  font-weight: bold;
}

h4 {
  font-size: $fs-base;
  font-weight: bold;
}

@media screen and (min-width: $xl) {
}
</style>
