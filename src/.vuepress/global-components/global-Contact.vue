<template>
  <vs-row>
    <vs-col
      style="
        align-items: flex-start;
        flex-direction: column;
        padding: 40px 60px;
      "
    >
      <h2>Contacto</h2>
      <p>Consulte acerca de mis servicios o agende una cita sin compromiso.</p>
      <div
        :key="idx"
        v-for="(canal, idx) in contacts"
        style="display: flex; align-items: center"
      >
        <vs-button :color="canal.color" :href="canal.href" blank icon>
          <i :class="canal.icon"></i>
        </vs-button>
        <p style="margin-left: 5px">{{ canal.text }}</p>
      </div>
    </vs-col>
  </vs-row>
</template>
<script>
export default {
  data() {
    return {
      contacts: [
        {
          icon: "bx bxl-whatsapp",
          text: "+51 953914912",
          color: "whatsapp",
          href: "https://wa.me/51953914912?text=Hola%20quisiera%20agendar%20una%20reunion",
        },
        {
          icon: "bx bxl-gmail",
          text: "gminaya03@gmail.com",
          color: "youtube",
          href: "mailto:gminaya03@gmail.com",
        },
        {
          icon: "bx bxl-linkedin",
          text: "gilberto-minaya-32963110b",
          color: "linkedin",
          href: "https://pe.linkedin.com/in/gilberto-minaya-32963110b",
        },
      ],
    };
  },
};
</script>