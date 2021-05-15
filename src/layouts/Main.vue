<template>
  <div :style="backgroundChangeImg" class="App d-flex flex-column">
    <router-view />
    <NotificationsList />
    <Footer />
  </div>
</template>

<script>
import NotificationsList from "@/components/NotificationsList";
import Footer from "@/components/Footer";
import { mapGetters } from "vuex";
export default {
  name: "MainLayout",
  components: {
    NotificationsList,
    Footer,
  },
  computed: {
    ...mapGetters(["backgroundChange"]),
    backgroundChangeImg() {
      return this.backgroundChange ? this.image1 : this.image2;
    },
  },
  data() {
    return {
      image1: {
        "background-image":
          "url(https://res.cloudinary.com/mokaweb/image/upload/o_30/v1620923519/ChuckNorrisJokes/texas-wallpaper.jpg)",
      },
      image2: {
        "background-image":
          "url(https://res.cloudinary.com/mokaweb/image/upload/o_30/v1621095537/ChuckNorrisJokes/Chuck-Norris-background.jpg)",
      },
    };
  },
};
</script>
<style>
.App {
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
