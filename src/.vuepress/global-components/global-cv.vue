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
                Soy abogado especializado en derecho aduanero y comercio
                exterior. Tengo experiencia comprobada de más de 30 años en el
                sector con operaciones como clasificación arancelaria,
                valoración aduanera, convenios internacionales con mercancías
                restringidas y prohibidas.
              </p>
              <p>
                Miembro del colegio de abogados de lima.
                <strong>CAL: 86771</strong>
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
              <li>
                Licensed Customs Broker - Hartrodt - Mar de 2021 - dic de 2021
                10 meses
              </li>
              <li>
                Asesor Legal - Hansa Aduanas - feb de 2020 - dic de 2021 - 1 año
                11 meses
              </li>
              <li>
                Revisor en gestion aduanera - Savar Corporación Logística - ene
                de 2008 - abr de 2019 - 11 años 4 meses
              </li>
              <li>
                Sectorista en gestión aduanera - DHL Global Forwarding - feb de
                2005 - dic de 2006 - 1 año 11 meses
              </li>
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
      areas: [
        "Derecho aduanero",
        "Comercio Exterior",
        "Aduanas",
        "Contrataciones del estado",
        "Veedor OSCE",
        "Derecho administrativo",
        "PAS",
        "Delitos Aduaneros",
      ],
    };
  },
};
</script>
<style scoped>
.d-flex {
  display: flex;
}
</style>