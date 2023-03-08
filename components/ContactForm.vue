<template>
  <div class="">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <v-form @submit.prevent="sendForm">
        <v-row class="mt-4">
          <v-col cols="12" class="py-0">
            <validation-provider
              v-slot="{ errors }"
              name="El nombre"
              :rules="{
                required: true,
                min: 5,
              }"
            >
              <label for="name">Nombre</label>
              <v-text-field
                ref="name"
                autocomplete="name"
                color="blue-ligth"
                id="name"
                type="text"
                v-model.trim.trim="form.name"
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
              name="El correo"
              rules="required|email"
            >
              <label for="email">Correo</label>
              <v-text-field
                ref="email"
                autocomplete="email"
                color="blue-ligth"
                id="email"
                type="email"
                v-model.trim.trim="form.email"
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
              name="El telefono"
              rules="required"
            >
              <label for="phone">Teléfono</label>
              <v-text-field
                autocomplete="tel"
                ref="phone"
                color="blue-ligth"
                id="phone"
                type="text"
                v-model.trim.trim="form.phone"
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
              name="El mensaje"
              rules="required"
            >
              <label for="message">Mensaje</label>
              <v-textarea
                ref="message"
                outlined
                autocomplete="off"
                v-model.trim="form.message"
                id="message"
                auto-grow
                flat
                solo
                :error-messages="errors"
              ></v-textarea>
            </validation-provider>
          </v-col>
          <v-col cols="12" class="">
            <v-btn
              :loading="isLoading"
              :disabled="isDisabled && invalid"
              type="submit"
              color="primary"
              depressed
              class="button-primary"
              >ENVIAR</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>
    <!-- <sweet-modal icon="success" ref="modal">
      Hemos recibido su mensaje. Nos pondremos en contacto a la brevedad
    </sweet-modal> -->
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
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    async sendForm() {
      this.isDisabled = true;
      this.isLoading = true;
      if (await this.$refs.observer.validate()) {
        // this.$refs.modal.open();
        this.clear();

        this.isLoading = false;
        this.isDisabled = false;
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
    clear() {
      this.form.name = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.message = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
// button {
//   height: 43px !important;
//   font-weight: bold;
//   width: 100%;
//   background-color: $primary !important;
// }

@media screen and (min-width: $md) {
  // button {
  //   width: 134px !important;
  // }
}
</style>
