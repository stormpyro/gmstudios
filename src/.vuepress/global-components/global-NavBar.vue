<template>
  <div>
    <vs-navbar class="navbar" shadow-scroll fixed v-model="activeRoute">
      <template #left>
        <vs-button
          @click="activeSidebar = !activeSidebar"
          color="primary"
          flat
          icon
          v-if="windowWidth <= 580"
        >
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
      <div :key="idx" v-for="(navBarItem, idx) in navBarItems">
        <vs-navbar-item
          :active="activeRoute == navBarItem.id"
          :id="navBarItem.id"
          :to="navBarItem.href"
          style="display: flex; align-items: center"
          target="_self"
          v-if="windowWidth > 580"
        >
          <i
            :class="navBarItem.icon"
            style="font-size: 1rem; margin-right: 5px"
          ></i>
          <span>
            {{ navBarItem.label }}
          </span>
        </vs-navbar-item>
      </div>
    </vs-navbar>
    <vs-sidebar
      :open.sync="activeSidebar"
      @input="activeSidebar = false"
      v-model="activeRoute"
    >
      <template #logo> Smart Bold Lawyer </template>
      <vs-sidebar-item
        :id="item.id"
        :key="idx"
        :to="item.href"
        v-for="(item, idx) in navBarItems"
      >
        <template #icon>
          <i :class="item.icon"></i>
        </template>
        {{ item.label }}
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>
<script>
import { EventBus } from "../enhanceApp";
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      activeSidebar: false,
      activeRoute: "conocenos",
      navBarItems: [
        {
          label: "Conocenos",
          id: "conocenos",
          href: "#conocenos",
          icon: "bx bxs-home",
        },
        {
          label: "Servicios",
          id: "services",
          href: "#services",
          icon: "bx bxs-briefcase-alt-2",
        },
        {
          label: "Formación Profesional",
          id: "cv",
          href: "#cv",
          icon: "bx bxs-report",
        },
        {
          label: "Contacto",
          id: "contact",
          href: "#contact",
          icon: "bx bxs-contact",
        },
      ],
    };
  },
  mounted: function () {
    EventBus.$on("update-route", (route) => {
      this.activeRoute = route;
      this.$router.push({ path: "/", hash: "#" + route }).catch((err) => {});
    });
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  beforeDestroy: function () {
    EventBus.$off("update-route");
    window.removeEventListener("resize", () => {});
  },
};
</script>