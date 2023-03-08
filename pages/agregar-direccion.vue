<template>
  <section class="py-6 py-lg-16">
    <div class="content">
      <v-row class="justify-center" no-gutters>
        <v-col cols="12" md="11" lg="8" xl="7">
          <v-row class="mb-2 mb-md-3">
            <v-col cols="12" class="">
              <BtnGoBack />
            </v-col>
          </v-row>
          <v-row class="mb-2 mb-md-4">
            <v-col cols="12">
              <h2 class="">AGREGAR <strong>DIRECCIÓN</strong></h2>
            </v-col>
          </v-row>
          <div class="">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="createNewAddress">
                <v-row class="">
                  <v-col cols="12" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="La dirección"
                      rules="requiredF"
                    >
                      <label for="name">Nombre de dirección</label>
                      <v-text-field
                        :error-messages="errors"
                        color="blue-ligth"
                        id="name"
                        ref="name"
                        type="text"
                        v-model.trim="form.name"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="La Calle"
                      rules="requiredF"
                    >
                      <label for="street">Calle</label>
                      <v-text-field
                        ref="street"
                        :error-messages="errors"
                        color="blue-ligth"
                        id="street"
                        type="text"
                        v-model.trim="form.street"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="El número"
                      rules="required"
                    >
                      <label class="hidden-sm-and-down" for="number"
                        >Número</label
                      >
                      <label class="hidden-md-and-up" for="number"
                        >Número</label
                      >
                      <v-text-field
                        ref="number"
                        :error-messages="errors"
                        color="blue-ligth"
                        id="number"
                        type="text"
                        v-model.trim="form.number"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="La colonia"
                      rules="requiredF"
                    >
                      <label for="suburb">Colonia</label>
                      <v-text-field
                        ref="suburb"
                        :error-messages="errors"
                        color="blue-ligth"
                        id="suburb"
                        type="text"
                        v-model.trim="form.suburb"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="El código"
                      rules="requiredF"
                    >
                      <label for="postcode">Código Postal</label>
                      <v-text-field
                        ref="postcode"
                        :error-messages="errors"
                        color="blue-ligth"
                        id="postcode"
                        autocomplete="postal-code"
                        type="text"
                        v-model.trim="form.postcode"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="La ciudad"
                      rules="requiredF"
                    >
                      <label for="city_name">Ciudad</label>
                      <v-text-field
                        autocomplete="street-address"
                        ref="city_name"
                        :error-messages="errors"
                        color="blue-ligth"
                        id="city_name"
                        type="text"
                        v-model.trim="form.city_name"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="El estado"
                      rules="required"
                    >
                      <label for="state_name">Estado</label>
                      <v-text-field
                        ref="state_name"
                        :error-messages="errors"
                        color="blue-ligth"
                        id="state_name"
                        type="text"
                        v-model.trim="form.state_name"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>
                  <v-col cols="12" md="12" lg="4" class="py-0">
                    <validation-provider
                      v-slot="{ errors }"
                      name="El país"
                      rules="required"
                    >
                      <label for="country_name">País</label>
                      <v-text-field
                        autocomplete="country-name"
                        ref="country_name"
                        :error-messages="errors"
                        color="blue-ligth"
                        id="country_name"
                        type="text"
                        v-model.trim="form.country_name"
                        solo
                        flat
                        outlined
                      />
                    </validation-provider>
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <v-checkbox
                      class="mt-0"
                      id="isPrincipal"
                      v-model.trim="form.isPrincipal"
                      color="primary"
                    >
                      <template #label>
                        <span>Definir como dirección principal</span>
                      </template>
                    </v-checkbox>
                  </v-col>

                  <v-col cols="12" class="">
                    <v-btn
                      :loading="isLoading"
                      type="submit"
                      :disabled="isDisabled && invalid"
                      color=""
                      block
                      class="button-primary"
                      depressed
                      >Agregar dirección</v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
            </validation-observer>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import BtnGoBack from "../components/BtnGoBack.vue";

export default {
  head: {
    title: "Agregar dirección",
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    BtnGoBack,
  },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      form: {
        name: "",
        street: "",
        number: "",
        suburb: "",
        postcode: "",
        city_name: "",
        state_name: "",
        country_name: "",
        isPrincipal: false,
      },
    };
  },

  methods: {
    async createNewAddress() {
      this.isDisabled = true;

      if (await this.$refs.observer.validate()) {
        this.isLoading = true;

        this.isLoading = false;
        this.isDisabled = false;
        this.$router.push("mi-perfil");
      } else {
        const inputForm = Object.keys(this.form);
        for (let i = 0; i < inputForm.length; i++) {
          const element = inputForm[i];
          if (this.$refs[element].hasError) {
            this.$refs[element].focus();
            return;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: left;
}

label {
  font-weight: 400;
  font-family: "Montserrat";
}

span {
  font-size: $fs-xs;
  color: $info;
  font-weight: 400;
  font-family: "Montserrat";
}

@media screen and (min-width: $md) {
}
</style>
