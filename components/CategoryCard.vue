<template>
  <article v-if="category" class="d-flex category">
    <img
      :src="require(`@/assets/imgs/web/home/${category.img}.jpg`)"
      :alt="category.name"
    />
    <div
      class="category-box d-flex px-6 align-center flex-column justify-center"
    >
      <img
        :src="require(`@/assets/imgs/web/home/${category.icon}.png`)"
        :alt="category.name"
      />
      <h3 class="my-2">{{ category.name }}</h3>
      <v-btn
        class="mx-auto"
        depressed
        :to="{ name: 'productos', query: { category: category.id } }"
        >me interesa</v-btn
      >
    </div>
  </article>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
article.category {
  height: 195px;
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  overflow: hidden;
  width: 100%;
  height: 173px;
}
img {
  width: 40%;
  height: 100%;
  object-fit: cover;
}
.category-box {
  background-color: white;
  width: 60%;
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  overflow: hidden;
  justify-content: center;
  img {
    width: 63px;
    height: 63px;
    margin: 0 auto;
    display: block;
  }
  h3 {
    font-size: $fs-xl;
    color: #003a70;
    font-weight: 800;
    text-align: center;
  }
  a {
    background-color: $primary !important;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    border-radius: 6px;
    font-size: $fs-xs;
    height: 28px !important;
  }
}

@media screen and (min-width: $md) {
  article.category {
    height: 195px;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    overflow: hidden;
  }

  .category-box {
    img {
      width: 70px;
      height: 70px;
    }

    a {
      height: 32px !important;
    }
  }
}
</style>
