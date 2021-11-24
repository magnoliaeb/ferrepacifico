<template>
  <v-form @submit.prevent="sendForm">
    <v-row class="">
      <v-col cols="12" class="pb-2">
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
      <v-col cols="12" class="pb-2">
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
      <v-col cols="12" class="pb-2">
        <label for="id-phone">Teléfono</label>
        <v-text-field
          id="id-phone"
          type="text"
          v-model.trim="form.email"
          autocomplete="false"
          solo
          flat
          outlined
          hide-details
        />
      </v-col>
      <v-col cols="12" class="pb-2">
        <label for="id-message">Mensaje</label>
        <v-textarea
          outlined
          id="id-message"
          auto-grow
          flat
          rows="4"
          row-height="20"
          solo
          hide-details
        ></v-textarea>
      </v-col>
      <v-col cols="12" class="pb-2">
        <v-btn :loading="isLoading" type="submit" depressed>ENVIAR</v-btn>
      </v-col>
    </v-row>
  </v-form>
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
    sendForm() {
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
  width: 100%;
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
@media screen and (min-width: $md) {
  button {
    width: 30%;
  }
}
</style>