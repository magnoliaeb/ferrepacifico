<template>
  <div class="py-6 py-lg-16">
    <div class="content">
      <MyInfoProfile />
      <MyAddresses />
    </div>
  </div>
</template>

<script>
import MyInfoProfile from "../components/MyInfoProfile.vue";
import MyAddresses from "../components/MyAddresses.vue";
export default {
  head: {
    title: "Mi perfil",
  },
  components: { MyInfoProfile, MyAddresses },
};
</script>

<style lang="scss" scoped></style>
