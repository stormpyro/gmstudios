<template>
  <vs-navbar shadow-scroll fixed v-model="active">
    <div :key="idx" v-for="(navBarItem, idx) in navBarItems">
      <vs-navbar-group v-if="navBarItem.subItems">
        {{ navBarItem.label }}
        <template #items>
          <vs-navbar-item
            :active="active == subItem.id"
            :id="subItem.id"
            :key="sub_idx"
            v-for="(subItem, sub_idx) in navBarItem.subItems"
          >
            {{ subItem.label }}
          </vs-navbar-item>
        </template>
      </vs-navbar-group>
      <vs-navbar-item
        :active="active == navBarItem.id"
        :id="navBarItem.id"
        v-else
      >
        {{ navBarItem.label }}
      </vs-navbar-item>
    </div>
  </vs-navbar>
</template>
<script>
export default {
  data() {
    return {
      active: "cv",
      navBarItems: [
        { label: "Formación Profesional", id: "cv" },
        { label: "Especialidades", id: "specialities" },
        { label: "Contacto", id: "contact" },
        { label: "Agende una cita", id: "dates" },
        {
          label: "Servicios",
          id: "services",
          subItems: [
            { label: "Cartas notariales", id: "letters" },
            { label: "Demandas laborales", id: "cases" },
            { label: "Revision Aduanera", id: "revision" },
          ],
        },
      ],
    };
  },
};
</script>