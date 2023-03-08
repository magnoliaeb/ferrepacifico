<template>
  <div>
    <BannerUs />
    <UsCompany />
    <UsHistory />
    <UsVision />
  </div>
</template>

<script>
import BannerUs from "../components/BannerUs.vue";
import UsCompany from "../components/UsCompany.vue";
import UsHistory from "../components/UsHistory.vue";
import UsVision from "../components/UsVision.vue";
export default {
  //   head: {
  //     title: "Nosotros",
  //   },
  components: { BannerUs, UsCompany, UsHistory, UsVision },
};
</script>

<style lang="scss" scoped>
</style>