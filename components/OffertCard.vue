<template>
  <article v-if="offert" class="mb-3 mb-lg-0 px-2">
    <v-row>
      <v-col cols="12">
        <h3>{{ offert.brand }}</h3>
        <h4>{{ offert.title }}</h4>
        <p class="">{{ offert.discount }}</p>
        <nuxt-link :to="{ path: offert.link }">{{
          offert.button_text
        }}</nuxt-link>
      </v-col>
      <v-col class="content-img">
        <img
          height="80%"
          width="100%"
          style="object-fit: contain"
          :src="require(`@/assets/imgs/web/home/${offert.img}.png`)"
          :alt="offert.name"
        />
      </v-col>
    </v-row>
  </article>
</template>

<script>
export default {
  props: {
    offert: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  text-transform: uppercase;
}
article {
  background: rgba(216, 216, 216, 0.330747);
  border-radius: 10px 10px 0px 0px;
  height: 150px;
  position: relative;
  width: 250px;
}
h3 {
  font-size: $fs-xs;
  color: #00a0df;
}

h4 {
  font-size: $fs-md;
  color: #003a70;
  font-weight: 800;
}
p {
  font-size: $fs-base;
  color: #373736;

  font-weight: bold;
}
a {
  font-size: $fs-xs;
  letter-spacing: 0px;
  color: #00a0df;
  font-weight: bold;
}
.content-img {
  img {
    position: absolute;
    bottom: -28px;
    right: 10px;
    height: auto;
    width: 100px;
  }
}

@media screen and (min-width: $sm) {
  .content-img {
    img {
      bottom: -30px;
      right: -5px;
      height: auto;
      width: 80px;
    }
  }
}
@media screen and (min-width: $md) {
  article {
    height: 140px;
    width: 260px;
  }
  .content-img {
    img {
      bottom: -30px;
      right: -20px;
      height: auto;
      width: 100px;
    }
  }
}
@media screen and (min-width: $lg) {
  // .content-img {
  //   img {
  //     position: absolute;
  //     bottom: -30px;
  //     right: 0px;
  //     height: auto;
  //     width: 80px;
  //   }
  // }
}
</style>
