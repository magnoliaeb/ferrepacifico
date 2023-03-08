<template>
  <section class="py-6 py-lg-16">
    <div class="content">
      <v-row class="justify-center no-gutters">
        <v-col cols="12" md="11" lg="8" xl="7">
          <v-row class="mb-2 mb-md-4">
            <v-col cols="12">
              <BtnGoBack />
            </v-col>
          </v-row>
          <v-row class="" no-gutters>
            <v-col cols="12">
              <EditProfileForm />
            </v-col>
            <v-col cols="12">
              <v-divider class="my-10"></v-divider>
            </v-col>
            <v-col cols="12">
              <ChangePasswordForm />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import BtnGoBack from "../components/BtnGoBack.vue";
import EditProfileForm from "../components/EditProfileForm.vue";
import ChangePasswordForm from "../components/ChangePasswordForm.vue";
export default {
  head: {
    title: "Editar perfil",
  },

  components: { BtnGoBack, EditProfileForm, ChangePasswordForm },
};
</script>

<style lang="scss" scoped></style>
