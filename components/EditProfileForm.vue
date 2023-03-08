<template>
  <div class="">
    <v-row class="mb-2 mb-md-4">
      <v-col cols="12">
        <h2 class="">ACTUALIZAR <strong>PERFIL</strong></h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pa-0">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <v-form @submit.prevent="updateProfile">
            <v-row class="">
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El correo"
                  rules="required|email"
                >
                  <label for="email">Correo</label>
                  <v-text-field
                    autocomplete="email"
                    ref="email"
                    color="blue-ligth"
                    id="email"
                    type="email"
                    v-model.trim="clone.email"
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
                  autocomplete="tel"
                  name="El teléfono"
                  :rules="{
                    required: true,
                    min: 8,
                  }"
                >
                  <label for="phone">Teléfono</label>
                  <v-text-field
                    color="blue-ligth"
                    id="phone"
                    type="text"
                    ref="phone"
                    v-model.trim="clone.phone"
                    solo
                    flat
                    outlined
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>

              <v-col cols="12" class="">
                <v-btn
                  class="button-primary"
                  :loading="isLoading"
                  type="submit"
                  :disabled="isDisabled && invalid"
                  depressed
                  >ACTUALIZAR PERFIL</v-btn
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
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      clone: {
        email: "",
        phone: "",
      },
    };
  },

  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    async updateProfile() {
      this.isDisabled = true;
      if (await this.$refs.observer.validate()) {
        this.isLoading = true;

        setTimeout(() => {
          this.isLoading = false;
          this.isDisabled = false;
        }, 3000);
      } else {
        const inputForm = ["email", "phone"];
        for (let i = 0; i < inputForm.length; i++) {
          const element = inputForm[i];
          if (this.$refs[element].hasError) {
            this.$refs[element].focus();
            return;
          }
        }
      }
    },
    clear() {
      this.$refs.observer.reset();
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
