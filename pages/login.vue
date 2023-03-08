<template>
  <div class="login">
    <v-row class="align-center fill-height no-gutters">
      <v-col cols="12" md="6" lg="5" xl="4" class="">
        <div class="content py-8 mt-md-16">
          <LoginForm />
        </div>
      </v-col>
      <v-col class="bg-content" cols="12" md="6" lg="7" xl="8">
        <div class="bg-img"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  head: {
    title: "Iniciar sesión",
  },
  components: { LoginForm },
};
</script>

<style lang="scss" scoped>
.login {
  height: auto;
}
.bg-content {
  height: 355px;
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
  background-image: url("../assets/imgs/web/login/img1.jpg");
}

@media screen and (min-width: $md) {
  .login {
    height: 100vh;
  }
  .bg-content {
    height: 100%;
  }
}
</style>
