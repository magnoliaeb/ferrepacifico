<template>
  <v-row class="justify-end" no-gutters>
    <v-col cols="12" lg="10" xl="9" class="px-0">
      <v-row>
        <v-col cols="12">
          <h1 class="mb-4 text-left"><strong>REGISTRO</strong></h1>
        </v-col>
      </v-row>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="registerUser">
          <v-row class="">
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El nombre"
                rules="required"
              >
                <label for="name">Nombre</label>
                <v-text-field
                  autocomplete="given-name"
                  color="blue-ligth"
                  id="name"
                  type="text"
                  ref="name"
                  v-model.trim="form.name"
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
                name="El teléfono"
                rules="required"
              >
                <label for="phone">Teléfono</label>
                <v-text-field
                  autocomplete="tel"
                  color="blue-ligth"
                  id="phone"
                  ref="phone"
                  v-model.trim="form.phone"
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
                autocomplete="email"
                rules="required|email"
              >
                <label for="email">Correo</label>
                <v-text-field
                  color="blue-ligth"
                  id="email"
                  type="email"
                  ref="email"
                  v-model.trim="form.email"
                  solo
                  flat
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                autocomplete="new-password"
                vid="confirmation"
                v-slot="{ errors }"
                name="La contraseña"
                :rules="{
                  requiredF: true,
                  min: 6,
                }"
              >
                <label for="password">Contraseña</label>
                <v-text-field
                  :append-icon="
                    showPassword ? 'mdi-eye-off-outline' : 'mdi-eye'
                  "
                  @click:append="showPassword = !showPassword"
                  color="blue-ligth"
                  id="password"
                  :type="showPassword ? 'text' : 'password'"
                  ref="password"
                  v-model.trim="form.password"
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
                name="La contraseña de cofirmación"
                :rules="{ requiredF: true, confirmed: 'confirmation' }"
              >
                <label for="conrifm-password">Confirmar Contraseña</label>
                <v-text-field
                  color="blue-ligth"
                  id="conrifm-password"
                  type="password"
                  ref="password_confirmation"
                  v-model.trim="form.password_confirmation"
                  solo
                  flat
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="">
              <v-btn
                :loading="isLoading"
                :disabled="isDisabled && invalid"
                type="submit"
                block
                depressed
                class="button-primary"
                >CREAR CUENTA</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </validation-observer>
    </v-col>
    <!-- <sweet-modal icon="success" ref="modal"> This is a success! </sweet-modal> -->
  </v-row>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "RegisterForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      showPassword: false,
      form: {
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async registerUser() {
      this.isDisabled = true;
      this.isLoading = true;

      if (await this.$refs.observer.validate()) {
        this.isLoading = false;
        this.isDisabled = false;
        this.clear();
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
      this.form.phone = "";
      this.form.email = "";
      this.form.password = "";
      this.form.password_confirmation = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  //   border: 1px solid red;
}
</style>
