<template>
  <section class="suscribe pb-16 pt-12">
    <div class="content">
      <v-row class="justify-center mx-auto">
        <v-col lg="10">
          <v-row class="align-end justify-space-between">
            <v-col cols="12" lg="6" class="py-0">
              <p>Suscribete para recibir</p>
              <h3>Noticias y promociones</h3>
            </v-col>
            <v-col cols="12" lg="6" class="">
              <v-form @submit.prevent="suscribeUser">
                <v-row class="group justify-end px-lg-0 mt-8 mt-lg-0">
                  <v-col cols="7" md="8" class="pr-0 py-0 fill-height">
                    <v-text-field
                      v-model.trim="email"
                      solo
                      flat
                      height="44px"
                      outlined
                      hide-details
                      placeholder="Correo electrónico"
                    />
                  </v-col>
                  <v-col cols="5" md="4" class="pl-0 py-0">
                    <v-btn
                      :loading="isLoading"
                      depressed
                      type="submit"
                      style="height: 100%; width: 100%"
                      >Suscribirme</v-btn
                    >
                  </v-col>
                </v-row>
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
      if (this.email.length <= 0) return;
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.email = "";
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid red;
}
.suscribe {
  background-color: #efefef;
}
p {
  font-size: 17px;
  color: #000000;
  font-weight: 300;
  font-style: italic;
  margin: 0 !important;
}
h3 {
  font-size: 20px;
  color: $blue;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 !important;
}
.group {
  height: 40px;
}
button {
  font-size: 12px;
  text-transform: capitalize !important;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

@media screen and (min-width: $sm) {
  h3 {
    font-size: 25px;
  }
  .group {
    height: 44px;
  }
}
</style>