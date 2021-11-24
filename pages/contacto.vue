<template>
  <div class="contact">
    <v-row class="align-center fill-height white">
      <v-col class="bg-content order-1 order-md-0" cols="12" md="6">
        <div class="bg-img"></div>
      </v-col>
      <v-col class="order-0" cols="12" md="6" lg="5">
        <div class="content py-4 py-md-0">
          <ContactInfo />
          <ContactForm />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactInfo from "../components/ContactInfo.vue";
export default {
  head: {
    title: "Contacto",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  components: { ContactInfo },
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid purple;
}
.contact {
  // background-color: orange;
  // overflow: hidden;
}
.bg-content {
  height: 428px;
  position: relative;
}

.bg-img {
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
  background-position: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/img/Web/Contacto/Img1.jpg");
}

@media screen and (min-width: $md) {
  .bg-content {
    height: 880px;
  }
}
</style>