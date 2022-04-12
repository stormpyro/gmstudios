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
        <h1>Estudio Smart Bold Lawyer</h1>
        <p>
          Profesionales comprometidos a darte un servicio honesto y de calidad.
          Te brindamos una atención personalizada y rápida enfocada a orientarte
          de manera empática y realista en tu caso. Consulta nuestros servicios
          y agenda una reunión sin compromiso.
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
          :src="require('../public/images/corte_justicia.jpg')"
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
            Soy especialista en derecho aduanero. Cuento con más de 30 años de
            experiencia comprobada en el sector. Si quieres conocer más del
            sector y tener un asesoramiento profesional o guía no dudes en
            contactarme, puedo solventar tus dudas y orientarte en los procesos
            para que tomes la mejor decisión respecto a tu caso.
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
      windowWidth: 0,
    };
  },
  methods: {
    updateRoute: function () {
      EventBus.$emit("update-route", "contact");
    },
  },
  mounted: function () {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", () => {});
  },
};
</script>
