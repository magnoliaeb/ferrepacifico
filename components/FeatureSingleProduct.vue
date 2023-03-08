<template>
  <section class="feature py-12">
    <div class="content">
      <v-row class=" ">
        <v-col cols="12">
          <v-tabs dark background-color="#003a70" grow>
            <v-tab href="#features">
              <h4>CARACTERISTICAS</h4>
            </v-tab>

            <v-tab-item value="features">
              <v-divider dark class="my-4"></v-divider>
              <FeaturesSelection :product="product" />
            </v-tab-item>

            <v-tab href="#especificaciones-tecnicas">
              <h4>ESPECIFICACIONES TÉCNICAS</h4>
            </v-tab>

            <v-tab-item value="especificaciones-tecnicas">
              <v-divider dark class="my-4"></v-divider>
              <TechnicalSpecificationsSelection :product="product" />
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import FeaturesSelection from "./FeaturesSelection.vue";
import TechnicalSpecificationsSelection from "./TechnicalSpecificationsSelection";

export default {
  data() {
    return {
      tab: null,
      product: {
        characteristics: [
          "Velocidad de alambre Amperaje Inductancia",
          "Indicador con pantalla monocromatica",
          "Sistema de ventilación automática",
          "Arranque en 10 amperios",
          "Rejillas laterales para una ventilación optimizada que permite mayor espacio interno para los componentes",
          "Perilla con generación de pulsos incremental y función pulsador",
          "140 amperios al 100% del ciclo de trabajo",
        ],
        especifications: [
          {
            attribute: "I5CEKGKIKW",
            value: "B5SYLNDFLW",
          },
          {
            attribute: "HWBAS32FCP",
            value: "QKHUFFXPS8",
          },
        ],
        accesories: [
          {
            attribute: "Maquina soldadora",
            value: "1 pza",
          },
          {
            attribute: "Manual de Operador ",
            value: "1 pza ",
          },
          {
            attribute: "Porta electrodo ",
            value: "1 pza",
          },
          {
            attribute: "Pinza de tierra ",
            value: "1 pza",
          },
          {
            attribute: "Cepillo y Martillo ",
            value: "1 pza",
          },
          {
            attribute: "Careta con Cristal ",
            value: "1 pza",
          },
        ],
      },
    };
  },
  components: {
    FeaturesSelection,
    TechnicalSpecificationsSelection,
  },
};
</script>

<style lang="scss" scoped>
.feature {
  background-color: #003a70;
  color: white;
}
h4 {
  font-size: $fs-lg;
  color: #ffffff;
  font-weight: 500;
  font-style: italic;
}

@media screen and (min-width: $md) {
}
</style>
