<template>
  <client-only>
    <div>
      <StepTitle :number="1" :title="'Datos de clientes'" />
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El nombre"
                rules="required"
              >
                <label for="order.identification.name">Nombre*</label>
                <v-text-field
                  :error-messages="errors"
                  color="info"
                  id="order.identification.name"
                  type="text"
                  ref="name"
                  autocomplete="name"
                  v-model.trim="order.identification.name"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El teléfono"
                rules="required"
              >
                <label for="order.identification.phone">Teléfono*</label>
                <v-text-field
                  autocomplete="tel"
                  :error-messages="errors"
                  color="info"
                  id="order.identification.phone"
                  type="text"
                  ref="phone"
                  v-model.trim="order.identification.phone"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El correo"
                rules="required|email"
              >
                <label for="order.identification.email"
                  >Correo electrónico*</label
                >
                <v-text-field
                  ref="email"
                  autocomplete="email"
                  :error-messages="errors"
                  color="info"
                  id="order.identification.email"
                  type="email"
                  v-model.trim="order.identification.email"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
          </v-row>

          <!-- SHIPPING -->

          <v-row class="my-4">
            <v-col cols="12" class="">
              <h3>Envio</h3>

              <v-radio-group hide-details v-model="requiresShipping" row="">
                <v-radio color="info" :value="true">
                  <template #label>
                    <span>Si requiero envío</span>
                  </template>
                </v-radio>
                <v-radio color="info" :value="false">
                  <template #label>
                    <span>Recoger en tienda</span>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-divider></v-divider>
            </v-col>
          </v-row>

          <template v-if="requiresShipping">
            <v-row>
              <v-col cols="12" class="">
                <v-checkbox class="mt-0" color="info" hide-details>
                  <template #label>
                    <span>Copiar dirección de facturación</span>
                  </template>
                </v-checkbox>
              </v-col>
              <v-col cols="12" class="">
                <v-btn
                  depressed
                  class="button-primary"
                  small
                  @click="openDialog()"
                >
                  Utilizar mis direcciones
                </v-btn>
              </v-col>
            </v-row>

            <v-row class="align-center">
              <v-col cols="8" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="La calle"
                  rules="requiredF"
                >
                  <label for="shipping.address.street">Calle</label>
                  <v-text-field
                    :error-messages="errors"
                    color="info"
                    id="shipping.address.street"
                    type="text"
                    ref="street"
                    v-model.trim="shipping.address.street"
                    solo
                    flat
                    outlined
                  />
                </validation-provider>
              </v-col>
              <v-col cols="4" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El número"
                  rules="required"
                >
                  <label for="shipping.address.number">Número</label>
                  <v-text-field
                    :error-messages="errors"
                    color="info"
                    id="shipping.address.number"
                    type="text"
                    ref="number"
                    v-model="shipping.address.number"
                    solo
                    flat
                    outlined
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="La colonia"
                  rules="requiredF"
                >
                  <label for="shipping.address.suburb">Colonia</label>
                  <v-text-field
                    :error-messages="errors"
                    color="info"
                    id="shipping.address.suburb"
                    type="text"
                    ref="suburb"
                    v-model.trim="shipping.address.suburb"
                    solo
                    flat
                    outlined
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="La población"
                  rules="requiredF"
                >
                  <label for="shipping.address.city-name">Población</label>
                  <v-text-field
                    :error-messages="errors"
                    color="info"
                    id="shipping.address.city-name"
                    type="text"
                    ref="city_name"
                    v-model.trim="shipping.address.city_name"
                    solo
                    flat
                    outlined
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El estado"
                  rules="required"
                >
                  <label for="shipping.address.state_name">Estado</label>
                  <v-text-field
                    :error-messages="errors"
                    color="info"
                    id="shipping.address.state_name"
                    type="text"
                    ref="state_name"
                    v-model.trim="shipping.address.state_name"
                    solo
                    flat
                    outlined
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El país"
                  rules="required"
                >
                  <label for="shipping.address.country_name">País</label>
                  <v-text-field
                    :error-messages="errors"
                    color="info"
                    id="shipping.address.country_name"
                    type="text"
                    value="México"
                    autocomplete="country-name"
                    ref="country_name"
                    v-model.trim="shipping.address.country_name"
                    solo
                    flat
                    outlined
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El código"
                  rules="required"
                >
                  <label for="shipping.address.postcode">Código postal</label>
                  <v-text-field
                    autocomplete="postal-code"
                    :error-messages="errors"
                    color="info"
                    id="shipping.address.postcode"
                    type="text"
                    ref="postcode"
                    v-model.trim="shipping.address.postcode"
                    solo
                    flat
                    outlined
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <v-btn
                  class="button-primary"
                  block
                  depressed
                  max-width="100%"
                  :loading="quoting"
                  :disabled="quoting || !shipping.address.postcode"
                  @click="getQuote"
                >
                  Comprobar métodos de envío
                </v-btn>
              </v-col>

              <v-col v-if="!shipping.address.postcode" cols="12">
                <v-alert type="warning">
                  Ingrese el código postal para obtener opciones de envío
                </v-alert>
              </v-col>
            </v-row>
          </template>

          <v-row class="mt-4">
            <v-col
              cols="6"
              sm="4"
              lg="3"
              class=""
              v-for="(method, index) in computedQuote"
              :key="index"
            >
              <div
                @click="methodMailing(method.id)"
                class="justify-space-around card-send d-flex fill-height flex-column px-2 px-lg-4 py-2 py-lg-4"
                :class="{ selected: shipping.shipping_quote_id == method.id }"
              >
                <img
                  :src="
                    require(`@/assets/imgs/web/pay-metodos/${method.img}.svg`)
                  "
                  :alt="method.name"
                />
                <p
                  class="text-center mt-2"
                  :class="{ 'text-default': method.id == 1 }"
                >
                  {{ method.total }}
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- INVOICE -->

          <v-row class="mt-4">
            <v-col cols="12" class="">
              <h3>¿Requiere factura?</h3>
            </v-col>
          </v-row>
          <v-row class="">
            <v-col cols="12" class="">
              <v-radio-group hide-details v-model="requiresInvoice" row="">
                <v-radio color="info" :value="true">
                  <template #label>
                    <span>Si</span>
                  </template>
                </v-radio>
                <v-radio color="info" :value="false">
                  <template #label>
                    <span>No</span>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row v-if="requiresInvoice">
            <v-col cols="12" class="">
              <v-checkbox
                hide-details=""
                class="mt-0"
                color="info"
                @change="
                  copyAddress(...arguments, shipping.address, invoice.address)
                "
              >
                <template #label>
                  <span>Copiar dirección de envío</span>
                </template>
              </v-checkbox>
            </v-col>
            <v-col cols="12" class="mb-4">
              <v-btn
                small
                class="button-primary"
                depressed
                @click="openDialog(invoice.address)"
              >
                Utilizar mis direcciones
              </v-btn>
            </v-col>

            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El nombre"
                rules="required"
              >
                <label for="invoice.business_name">Nombre / Razón social</label>
                <v-text-field
                  ref="business_name"
                  :error-messages="errors"
                  color="info"
                  id="invoice.business_name"
                  type="text"
                  v-model.trim="invoice.business_name"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El correo"
                rules="required|email"
              >
                <label for="invoice.email">Correo electrónico</label>
                <v-text-field
                  autocomplete="email"
                  :error-messages="errors"
                  color="info"
                  id="invoice.email"
                  type="gmail"
                  ref="emailE"
                  v-model.trim="invoice.email"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El RFC"
                rules="required"
              >
                <label for="invoice.rfc">RFC*</label>
                <v-text-field
                  :error-messages="errors"
                  color="info"
                  id="invoice.rfc"
                  type="text"
                  ref="rfc"
                  v-model.trim="invoice.rfc"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El CFDI"
                rules="required"
              >
                <label for="invoice.cfdi">Uso de CFDI*</label>
                <v-select
                  :error-messages="errors"
                  id="invoice.cfdi"
                  flat
                  ref="cfdi"
                  outlined
                  solo
                  :items="invoiceConfig.cfdi"
                  v-model.trim="invoice.cfdi"
                  item-text="Name"
                  item-value="Value"
                >
                  <template v-slot:append>
                    <v-icon class="icon"> mdi-chevron-down </v-icon>
                  </template>
                </v-select>
              </validation-provider>
            </v-col>
            <v-col cols="8" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                :vid="'calle-1'"
                name="La calle"
                rules="requiredF"
              >
                <label for="invoice.address.street">Calle</label>
                <v-text-field
                  ref="streetE"
                  autocomplete="street-address"
                  :error-messages="errors"
                  color="info"
                  id="invoice.address.street"
                  type="text"
                  v-model.trim="invoice.address.street"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="4" class="py-0">
              <validation-provider
                :vid="'number-1'"
                v-slot="{ errors }"
                name="El número"
                rules="required"
              >
                <label for="invoice.address.number">Número</label>
                <v-text-field
                  ref="numberE"
                  :error-messages="errors"
                  color="info"
                  id="invoice.address.number"
                  type="text"
                  v-model="invoice.address.number"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                :vid="'suburb-1'"
                name="La colonia"
                rules="requiredF"
              >
                <label for="invoice.address.suburb">Colonia</label>
                <v-text-field
                  :error-messages="errors"
                  color="info"
                  id="invoice.address.suburb"
                  type="text"
                  ref="suburbE"
                  v-model.trim="invoice.address.suburb"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                :vid="'city-name-1'"
                v-slot="{ errors }"
                name="La población"
                rules="requiredF"
              >
                <label for="invoice.address.city-name">Población</label>
                <v-text-field
                  :error-messages="errors"
                  color="info"
                  id="invoice.address.city-name"
                  type="text"
                  ref="city_nameE"
                  v-model.trim="invoice.address.city_name"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                :vid="'state_name-1'"
                v-slot="{ errors }"
                name="El estado"
                rules="required"
              >
                <label for="invoice.address.state_name">Estado</label>
                <v-text-field
                  :error-messages="errors"
                  color="info"
                  id="invoice.address.state_name"
                  type="text"
                  ref="state_nameE"
                  v-model.trim="invoice.address.state_name"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                :vid="'country_name-1'"
                v-slot="{ errors }"
                name="El país"
                rules="required"
              >
                <label for="invoice.address.country_name">País</label>
                <v-text-field
                  autocomplete="country-name"
                  :error-messages="errors"
                  color="info"
                  id="invoice.address.country_name"
                  type="text"
                  value="México"
                  ref="country_nameE"
                  v-model.trim="invoice.address.country_name"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                :vid="'postcode-1'"
                v-slot="{ errors }"
                name="El código"
                rules="required"
              >
                <label for="invoice.address.postcode">Código postal</label>
                <v-text-field
                  autocomplete="postal-code"
                  ref="postcodeE"
                  :error-messages="errors"
                  color="info"
                  id="invoice.address.postcode"
                  type="text"
                  v-model.trim="invoice.address.postcode"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
          </v-row>

          <!-- SUBMIT -->

          <!-- <v-row class="flex-nowrap">
            <v-col cols="12" sm="10" md="10" lg="7">
              <v-btn
                :loading="isLoading"
                type="submit"
                v-if="true"
                depressed
                :disabled="$store.state.cart.busy && isDisabled && invalid"
              >
                CONTINUAR CON EL PAGO
              </v-btn>
              <v-btn
                v-else
                x-large
                block
                max-width="100%"
                depressed
                color="info"
                :to="{ name: 'iniciar-sesion' }"
                dark
              >
                <span class="d-flex flex-wrap white--text text-center"
                  >Para continuar favor de <br class="hidden-sm-and-up pb-2" />
                  iniciar sesión</span
                >
              </v-btn>
            </v-col>
          </v-row> -->
        </form>
      </validation-observer>

      <v-dialog v-model="dialog" width="500">
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(address, i) in addresses" :key="i">
                <v-list-item-content>
                  <b>{{ `${address.tag} ` }}</b> {{ address.formatted }}
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-dialog>
    </div>
  </client-only>
