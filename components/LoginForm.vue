<template>
  <div class="">
    <h1 class="mb-4 mb-md-10">INICAR <strong>SESIÓN</strong></h1>
    <v-form @submit.prevent="loginUser">
      <v-row class="flex flex-column mx-0">
        <v-col class="pb-2 px-0">
          <label for="id-user">Usuario</label>
          <v-text-field
            id="id-user"
            type="text"
            v-model.trim="form.user"
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
          <v-btn :loading="isLoading" type="submit" color="" block depressed
            >entrar</v-btn
          >
        </v-col>
        <v-col class="pb-2 px-0">
          <nuxt-link to="">¿Olvidaste tu contraseña?</nuxt-link>
        </v-col>
        <v-divider class="my-2"></v-divider>
        <v-col>
          <p>
            ¿AÚN NO TIENES UNA CUENTA?
            <nuxt-link :to="{ name: 'registro' }">Regístrate</nuxt-link>
          </p>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      valid: true,
      isLoading: false,
      form: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
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

a {
  font-size: 11px;
  color: #373736;
  font-weight: 500;
}

p {
  font-size: 12px;
  color: $blue-dark;
  font-weight: 800;
  text-align: center;
  a {
    font-size: 12px;
    color: $blue-ligth;
    font-weight: 300;
  }
}
</style>