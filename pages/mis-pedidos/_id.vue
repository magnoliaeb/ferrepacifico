<template>
  <section class="py-6 py-lg-16 order">
    <div class="content">
      <v-row class="align-center mb-6">
        <v-col cols="auto" md="auto">
          <BtnGoBack />
        </v-col>
        <v-col cols="auto" md="auto">
          <v-breadcrumbs class="px-0" :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
      <InfoOrderDetail />

      <v-row>
        <v-col cols="12">
          <ListOrderDetail />
        </v-col>
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
          class="offset-sm-4 offset-md-6 offset-lg-8"
        >
          <SubtotalOrderDetail />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import BtnGoBack from "../../components/BtnGoBack.vue";
import InfoOrderDetail from "../../components/InfoOrderDetail.vue";
import ListOrderDetail from "../../components/ListOrderDetail.vue";
import SubtotalOrderDetail from "../../components/SubtotalOrderDetail.vue";
export default {
  head: {
    title: "Detalle del pedido",
  },
  components: {
    InfoOrderDetail,
    ListOrderDetail,
    SubtotalOrderDetail,
    BtnGoBack,
  },
  data() {
    return {
      order: {},
    };
  },

  computed: {
    items() {
      return [
        {
          text: "Tus pedidos",
          disabled: false,
          href: "/mis-pedidos",
        },
        {
          text: `Pedido 123456`,
          disabled: true,
          href: "breadcrumbs_link_1",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
