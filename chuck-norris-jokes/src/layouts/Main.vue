<template>
  <div class="App d-flex flex-column">
    <router-view />
    <NotificationsList />
    <Footer />
  </div>
</template>

<script>
import NotificationsList from "@/components/NotificationsList";
import Footer from "@/components/Footer";

export default {
  name: "MainLayout",
  components: {
    NotificationsList,
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
  border-radius: 10px;
  overflow-y: scroll;
  margin-right: 5%;
  margin-left: 5%;
}
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
