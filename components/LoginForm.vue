<template>
  <div class="content-form">
    <v-row>
      <v-col cols="12">
        <h1 class="mb-4 mb-md-10">INICAR <strong>SESIÓN</strong></h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pa-0">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="loginUser" ref="form">
            <v-row class="justify-center">
              <v-col cols="12" md="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El usuario"
                  rules="required|email"
                >
                  <label for="email">Usuario</label>
                  <v-text-field
                    color="#00a0df"
                    id="usuario"
                    type="text"
                    ref="email"
                    v-model.trim="form.email"
                    solo
                    flat
                    autocomplete="email"
                    outlined
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" md="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="La contraseña"
                  rules="requiredF"
                >
                  <label for="password">Contraseña</label>
                  <v-text-field
                    color="#00a0df"
                    id="password"
                    type="password"
                    ref="password"
                    autocomplete="current-password"
                    v-model.trim="form.password"
                    solo
                    flat
                    outlined
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>
              <v-col cols="12" md="12" class="">
                <v-btn
                  :loading="isLoading"
                  type="submit"
                  :disabled="isDisabled && invalid"
                  color=""
                  block
                  class="button-primary"
                  depressed
                  >entrar</v-btn
                >
              </v-col>
              <v-col cols="12" md="12" class="">
                <nuxt-link :to="{ name: 'recuperar-contrasena' }"
                  >¿Olvidaste tu contraseña?</nuxt-link
                >
              </v-col>
              <v-divider class="my-2"></v-divider>
              <v-col cols="12" md="12">
                <p>
                  ¿AÚN NO TIENES UNA CUENTA?
                  <nuxt-link :to="{ name: 'registro' }">Regístrate</nuxt-link>
                </p>
              </v-col>
            </v-row>
          </form>
        </validation-observer>
        <!-- <sweet-modal icon="success" ref="modal"> This is a success! </sweet-modal> -->
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
  name: "LoginForm",
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      this.isDisabled = true;

      if (await this.$refs.observer.validate()) {
        this.isLoading = true;

        this.isLoading = false;
        this.isDisabled = false;
        this.$router.push({ name: "mi-perfil" });
        this.$store.dispatch("user/isAutenticate", true);
        //this.clear()
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
      this.form.password = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  font-size: $fs-xs;
  color: #373736;
  font-weight: 500;
}

p {
  font-size: $fs-sm;
  color: $secondary;
  font-weight: 800;
  text-align: center;
  a {
    font-size: $fs-sm;
    color: $info;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
}

a {
  &:hover {
    text-decoration: underline;
  }
}
</style>
