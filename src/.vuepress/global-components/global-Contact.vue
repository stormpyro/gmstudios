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
        <vs-avatar :color="canal.color">
          <i :class="canal.icon"></i>
        </vs-avatar>
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
          text: "950914912 - 960108506",
          color: "success",
        },
        {
          icon: "bx bxl-gmail",
          text: "gminaya03@gmail.com",
          color: "danger",
        },
        {
          icon: "bx bxl-linkedin",
          text: "gilberto-minaya-32963110b",
          color: "primary",
        },
      ],
    };
  },
};
</script>