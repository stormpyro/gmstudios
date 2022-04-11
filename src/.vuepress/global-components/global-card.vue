<template>
  <div class="custom-card">
    <div class="mb-10">
      <h4 class="mt-0 mb-4">{{ title }}</h4>
      <strong class="subtitle">{{ subtitle }} </strong>
    </div>
    <slot name="content">
      <div>Content</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "custom-card",
  props: {
    title: {
      default: "Titulo",
      type: String,
    },
    subtitle: {
      type: "String",
    },
  },
};
</script>
<style scoped>
.custom-card {
  -moz-box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  box-shadow: 0px 0px 20px -12px rgba(0, 0, 0, 0.8);
  min-height: 100px;
  width: 100%;
  padding: 20px 30px;
}
.mt-0 {
  margin-top: 0px;
}
.mb-4 {
  margin-bottom: 4px;
}
.subtitle {
  color: rgb(111, 111, 111);
}
.mb-10 {
  margin-bottom: 10px;
}
</style>