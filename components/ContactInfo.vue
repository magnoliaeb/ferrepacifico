<template>
  <v-row class="justify-start py-2 py-md-0">
    <v-col cols="12">
      <div class="title-header">
        <p>¿TIENES ALGUNA DUDA?</p>
        <h2>CONTACTANOS</h2>
        <div class="line"></div>
      </div>
    </v-col>
    <v-col cols="12">
      <ul class="py-6">
        <li class="pb-7 d-flex align-start">
          <div class="icon mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p class="mb-0">
            Crtra a San Sebastián #114 Col. La Calerilla Tlaquepaque, Jalisco
          </p>
        </li>
        <li class="pb-7 d-flex align-start">
          <div class="icon mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <a href="tel:+(314) 125 65 38">(314) 125 65 38</a>
        </li>
        <li class="pb-7 d-flex align-start">
          <div class="icon mr-3"></div>
          <a href="tel:+(314) 125 65 38">(314) 125 65 38</a>
        </li>
        <li class="d-flex align-start">
          <div class="icon mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <a href="mailto:gcomercial@ferrepacifico.com.mx" class="text-break"
            >gcomercial@ferrepacifico.com.mx</a
          >
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  font-size: 14px;
  color: #373736;
  font-weight: 500;
  font-family: "Montserrat";
}
ul {
  border-bottom: 1px solid #c9c9c9;
}
a {
  color: #373736;
}

.icon {
  min-height: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 18px;
    width: 18px;
    path {
      color: $blue-ligth;
    }
  }
}

@media screen and (min-width: $md) {
  ul {
    border-top: 1px solid #c9c9c9;
  }
  .icon {
    min-height: 24px;
    min-width: 24px;

    svg {
      height: 20px;
      width: 20px;
    }
  }
}
</style>