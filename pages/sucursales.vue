<template>
  <section class="sucursales">
    <v-row class="align-center fill-height no-gutters">
      <v-col
        cols="12"
        md="5"
        lg="4"
        class="order-1 order-md-0 sucursales-results"
      >
        <div class="px-md-6">
          <v-row>
            <v-col cols="12">
              <div class="my-md-16">
                <div class="py-6">
                  <div class="title-header">
                    <p>Encuentra un</p>
                    <h2>Distribuidor</h2>
                    <div class="line"></div>
                  </div>
                  <v-form @submit.prevent="submit">
                    <div class="my-5 input-group">
                      <input
                        placeholder="Ingresa tu código postal"
                        autocomplete="off"
                        v-model.trim="search"
                      />
                      <div class="icon">
                        <img
                          src="../assets/imgs/web/icons/Send.svg"
                          alt="send"
                        />
                      </div>
                    </div>
                  </v-form>
                </div>
                <ul class="mx-0">
                  <li
                    class="py-4"
                    v-for="(address, index) in addresses"
                    :key="index"
                    @click="changeMap(address)"
                    v-ripple="{ class: `primary--text` }"
                  >
                    <div>
                      <h3>{{ address.name }}</h3>
                      <h4>
                        {{ address.description }}
                      </h4>
                      <p class="mb-0">{{ address.phone }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col class="content-map grey lighten-1 order-0" cols="12" md="7" lg="8">
        <TheMap v-if="selectedCoords" :coords="selectedCoords" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
// import TheMap from "../components/TheMap.vue";
export default {
  //   components: { TheMap },
  //   head: {
  //     title: "Sucursales",
  //   },
  data() {
    return {
      search: "",
      addresses: [
        {
          id: 1,
          name: "Cantamar",
          description:
            "Av. Manzanillo # 114 Col. Lomas del Mar Manzanillo Jalisco México",
          phone: "(314) 336 1200",
        },
        {
          id: 1,
          name: "Fondeport",
          description:
            "Blvr. Miguel de la Madrid Hurtado #472 Col. Tapeixtles, 23 de Noviembre Manzanillo Jalisco México",
          phone: "(314) 331 2131",
        },
        {
          id: 1,
          name: "Melaque",
          description:
            "Av. Manzanillo # 114 Col. Lomas del Mar Manzanillo Jalisco México",
          phone: "(314) 336 1200",
        },
        {
          id: 1,
          name: "Villa Purificación",
          description:
            "Av. Manzanillo # 114 Col. Lomas del Mar Manzanillo Jalisco México",
          phone: "(314) 336 1200",
        },
        {
          id: 1,
          name: "Tlaquepaque",
          description:
            "Av. Manzanillo # 114 Col. Lomas del Mar Manzanillo Jalisco México",
          phone: "(314) 336 1200",
        },
      ],
      selectedCoords: null,
    };
  },

  methods: {
    changeMap(distributor) {
      console.log(distributor);
      this.selectedCoords = {
        lat: parseFloat(distributor.address.latitude),
        lng: parseFloat(distributor.address.longitude),
      };
    },

    async submit() {
      //   this.addresses = await this.$store
      //     .dispatch("distributor/withPostcode", this.search)
      //     .then((r) => r.data);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid purple;
}
.content-map {
  height: 400px;
  position: relative;
}

h3 {
  font-size: $fs-base;
  letter-spacing: 1px;
  color: $secondary;
  font-weight: 900;
  font-family: $font-montserrat;
}

h4,
p {
  font-size: $fs-sm;
  letter-spacing: 1px;
  color: #000;
  font-weight: 400;
  font-family: $font-montserrat;
}

li {
  border-top: 1px solid #cecece;
  cursor: pointer;
}

.input-group {
  width: 240px;
  position: relative;
  display: flex;
}

input {
  background-color: #f2f2f2;
  width: 100%;
  height: 29px;
  padding: 10px;
  border-radius: 3px;
  &::placeholder {
    font-size: $fs-sm;
    color: #000000;
    opacity: 0.38;
  }
  &:focus {
    outline-color: $primary;
  }
}

.icon {
  position: absolute;
  right: 4px;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 20px;
  i {
    font-size: $fs-md;
    color: $secondary !important;
  }
}

@media screen and (min-width: $md) {
  .sucursales {
    height: 100vh;
  }
  .sucursales-results {
    height: 100%;
    overflow-y: scroll;
  }
  .content-map {
    height: 100%;
  }
}
</style>
