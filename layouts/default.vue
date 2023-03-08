<template>
  <v-app dark>
    <TheHeader />

    <v-main>
      <v-container fluid class="pa-0 pt-md-5">
        <Nuxt class="animate__animated animate__fadeIn" />
        <Suscribe />
      </v-container>
    </v-main>

    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from "../components/TheFooter.vue";
import Suscribe from "../components/Suscribe.vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheFooter, Suscribe, TheHeader },
};
</script>

<style lang="scss" scoped></style>
