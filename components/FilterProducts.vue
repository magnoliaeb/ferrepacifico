<template>
  <v-form @submit.prevent="submit">
    <div class="filters">
      <h3 class="mb-4">Filtros</h3>
      <div class="mb-6">
        <h4 class="mb-2">Marcas</h4>
        <div class="select-box">
          <v-select
            color="info"
            height="10px"
            flat
            outlined
            solo
            label="Selecciona una marca"
            hide-details
            :items="brands"
            v-model="brand"
            type="number"
            item-text="text"
            item-value="value"
          >
            <template v-slot:append>
              <v-icon class="icon"> mdi-chevron-down </v-icon>
            </template>
          </v-select>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="mb-2">Categorías</h4>
        <div>
          <v-radio-group
            hide-details
            dense
            v-model="rootCategory"
            name="rootCategory"
          >
            <div class="mb-2" v-for="item in categories" :key="item.id">
              <v-radio
                color="info"
                :value="item.id"
                @change="changeRootCategory(item.id)"
              >
                <template #label>
                  <span>{{ item.name }}</span>
                </template>
              </v-radio>

              <v-radio-group
                dense
                class="mt-1 ml-3"
                v-model="category"
                v-if="item.id === rootCategory"
                name="category"
              >
                <v-radio
                  class="mb-1"
                  v-for="(subCategory, index) in item.children"
                  :key="index"
                  :value="subCategory.id"
                >
                  <template #label>
                    <span>{{ subCategory.name }}</span>
                  </template>
                </v-radio>

                <v-radio class="mb-1" :value="item.id">
                  <template #label>
                    <span>Todos</span>
                  </template>
                </v-radio>
              </v-radio-group>
            </div>
          </v-radio-group>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="mb-2">Precios</h4>

        <div class="range-wrapper">
          <div class="range d-flex justify-space-between text-uppercase">
            <span>Desde</span>
            <span>hasta</span>
          </div>
          <input
            list=""
            v-model="max_price"
            type="range"
            :min="min"
            :max="max"
            step="1"
          />
          <div class="range d-flex justify-space-between">
            <span>${{ min }}</span>
            <span>${{ max_price }}</span>
          </div>
        </div>
      </div>
      <div class="">
        <v-btn
          :loading="isLoading"
          depressed
          type="submit"
          class="button-primary"
          color="secondary"
          small
        >
          APLICAR FILTRO
        </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      isMounted: false,
      rootCategory: null,
      brands: ["Todas", "Xtool", "Werner", "Urrea", "Truper", "Ternium"],
      isLoading: false,
      brand: null,
      category: null,
      min: 30,
      max: 10000,
      max_price: 3,
      categories: [
        {
          id: 1,
          name: "Acero",
          children: [
            {
              id: 1,
              name: "Aceros de construcción",
            },
            {
              id: 2,
              name: "Aceros estructurales",
            },
            {
              id: 3,
              name: "Aceros tabulares",
            },
          ],
        },
        {
          id: 2,
          name: "Ferrteria",
          children: [
            {
              id: 1,
              name: "Cerraduras",
            },
            {
              id: 2,
              name: "Herrajes",
            },
            {
              id: 3,
              name: "Aislante",
            },
            {
              id: 4,
              name: "Herramientas",
            },
          ],
        },
        {
          id: 3,
          name: "Plomería",
          children: [
            {
              id: 1,
              name: "Válvulas",
            },
            {
              id: 2,
              name: "Gas",
            },
            {
              id: 3,
              name: "Tuberías",
            },
          ],
        },
        {
          id: 4,
          name: "Construcción",
          children: [
            {
              id: 1,
              name: "Concreto",
            },
            {
              id: 2,
              name: "Polvos",
            },
            {
              id: 3,
              name: "Materiales livianos",
            },
          ],
        },
      ],
      subCategories: [
        {
          id: 1,
          name: "De construcción",
        },
        {
          id: 2,
          name: "Estructurales",
        },
        {
          id: 3,
          name: "Tubulares",
        },
      ],
    };
  },

  methods: {
    submit() {
      // this.$router.push({
      //   name: "productos",
      //   query: {
      //     brand: this.brand,
      //     category: this.category,
      //     max_price: this.max_price,
      //   },
      // });
      // this.$store.dispatch("product/filtered", {
      //   brand: this.brand,
      //   category: this.category,
      //   max_price: this.max_price,
      // });
    },
    changeRootCategory(id) {
      this.rootCategory = id;
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: $fs-lg;
  letter-spacing: 4.09941px;
  text-transform: uppercase;
  color: #8a8a8a;
}

h4 {
  font-size: $fs-md;
  color: #3b3b3b;
  font-weight: bold;
}

span {
  font-size: $fs-base;
  color: #1a1a1a !important;
  font-weight: 400;
}

.icon {
  font-size: $fs-base;
  color: #000000;
}

// button {
//   font-size: $fs-sm !important;
//   color: #ffffff;
//   font-weight: bold !important;
//   background-color: $blue !important;
//   width: 100%;
//   height: 32px !important;
// }

.range-wrapper {
  width: 80%;
}
.range {
  width: 70%;
  margin: 0 auto;
  span {
    font-size: $fs-sm;
    font-weight: 500;
    color: #000000;
  }
}

input[type="range"] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: white;
  border-radius: 5px;
  border: 1px solid #cecece;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: white;
  border-radius: 5px;
  border: 1px solid #cecece;
}

input[type="range"]::-webkit-slider-thumb {
  border: 1px solid #cecece;
  height: 15px;
  width: 16px;
  border-radius: 3px;
  background: #f2f2f2;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}
input[type="range"]::-moz-range-thumb {
  border: 1px solid #cecece;
  height: 15px;
  width: 16px;
  border-radius: 3px;
  background: #f2f2f2;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}

.select-box {
  position: static;
  z-index: 100;
}

// li {
//   color: #3b3b3b;
//   font-size: 13px;
//   margin-left: 40px !important;
// }

@media screen and (min-width: $lg) {
  .select-box {
    position: initial;
  }
}
</style>
