<template>
  <div style="height: 100vh">
    <NavBar />
    <carousel autoplay style="margin-top: 50px; max-height: 700px">
      <slide
        ><img style="width: 100%" :src="require('../public/images/sign.jpg')"
      /></slide>
      <slide
        ><img
          style="width: 100%"
          :src="require('../public/images/hammer.jpg')"
        />
      </slide>
      <slide
        ><img
          style="width: 100%"
          :src="require('../public/images/taxes.jpg')"
        />
      </slide>
    </carousel>
  </div>
</template>
<script>
export default {
  data: () => ({}),
};
</script>