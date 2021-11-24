<template>
  <div class="register">
    <v-row class="align-center fill-height white">
      <v-col cols="12" md="6">
        <div class="content">
          <RegisterForm />
        </div>
      </v-col>
      <v-col class="bg-content" cols="12" md="6">
        <div class="bg-img"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
export default {
  head: {
    title: "Registro",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  components: { RegisterForm },
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid purple;
}
.register {
  // background-color: orange;
  // overflow: hidden;
}
.bg-content {
  height: 350px;
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
  background-image: url("../assets/img/Web/registro/img1.jpg");
}

@media screen and (min-width: $md) {
  .bg-content {
    height: 600px;
  }
}
@media screen and (min-width: $lg) {
  .bg-content {
    height: 740px;
  }
}
</style>