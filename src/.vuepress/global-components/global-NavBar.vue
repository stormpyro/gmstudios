<template>
  <vs-navbar class="navbar" shadow-scroll fixed v-model="active">
    <div :key="idx" v-for="(navBarItem, idx) in navBarItems">
      <vs-navbar-item
        :active="active == navBarItem.id"
        :id="navBarItem.id"
        :to="navBarItem.href"
        target="_self"
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
      active: "conocenos",
      navBarItems: [
        { label: "Conocenos", id: "conocenos", href: "#conocenos" },
        {
          label: "Servicios",
          id: "services",
          href: "#services",
        },
        { label: "Formación Profesional", id: "cv", href: "#cv" },
        { label: "Contacto", id: "contact", href: "#contact" },
      ],
    };
  },
};
</script>