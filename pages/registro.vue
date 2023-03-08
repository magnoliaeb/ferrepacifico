<template>
  <div class="register">
    <v-row class="align-center fill-height white no-gutters">
      <v-col cols="12" md="6">
        <div class="content my-6 my-lg-16 mt-lg-7">
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
  height: auto;
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
  background-image: url("../assets/imgs/web/registro/img1.jpg");
}

@media screen and (min-width: $md) {
  .register {
    height: 850px;
  }
  .bg-content {
    height: 100%;
  }
}
@media screen and (min-width: $xl) {
  .register {
    height: 100vh;
  }
}
</style>
