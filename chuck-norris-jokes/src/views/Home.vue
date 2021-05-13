<template>
  <div class="d-flex flex-wrap justify-content-center mt-3 pt-5">
    <div class="card my-2 mx-3" v-for="(item, index) in tenJokes" :key="index">
      <div class="card-body px-4">
        <p class="card-text">
          {{ item }}
        </p>
        <a href="#" class="btn btn-sm btn-blue text-white">Add to favourites</a>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  name: "Home",
  data() {
    return {
      tenJokes: [],
    };
  },
  created() {
    EventService.getTenJokes()
      .then((response) => {
        response.data.value.forEach((element) => {
          this.tenJokes.push(
            element.joke.replace(/&quot;/g, "'").replace("?s", "'s")
          );
        });
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404",
          });
        } else {
          this.$router.push({
            name: "NetworkError",
          });
        }
      });
  },
};
</script>
<style scoped>
.card {
  width: 35%;
  opacity: 0.6;
}
.btn-blue {
  background-color: rgb(0, 40, 197);
}
</style>