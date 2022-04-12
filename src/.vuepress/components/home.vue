<template>
  <div style="height: 100vh">
    <NavBar />
    <div style="height: 60px"></div>
    <conocenos id="conocenos"></conocenos>
    <services id="services"></services>
    <cv id="cv"></cv>
    <contact id="contact"></contact>
    <vs-row style="border-top: 1px solid #eaecef">
      <vs-col
        style="
          align-items: flex-start;
          flex-direction: column;
          padding: 40px 60px;
        "
      >
        <p style="color: #2c3e50; opacity: 0.7">
          Copyright &copy; 2022 Smart Bold Lawyer
        </p>
      </vs-col>
    </vs-row>
  </div>
</template>
<style scoped>
.presentation {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>