</template>

<script>
import StepTitle from "./StepTitle.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: { StepTitle, ValidationProvider, ValidationObserver },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      order: {},
      invoice: {},
      shipping: {},
      invoiceConfig: {},
      quoting: false,
      isLoading: false,
      requiresInvoice: true,
      requiresShipping: true,
      quote: [],
      dialog: false,
      focusAddress: null,
      order: {
        identification: {
          name: "",
          phone: "",
          email: "",
        },
      },
      shipping: {
        address: {
          street: "",
          number: "",
          suburb: "",
          city_name: "",
          state_name: "",
          country_name: "",
          postcode: "",
        },
      },
      invoice: {
        address: {
          business_name: "",
          emailE: "",
          rfc: "",
          cfdi: "",
          streetE: "",
          numberE: "",
          suburbE: "",
          city_nameE: "",
          state_nameE: "",
          country_nameE: "",
          postcodeE: "",
        },
      },
      addresses: [
        {
          tag: "CASA",
          formatted:
            " Calle José María Heredia #1234 Col. Ladron de Guevara C.P. 23456 Manzanillo Colima",
        },
        {
          tag: "PRINCIPAL",
          formatted:
            "Calle José María Heredia #1234 Col. Ladron de Guevara C.P. 23456 Manzanillo Colima",
        },
      ],
    };
  },

  computed: {
    computedQuote() {
      return [
        {
          id: 1,
          img: "store",
          shipping_provider: "1",
          total: "Recoger en tienda",
        },
        {
          id: 2,
          img: "fedex",
          shipping_provider: "1",
          total: "$200.00",
        },
        {
          id: 3,
          img: "estafeta",
          shipping_provider: "1",
          total: "$193.00",
        },
      ];
    },
  },

  methods: {
    setData() {
      // this.order = this.$app.$cart.clone();
      // this.invoice = this.$app.$cart.clone({ withInvoice: true }).invoice;
      // this.shipping = this.$app.$cart.clone({ withShipping: true }).shipping;
    },

    getQuote() {
      // this.quoting = true;
      // this.$app.$cart
      //   .getQuote(this.shipping.address.postcode)
      //   .then((response) => (this.quote = response))
      //   .finally(() => (this.quoting = false));
    },

    methodMailing(id) {
      this.$set(this.shipping, "shipping_quote_id", id);
    },

    copyAddress(makeCopy, origin, destination) {
      // this.dialog = false;
      // if (makeCopy) {
      //   origin = this.$util.clone(origin);
      //   this.$set(destination, "postcode", origin.postcode);
      //   this.$set(destination, "suburb", origin.suburb);
      //   this.$set(destination, "street", origin.street);
      //   this.$set(destination, "number", origin.number);
      //   this.$set(destination, "city_name", origin.city_name);
      //   this.$set(destination, "state_name", origin.state_name);
      //   this.$set(destination, "country_name", origin.country_name);
      // }
    },

    openDialog(destination) {
      // this.$set(this, "focusAddress", destination);
      this.dialog = true;
    },

    async submit() {
      // if (await this.$refs.observer.validate()) {
      //   this.isLoading = true;
      //   if (this.requiresShipping) {
      //     this.order.shipping = this.$util.clone(this.shipping);
      //   } else {
      //     this.order.shipping = null;
      //   }
      //   if (this.requiresInvoice) {
      //     this.order.invoice = this.$util.clone(this.invoice);
      //   } else {
      //     this.order.invoice = null;
      //   }
      //   this.$app.$cart
      //     .update(this.order)
      //     .then(() => {
      //       this.setData();
      //       this.$router.push({
      //         name: "pago-envio",
      //       });
      //     })
      //     .finally(() => (this.isLoading = false));
      // } else {
      //   let inputForm;
      //   if (this.requiresShipping && !this.requiresInvoice) {
      //     inputForm = Object.keys({
      //       ...this.formUser,
      //       ...this.form,
      //     });
      //   } else if (!this.requiresShipping && this.requiresInvoice) {
      //     inputForm = Object.keys({ ...this.formUser, ...this.formInvoice });
      //   } else {
      //     inputForm = Object.keys({
      //       ...this.formUser,
      //       ...this.form,
      //       ...this.formInvoice,
      //     });
      //   }
      //   // console.log(inputForm);
      //   for (let i = 0; i < inputForm.length; i++) {
      //     const element = inputForm[i];
      //     if (this.$refs[element].hasError) {
      //       this.$refs[element].focus();
      //       return;
      //     }
      //   }
      // }
    },
  },

  created() {
    // this.setData();
  },
};
</script>

<style lang="scss" scoped>
label {
  color: #000000;
  font-weight: 400;
  font-family: "Montserrat";
  padding-bottom: $fs-sm;
}
h3 {
  font-size: $fs-md;
  color: #003a70;
  font-weight: 700;
  font-family: "Montserrat";
}
span {
  font-size: $fs-sm;
  line-height: 12px;
  color: #061528;
  font-weight: 400;
  font-family: "Montserrat";
}
button {
  font-size: $fs-xs !important;
  color: #ffffff;
  font-weight: bold !important;
  background-color: #003a70 !important;
  width: 100%;
}
.card-send {
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
}
p {
  font-size: $fs-base;
  color: #000000;
  font-weight: 700;
  font-family: "Montserrat";
  text-align: center;
}
p.text-default {
  font-size: $fs-base;
  color: #000000;
  font-weight: 400;
  font-family: "Montserrat";
  text-align: center;
}
.selected {
  border: 2px solid $info;
}

@media screen and (min-width: $md) {
  button {
    width: 335px !important;
    height: 39px !important;
  }
}
</style>
