<template>
  <vs-row>
    <vs-row
      class="flex-center"
      style="height: 500px; display: flex; align-items: center"
    >
      <vs-col
        style="
          align-items: flex-start;
          flex-direction: column;
          padding: 40px 60px;
        "
        vs-type="flex"
        vs-justify="center"
        sm="12"
        w="6"
      >
        <h1>GM Studios</h1>
        <p>
          Profesionales comprometidos a darte un servicio honesto y de calidad.
          Especialistas en comercio y derecho aduanero.
        </p>
        <div style="display: flex">
          <vs-button @click="updateRoute" size="large">
            Agenda una reunion
          </vs-button>
          <vs-button
            blank
            border
            color="dark"
            href="https://pe.linkedin.com/in/gilberto-minaya-32963110b"
            icon
          >
            <i class="bx bxl-linkedin"></i>
          </vs-button>
        </div>
      </vs-col>
      <vs-col
        style="
          display: flex;
          align-items: center;
          height: 100%;
          padding: 40px 60px;
        "
        v-if="windowWidth > 900"
        w="6"
      >
        <img
          :src="require('../public/images/hammereditado.png')"
          alt="hammer"
          style="max-width: 100%; max-height: 100%; object-fit: cover"
        />
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col
        style="
          display: flex;
          align-items: flex-start;
          padding: 40px 60px;
          justify-content: center;
        "
      >
        <div style="max-width: 800px">
          <div
            style="
              font-size: 1.6rem !important;
              font-weight: 400;
              text-align: center;
            "
          >
            Necesitas ayuda en casos de <strong> comercio y aduanas? </strong>
          </div>
          <p>
            Soy especialista en derecho aduanero. Cuento con más de 20 años de
            experiencia en el sector. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nesciunt id debitis, iure perspiciatis, ut odio
            voluptas perferendis dolorum unde quos, accusantium sequi maiores ad
            amet! Voluptates quia fuga atque laudantium.
          </p>
        </div>
      </vs-col>
    </vs-row>
  </vs-row>
</template>
<script>
import { EventBus } from "../enhanceApp";
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    updateRoute: function () {
      EventBus.$emit("update-route", "contact");
    },
  },
  mounted: function () {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", () => {});
  },
};
</script>