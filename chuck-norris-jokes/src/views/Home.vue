<template>
  <div class="d-flex flex-wrap box">
    <div
      class="card joke-card m-2"
      v-for="(item, index) in tenJokes"
      :key="index"
    >
      <div class="card-body">
        <p class="card-text">
          {{ item }}
        </p>
        <a href="#" class="btn btn-primary">Add to favourites</a>
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
.box {
  width: 60%;
}
.joke-card {
  width: 45%;
}
</style>