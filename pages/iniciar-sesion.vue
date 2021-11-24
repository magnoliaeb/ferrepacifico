<template>
  <div class="login">
    <v-row class="align-center fill-height white">
      <v-col cols="12" md="6" lg="5" xl="4">
        <div class="content">
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
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  components: { LoginForm },
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid purple;
}
.login {
  // background-color: orange;
  // overflow: hidden;
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
  background-image: url("@/assets/img/Web/Login/img1.jpg");
}

@media screen and (min-width: $md) {
  .bg-content {
    height: 600px;
  }
}
@media screen and (min-width: $lg) {
  .bg-content {
    height: 738px;
  }
}
</style>