<template>
  <v-row class="justify-end py-6 py-md-0 mx-auto">
    <v-col cols="12" lg="10" xl="9" class="px-0">
      <h1 class="mb-10 text-left"><strong>REGISTRO</strong></h1>
      <v-form @submit.prevent="registerUser">
        <v-row class="flex flex-column mx-0">
          <v-col class="pb-2 px-0">
            <label for="id-name">Nombre</label>
            <v-text-field
              id="id-name"
              type="text"
              v-model.trim="form.name"
              autocomplete="false"
              solo
              flat
              outlined
              hide-details
            />
          </v-col>
          <v-col class="pb-2 px-0">
            <label for="id-email">Correo</label>
            <v-text-field
              id="id-email"
              type="email"
              v-model.trim="form.email"
              autocomplete="false"
              solo
              flat
              outlined
              hide-details
            />
          </v-col>
          <v-col class="pb-2 px-0">
            <label for="id-password">Contraseña</label>
            <v-text-field
              id="id-password"
              type="password"
              v-model.trim="form.password"
              autocomplete="false"
              solo
              flat
              outlined
              hide-details
            />
          </v-col>
          <v-col class="pb-2 px-0">
            <label for="id-conrifm-password">Confirmar Contraseña</label>
            <v-text-field
              id="id-conrifm-password"
              type="password"
              v-model.trim="form.confirmPassword"
              autocomplete="false"
              solo
              flat
              outlined
              hide-details
            />
          </v-col>
          <v-col class="pb-2 px-0">
            <v-btn :loading="isLoading" type="submit" color="" block depressed
              >CREAR CUENTA</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      valid: true,
      isLoading: false,
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    registerUser() {
      console.log("enviado");
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  //   border: 1px solid red;
}
button {
  height: 45px !important;
  font-size: 14px;
  font-weight: bold;
}
</style>