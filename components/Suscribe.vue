<template>
  <section class="suscribe">
    <div class="content py-10">
      <v-row class="justify-center" no-gutters>
        <v-col cols="auto" lg="10">
          <v-row class="align-center justify-space-between">
            <v-col cols="12" sm="auto" class="">
              <h2>Suscribete para recibir</h2>
              <h3>Noticias y promociones</h3>
            </v-col>
            <v-col cols="12" sm="auto" md="auto" class="">
              <v-form @submit.prevent="suscribeUser">
                <div class="group">
                  <v-text-field
                    v-model.trim="email"
                    solo
                    flat
                    outlined
                    hide-details
                    placeholder="Correo electrónico"
                  />
                  <v-btn :loading="isLoading" depressed type="submit"
                    >Suscribirme</v-btn
                  >
                </div>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      isLoading: false,
    };
  },
  methods: {
    suscribeUser() {
      this.isLoading = true;
      if (this.email.length <= 0) return;
    },
  },
};
</script>

<style lang="scss" scoped>
.suscribe {
  background-color: #efefef;
}
h2 {
  font-size: $fs-md;
  color: #000000;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 0 !important;
  text-align: left;
}
h3 {
  font-size: $fs-2xl;
  color: $primary;
  font-weight: 800;
  text-transform: uppercase;
}
.group {
  height: 40px;
  width: 100%;
  max-width: 418px;

  display: flex;
  // border: 2px solid red;
}
button {
  font-size: $fs-sm !important;
  text-transform: capitalize !important;
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  background-color: $primary !important;
  color: #fff !important;
  width: auto !important;
  height: 100% !important;
}

@media screen and (min-width: $sm) {
  .group {
    width: 418px;
  }
}
@media screen and (min-width: $md) {
  .group {
    height: 44px;
  }
}
</style>
