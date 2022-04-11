<template>
  <vs-row>
    <vs-col
      style="
        align-items: flex-start;
        flex-direction: column;
        padding: 40px 60px;
      "
    >
      <h2 style="font-size: 1.6rem !important">Nuestros Servicios</h2>
      <div
        style="
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        "
      >
        <vs-card
          :key="idx"
          style="margin: 5px"
          v-for="(service, idx) in services"
        >
          <template #title>
            <h3>{{ service.title }}</h3>
          </template>
          <template #img>
            <img :src="service.img" alt="serviceImg" />
          </template>
          <template #text>
            <p>{{ service.text }}</p>
          </template>
        </vs-card>
      </div>
    </vs-col>
  </vs-row>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          img: require("../public/images/capacitacion.jpg"),
          text: "Dirigido a: exportadores, importadores, agencias de aduana, estudiantes de comercio exterior y público en general.",
          title: "Capacitación en derecho aduanero y comercio exterior",
        },
        {
          img: require("../public/images/hammereditado.png"),
          text: "Áreas: Derecho comercial, derecho penal en delitos aduaneros y responsabilidad contractual.",
          title: "Litigaciones en procesos judiciales",
        },
        {
          img: require("../public/images/sign.jpg"),
          text: "Conciliación o acuerdo entre las partes involucradas para evitar ir al juicio.",
          title: "Conciliación Extrajudicial",
        },
      ],
    };
  },
};
</script>