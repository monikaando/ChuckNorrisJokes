<template>
  <div>
    <div
      v-for="(item, index) in tenJokes"
      :key="index"
      class="d-flex mx-5 my-4 py-2"
    >
      <h5>{{ index + 1 }}.</h5>
      <h5>{{ item }}</h5>
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
          this.tenJokes.push(element.joke.replace(/&quot;/g, "'"));
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
h5 {
  line-height: 1.5em;
  margin: 0 10px 0 0;
}
</style>