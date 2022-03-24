<template>
  <vs-navbar class="navbar" shadow-scroll fixed v-model="activeRoute">
    <div :key="idx" v-for="(navBarItem, idx) in navBarItems">
      <vs-navbar-item
        :active="activeRoute == navBarItem.id"
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
import { EventBus } from "../enhanceApp";
export default {
  data() {
    return {
      activeRoute: "conocenos",
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
  mounted: function () {
    EventBus.$on("update-route", (route) => {
      this.activeRoute = route;
      this.$router.push({ path: "/", hash: "#" + route }).catch((err) => {});
    });
  },
  beforeDestroy: function () {
    EventBus.$off("update-route");
  },
};
</script>