<template>
  <section class="py-10 history">
    <div class="content">
      <v-row>
        <v-col cols="12">
          <h2>Nuestra <strong>historia</strong></h2>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col cols="12">
          <div class="timeline-area">
            <div
              class="timeline--content"
              v-for="(history, index) in histories"
              :key="index"
            >
              <div
                class="timeline-box timeline--arrow-left"
                :class="history.left ? 'left' : 'right'"
              >
                <h3 class="">{{ history.year }}</h3>
              </div>
              <div
                class="timeline-box"
                :class="!history.left ? 'left' : 'right'"
              >
                <div class="history-text" v-html="history.text"></div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      histories: [
        {
          year: "2003",
          text: '<p>Se apertura la Sucursal de <em class="font-weight-bold">Manzanillo, Colima </em> (Fondeport).</p>',
          left: true,
        },
        {
          year: "2012",
          text: '<p>Inicia operaciones la sucursal <em class="font-weight-bold">Tlaquepaque, Jalisco</em></p>',
          left: false,
        },
        {
          year: "2013",
          text: '<p>En octubre abre <em class="font-weight-bold">Cantamar</em> en Manzanillo, Colima siendo así como se logra tener presencia en los estados de Jalisco y Colima.</p>',
          left: true,
        },
        {
          year: "2016",
          text: '<p>Se apertura la primer filial del grupo, con el nombre de <em class="font-weight-bold">Tu Concreto</em> en Manzanillo Colima, para atender el mercado del Concreto Premezclado, consolidando a Ferrepacifico como un centro de soluciones para la industria de la construcción.</p>',
          left: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.history {
  background-color: #ececec;
}

h2 {
  text-transform: uppercase;
  text-align: center;
}
h3 {
  font-size: $fs-2xl;
  color: $secondary;
  font-weight: 800;
  display: block;
  width: 100%;
}
p {
  font-size: $fs-base;
  color: #373736;
  font-weight: 300;
}
.history-text {
  width: 100%;
  display: block;
}
/* The actual timeline (the vertical ruler) */
.timeline-area {
  position: relative;
  // background-color: red;
}

/* The actual timeline-area (the vertical ruler) */
.timeline-area::after {
  content: "";
  position: absolute;
  width: 1px;
  background-color: #979797;
  top: 0;
  bottom: 0;
  left: 50%;
}

/* time.timeline-box around content */
.timeline-box {
  max-height: 200px;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: #ececec;
}

.timeline--content {
  position: relative;
  z-index: 20;
  text-align: center;
  margin-bottom: 60px;
}

@media screen and (min-width: $lg) {
  /* time.timeline-box around content */
  .timeline-box {
    padding: 10px 40px;
    position: relative;
    top: 20;
    background-color: inherit;
    width: 50%;
    max-height: 200px;
    display: flex;
    align-items: center;
  }

  .timeline--content {
    height: 150px;
    margin-bottom: 0px;
  }
  /* Place the time.timeline-box to the left */
  .timeline-box.left {
    text-align: right;
    height: 100%;
    position: absolute;
    left: 0;
  }

  /* Place the time.timeline-box to the right */
  .timeline-box.right {
    text-align: left;
    height: 100%;
    position: absolute;
    right: 0;
  }

  /* Add arrows to the left time.timeline-box (pointing right) */
  .timeline-box.left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 40%;
    width: 0;
    z-index: 1;
    right: -10px;
    background-color: #ececec;
    border: solid #979797;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .timeline--arrow-left.timeline-box.left::before {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
}
</style>
