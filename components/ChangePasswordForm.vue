<template>
  <div class="">
    <v-row class="mb-2 mb-md-4">
      <v-col cols="12">
        <h2 class="">ACTUALIZAR <strong>CONTRASEÑA</strong></h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pa-0">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <v-form @submit.prevent="changePassword">
            <v-row class="">
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="La contraseña"
                  :rules="{
                    requiredF: true,
                    min: 6,
                    max: 10,
                  }"
                  vid="confirmation"
                >
                  <label for="password">Nueva contraseña</label>
                  <v-text-field
                    color="blue-ligth"
                    id="password"
                    autocomplete="new-password"
                    ref="password"
                    type="password"
                    v-model.trim="clone.password"
                    solo
                    flat
                    outlined
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>

              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="Confirmación"
                  :rules="{ requiredF: true, confirmed: 'confirmation' }"
                >
                  <label for="password_confirmation">Confirmación</label>
                  <v-text-field
                    ref="password_confirmation"
                    color="blue-ligth"
                    id="password_confirmation"
                    type="password"
                    v-model.trim="clone.password_confirmation"
                    autocomplete="false"
                    solo
                    flat
                    outlined
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>

              <v-col class="">
                <v-btn
                  class="button-primary"
                  :loading="isLoading"
                  type="submit"
                  :disabled="isDisabled && invalid"
                  depressed
                  >ACTUALIZAR contraseña</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      clone: {
        password: "",
        password_confirmation: "",
      },
    };
  },
  async fetch() {
    this.clone = this.$app.$auth.clone;
  },
  methods: {
    async changePassword() {
      this.isDisabled = true;
      if (await this.$refs.observer.validate()) {
        this.isLoading = true;

        setTimeout(() => {
          this.isLoading = false;
          this.isDisabled = false;
        }, 3000);
      } else {
        const inputForm = ["password", "password_confirmation"];
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
  color: #000000;
  font-weight: 400;
}

@media screen and (min-width: $md) {
}
</style>
