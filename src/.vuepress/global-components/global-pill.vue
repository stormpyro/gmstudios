<template>
  <div class="pill">
    {{ text }}
  </div>
</template>
<script>
export default {
  props: {
    text: {
      default: "Pill",
      type: String,
    },
  },
};
</script>
<style scoped>
.pill {
  align-items: center;
  background-color: rgba(13, 59, 197, 0.898);
  border-radius: 20px;
  border: 1px solid rgba(188, 188, 188, 0.642);
  box-sizing: border-box;
  color: white;
  display: flex;
  height: 46px;
  justify-content: center;
  margin: 2px 4px;
  min-width: 80px;
  padding: 20px;
  text-align: center;
}
</style>