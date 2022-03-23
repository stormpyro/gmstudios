<template>
  <vs-navbar class="navbar" shadow-scroll fixed v-model="active">
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
        :href="navBarItem.href"
        :id="navBarItem.id"
        target="_self"
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
      active: "",
      navBarItems: [
        { label: "Conocenos", id: "conoce", href: "#conocenos" },
        {
          label: "Servicios",
          id: "servicios",
          href: "#services",
        },
        { label: "Formación Profesional", id: "formacion", href: "#cv" },
        { label: "Contacto", id: "dates", href: "#contact" },
      ],
    };
  },
};
</script>