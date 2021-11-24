<template>
  <div class="py-4 py-lg-8">
    <div class="content">
      <MyInfoProfile />
      <MyAddresses />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Mi perfil",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
</style>