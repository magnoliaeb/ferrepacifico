<template>
  <v-row class="align-center white no-gutters">
    <v-col class="order-0 order-md-1" cols="12" md="7" lg="6">
      <div class="content">
        <v-row class="my-8">
          <v-col cols="12">
            <div class="title-header my-6 text-right">
              <p class="mb-0">Nosotros</p>
              <h2 class="text-right">Misión, Visión, Valores</h2>
              <div class="line float-right"></div>
            </div>
          </v-col>
          <v-col cols="12" class="text-center text-md-right">
            <h3 class="mb-2">Misión</h3>
            <p>
              Somos un centro de soluciones confiable y rentable, enfocados en
              las necesidades del mercado de la construcción, ofertando
              productos y servicios de alta calidad, fortaleciendo alianzas
              comerciales que generen valor.
            </p>
          </v-col>
          <v-col cols="12" class="text-center text-md-right">
            <h3 class="mb-2">Visión</h3>
            <p>
              Consolidarnos como la empresa líder regional en la
              comercialización de productos para la construcción, con una
              filosofia de servico y calidad total que contribuya a edificar tu
              futuro.
            </p>
          </v-col>
          <v-col cols="12" class="text-center text-md-right">
            <h3 class="mb-2">Valores</h3>
            <ul class="">
              <li class="d-inline"><span>1.</span> Trabajo en equipo.</li>
              <li class="d-inline"><span>2.</span> Pasión por el servicio.</li>
              <li class="d-inline"><span>3.</span> Respeto.</li>
              <li class="d-inline"><span>4.</span> Compromiso.</li>
              <li class="d-inline"><span>5.</span> Integridad.</li>
              <li class="d-inline"><span>6.</span> Calidad.</li>
              <li class="d-inline"><span>7.</span> Lealtad.</li>
              <li class="d-inline"><span>8.</span> Disciplina.</li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col class="bg-content order-1 order-md-0" cols="12" md="5" lg="6">
      <div class="bg-img"></div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  color: #373736;
}
h3 {
  font-size: $fs-md;
  font-weight: 500;
  text-transform: uppercase;
}
p {
  font-weight: 300;
  font-size: $fs-base;
}
span {
  color: $info;
  font-style: italic;
}

.bg-content {
  height: 288px;
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
  background-image: url("../assets/imgs/web/nosotros/img2.jpg");
}

@media screen and (min-width: $md) {
  .bg-content {
    height: 800px;
  }
}
</style>
