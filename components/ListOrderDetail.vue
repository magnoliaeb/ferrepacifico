<template>
  <ul class="px-0">
    <v-row tag="li" class="py-sm-2" v-for="(item, index) in items" :key="index">
      <v-col cols="auto">
        <nuxt-link
          :to="{
            name: 'productos-id-slug',
            params: { id: 1, slug: 1 },
          }"
        >
          <v-img
            style="cursor: pointer"
            transition="scale-transition"
            :height="heightImg"
            :src="require(`../assets/imgs/web/home/${item.img}.png`)"
            :alt="item.img"
            :width="heightImg"
            aspect-ratio="1"
            class="grey lighten-3 img"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  :size="30"
                  :width="3"
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </nuxt-link>
      </v-col>
      <v-col cols="" class="flex-grow-1">
        <div class="">
          <h3 class="mb-1 mb-sm-0">
            <nuxt-link
              :to="{
                name: 'productos-id-slug',
                params: { id: 1, slug: 1 },
              }"
            >
              {{ item.name }}
            </nuxt-link>
          </h3>
          <span class="hidden-sm-and-down">{{
            $util.getMoneyFormat(2521.0)
          }}</span>
          <div class="hidden-md-and-up">
            <p class="mb-1">
              {{ $util.getMoneyFormat(2521) }}
            </p>
            <small class="mb-1">4 pz</small>
          </div>
        </div>
      </v-col>
      <v-col cols="" class="">
        <div class="text-right">
          <p class="">{{ $util.getMoneyFormat(2323.43) }}</p>
          <small class="d-none d-md-block">4 pz</small>
        </div>
      </v-col>
    </v-row>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto4",
        },

        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto1",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto2",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto3",
        },
        {
          id: 1,
          name: "L2UFCUW7VM",
          alias: "l2ufcuw7vm",
          price: 2646,
          brand: "ROTOPLAS",
          price_without_discount: 2857.68,
          img: "producto1",
        },
      ],
    };
  },
  computed: {
    heightImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 70;
        case "sm":
          return 80;
        case "md":
          return 100;
        case "lg":
          return 120;
        case "xl":
          return 120;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #272727;
  font-family: "Montserrat";
}
h3 {
  font-size: $fs-md;
  font-weight: 500;
  a {
    color: #272727;
  }
}

p {
  font-size: $fs-base;
  font-weight: 500;
}
span {
  font-size: $fs-sm;
  font-weight: 400;
}

small {
  font-size: $fs-xs;
}
li {
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}

@media screen and (min-width: $lg) {
}
</style>
