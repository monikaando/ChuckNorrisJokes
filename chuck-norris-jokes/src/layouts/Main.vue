<template>
  <div class="App d-flex flex-column">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "MainLayout",
  components: {
    Footer,
  },
};
</script>
<style scoped>
.App {
  background-image: url(https://res.cloudinary.com/mokaweb/image/upload/o_30/v1620923519/ChuckNorrisJokes/texas-wallpaper.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>