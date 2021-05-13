<template>
  <div class="d-flex justify-content-end navbar">
    <button
      class="btn btn-sm btn-light mx-5"
      type="button"
      @click="moreJokes()"
    >
      More jokes
    </button>
    <button class="btn btn-sm btn-success mx-5" type="button">Timer ON</button>
    <button class="btn btn-sm btn-danger mx-5" type="button">Timer OFF</button>
    <button class="btn btn-sm btn-secondary mx-2 btn-home" type="button">
      <img src="/images/home.svg" alt="home" class="mb-1" />Home
    </button>
    <button class="btn btn-sm btn-secondary mx-2" type="button">
      <img src="/images/favourite.png" alt="home" class="mb-1" />Favourites
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapActions({
      uploadTenJokes: "uploadTenJokes",
      clearJokes: "clearJokes",
    }),
    moreJokes() {
      this.clearJokes();
      this.uploadTenJokes();
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #00000040;
}
img {
  width: 18%;
  margin: 0 10px 0 0;
}
.btn {
  width: 120px;
}
</style>
