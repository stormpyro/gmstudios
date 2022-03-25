<template>
  <vs-row>
    <vs-col
      style="
        align-items: flex-start;
        flex-direction: column;
        padding: 40px 60px;
      "
    >
      <h2 style="font-size: 1.6rem !important">Nuestros Servicios</h2>
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        "
      >
        <vs-card
          :key="idx"
          style="margin: 5px"
          v-for="(service, idx) in services"
        >
          <template #title>
            <h3>{{ service.title }}</h3>
          </template>
          <template #img>
            <img
              :src="require('../public/images/hammereditado.png')"
              alt="serviceImg"
            />
          </template>
          <template #text>
            <p>{{ service.text }}</p>
          </template>
        </vs-card>
      </div>
    </vs-col>
  </vs-row>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Pot with a plant",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          img: "../public/images/hammereditado.png",
        },
        {
          title: "Pot with a plant",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          img: "../public/images/hammereditado.png",
        },
        {
          title: "Pot with a plant",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          img: "../public/images/hammereditado.png",
        },
        {
          title: "Pot with a plant",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          img: "../public/images/hammereditado.png",
        },
        {
          title: "Pot with a plant",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          img: "../public/images/hammereditado.png",
        },
        {
          title: "Pot with a plant",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          img: "../public/images/hammereditado.png",
        },
      ],
    };
  },
};
</script>