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
<style>
.App {
  background-image: url(https://res.cloudinary.com/mokaweb/image/upload/o_30/v1620923519/ChuckNorrisJokes/texas-wallpaper.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.scrollbar {
  height: 85vh;
  background: rgba(255, 255, 255, 0.111);
  border-radius: 10px;
  overflow-y: scroll;
  margin-right: 5%;
  margin-left: 5%;
}

/* @media screen and (min-width: 300px) and (max-width: 900px) {
  .scrollbar{
    width: 95%;
    margin-left: 2px;
    }
  } */
#style-2::-webkit-scrollbar-track {
  border-radius: 10px;
}

#style-2::-webkit-scrollbar {
  width: 12px;
}
#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(0, 39, 197, 0.227);
}
</style>
