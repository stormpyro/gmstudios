<template>
  <vs-row>
    <vs-col
      style="
        align-items: flex-start;
        flex-direction: column;
        padding: 40px 60px;
      "
    >
      <h2>Formacion Profesional</h2>
      <vs-row style="display: flex; justify-content: center">
        <vs-col
          md="7"
          sm="8"
          style="display: flex; justify-content: flex-end"
          w="5"
        >
          <img
            :src="require('../public/images/hammereditado.png')"
            alt="hammer"
            style="
              max-height: 400px;
              max-width: 100%;
              min-height: 200px;
              object-fit: cover;
            "
          />
        </vs-col>
        <vs-col sm="12" w="6">
          <vs-row style="display: flex">
            <vs-col w="12">
              <div style="display: flex; flex-wrap: wrap; align-items: center">
                <h3>Gilberto Minaya Cerna</h3>
                <vs-button
                  blank
                  border
                  color="primary"
                  href="https://pe.linkedin.com/in/gilberto-minaya-32963110b"
                  icon
                  style="height: 30px; margin-left: 6px"
                >
                  <i class="bx bxl-linkedin"></i>
                </vs-button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                sapiente facilis eveniet doloribus vero, voluptatum nisi sint
                dolores ipsum asperiores ipsam aspernatur quo error doloremque
                nobis deleniti deserunt, quidem at.
              </p>
              <p>
                Miembro del colegio de abogados de lima.
                <strong>CAL: 1454212</strong>
              </p>
            </vs-col>
          </vs-row>
          <vs-row style="flex-direction: column">
            <h3>Areas de especializacion</h3>
            <div class="d-flex" style="flex-wrap: wrap">
              <pill :key="idx" v-for="(area, idx) in areas" :text="area"></pill>
            </div>
          </vs-row>
          <vs-row style="flex-direction: column">
            <h3>Experiencia Profesional</h3>
            <ul>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
            </ul>
          </vs-row>
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>
<script>
export default {
  data() {
    return {
      areas: ["Derecho aduanero", "Comercio Exterior", "Aduanas"],
    };
  },
};
</script>
<style scoped>
.d-flex {
  display: flex;
}
</style>