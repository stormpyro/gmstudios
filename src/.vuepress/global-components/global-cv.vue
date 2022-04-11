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
            <card
              :key="idx"
              :subtitle="exp.cargo"
              :title="exp.empresa"
              style="margin-bottom: 10px"
              v-for="(exp, idx) in experiencias"
            >
              <template #content>
                <div class="mb-8">Duración: {{ exp.duracion }}</div>
                <div class="mb-8">Inicio: {{ exp.inicio }}</div>
                <div>Fin: {{ exp.fin }}</div>
              </template>
            </card>
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
      experiencias: [
        {
          empresa: "Hartrodt",
          cargo: "Licensed Customs Broker",
          duracion: "10 meses",
          inicio: "Mar de 2021",
          fin: "Dic de 2021",
        },
        {
          empresa: "Hansa Aduanas",
          cargo: "Asesor Legal",
          duracion: "1 año 11 meses",
          inicio: "Feb de 2020",
          fin: "Dic de 2021",
        },
        {
          empresa: "Savar Corporación Logística",
          cargo: "Revisor en gestion aduanera",
          duracion: "11 años 4 meses",
          inicio: "Ene de 2008",
          fin: "Abr de 2019",
        },
        {
          empresa: "DHL Global Forwarding",
          cargo: "Sectorista en gestión aduanera",
          duracion: "1 año 11 meses",
          inicio: "Feb de 2005",
          fin: "Dic de 2006",
        },
      ],
    };
  },
};
</script>
<style scoped>
.d-flex {
  display: flex;
}
.mb-8 {
  margin-bottom: 8px;
}
.subtitle {
  color: rgb(111, 111, 111);
}
</style>