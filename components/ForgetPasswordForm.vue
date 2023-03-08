<template>
  <div class="content-form">
    <h1 class="mb-4 mb-md-10">RECUPERAR <strong>CONTRASEÑA</strong></h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <v-form @submit.prevent="sendPassword">
        <v-row class="">
          <v-col cols="12" class="py-0">
            <validation-provider
              v-slot="{ errors }"
              name="El email"
              rules="required|email"
            >
              <label for="id-email">Correo</label>
              <v-text-field
                autocomplete="email"
                color="blue-ligth"
                id="id-email"
                ref="email"
                type="text"
                v-model.trim="form.email"
                solo
                flat
                outlined
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col cols="12" class="pb-2">
            <v-btn
              class="button-primary"
              :loading="isLoading"
              :disabled="isDisabled && invalid"
              type="submit"
              color=""
              block
              depressed
              >Enviar</v-btn
            >
          </v-col>

          <v-divider class="my-2"></v-divider>
          <v-col cols="12">
            <p>
              ¿AÚN NO TIENES UNA CUENTA?
              <router-link :to="{ name: 'registro' }">Regístrate</router-link>
            </p>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>
    <!-- <sweet-modal icon="success" ref="modal"> This is a success! </sweet-modal> -->
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
      isLoading: false,
      isDisabled: false,
      form: {
        email: "",
      },
    };
  },
  methods: {
    async sendPassword() {
      this.isDisabled = true;
      if (await this.$refs.observer.validate()) {
        this.isLoading = true;

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
      this.form.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: $fs-xs;
  color: $secondary;
  font-weight: 800;
  text-align: center;
  a {
    font-size: $fs-xs;
    color: $info;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
