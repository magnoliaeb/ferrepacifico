<template>
  <!-- <div class="map" ref="map"></div> -->
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481728.6228603727!2d-99.68510352396066!3d19.390580446465194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses-419!2sve!4v1655647642218!5m2!1ses-419!2sve"
    width="600"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>

<script>
export default {
  props: {
    coords: {
      type: Object,
    },
  },
  mounted() {
    // if (!process.server) {
    if (typeof google === "undefined") {
      const script = document.createElement("script");
      script.onload = this.onScriptLoaded;
      script.type = "text/javascript";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.$config.$public.google.key}&libraries=places`;
      document.head.appendChild(script);
    } else {
      this.onScriptLoaded(true);
    }

    // }
  },
  data() {
    return {};
  },
  watch: {
    coords() {
      this.onScriptLoaded(true);
    },
  },

  methods: {
    onScriptLoaded(event) {
      // YOU HAVE ACCESS TO "new google" now, ADD YOUR GOOGLE MAPS FUNCTIONS HERE.
      if (event) {
        let coords = this.coords;
        // let coords = { lat: 27.917461464287985, lng: -81.72226681563188 };
        // var input = this.$refs.searchTextField; //.getElementById('searchTextField');
        let map = new google.maps.Map(this.$refs.map, {
          zoom: 11,
          center: coords,
        });

        var icon = {
          url: require("~/assets/imgs/web/pin.svg?resize&size=10"), // url
          scaledSize: new google.maps.Size(40, 40), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(0, 0), // anchor
        };

        let marker = new google.maps.Marker({
          position: coords,
          map,
          title: "Ferrepacifico",
          icon,
        });

        const contentString = `<h5>Place</h5>`;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });

        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });
      } else {
        console.log("Already existed");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.map,
iframe {
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //   background-color: rgb(0, 255, 0);
}

@media screen and (min-width: $md) {
  .map,
  iframe {
    height: 100%;
    // background-color: rgb(255, 0, 98) !important;
  }
}
</style>
