<template>
  <div style="height: 100vh">
    <NavBar />
    <div style="height: 60px"></div>
    <vs-row
      class="flex-center"
      style="height: 600px; display: flex; align-items: center"
    >
      <vs-col
        style="
          align-items: flex-start;
          flex-direction: column;
          padding: 40px 60px;
        "
        vs-type="flex"
        vs-justify="center"
        w="6"
      >
        <h1>GM Studios</h1>
        <p>
          Profesionales comprometidos a darte un servicio honesto y de calidad.
          Especialistas en comercio y derecho aduanero.
        </p>
        <div style="display: flex">
          <vs-button size="large"> Agenda una cita </vs-button>
          <vs-button
            blank
            href="https://pe.linkedin.com/in/gilberto-minaya-32963110b"
            icon
            color="dark"
            border
          >
            <i class="bx bxl-linkedin"></i>
          </vs-button>
        </div>
      </vs-col>
      <vs-col style="display: flex; align-items: center; height: 100%" w="6">
        <img
          style="max-width: 100%; height: auto"
          :src="require('../public/images/hammereditado.png')"
          alt="hammer"
        />
      </vs-col>
    </vs-row>
    <conocenos id="conocenos"></conocenos>
    <services id="services"></services>
    <cv id="cv"></cv>
  </div>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
<style scoped>
.presentation {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>