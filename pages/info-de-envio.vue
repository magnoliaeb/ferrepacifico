<template>
  <section class="py-6 py-lg-16">
    <div class="content">
      <v-row>
        <v-col cols="auto" class="">
          <BtnGoBack />
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="12" md="auto">
          <h3 class="text-center text-md-left">¿Ya tienes una cuenta?</h3>
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <v-btn
            to="login"
            color="primary"
            class="botton-primary"
            depressed
            block
            dark
          >
            INICIAR SESIÓN
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="align-start justify-space-between no-gutters">
        <v-col cols="12" md="7" lg="8" class="">
          <InfoSendForm />
        </v-col>
        <v-col
          cols="12"
          md="5"
          lg="4"
          class=""
          style="position: sticky; top: 0%"
        >
          <!-- resumen del carrito -->
          <ResumenCart />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import BtnGoBack from "../components/BtnGoBack.vue";
import InfoSendForm from "../components/InfoSendForm.vue";
import ResumenCart from "../components/ResumenCart.vue";
export default {
  head: {
    title: "Información del envio",
  },

  components: { InfoSendForm, ResumenCart, BtnGoBack },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: $fs-md;
  color: #003a70;
  font-weight: 700;
  font-family: "Montserrat";
}
</style>
