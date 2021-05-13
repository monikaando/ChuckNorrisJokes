<template>
  <div class="d-flex justify-content-end navbar">
    <button
      v-if="moreJokesBtn === 'show'"
      class="btn btn-sm btn-light mx-5"
      type="button"
      @click="moreJokes()"
    >
      More jokes
    </button>
    <div v-if="timer === 'show'">
      <button class="btn btn-sm btn-success mx-5" type="button">
        Timer ON
      </button>
      <button class="btn btn-sm btn-danger mx-5" type="button">
        Timer OFF
      </button>
    </div>
    <button
      class="btn btn-sm btn-secondary mx-2 btn-home"
      type="button"
      @click="$router.push({ name: 'Home' })"
    >
      <img src="/images/home.svg" alt="home" class="mb-1" />Home
    </button>
    <button
      class="btn btn-sm btn-secondary mx-2"
      type="button"
      @click="$router.push({ name: 'Favourites' })"
    >
      <img src="/images/favourite.png" alt="home" class="mb-1" />Favourites
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  props: {
    moreJokesBtn: {
      type: String,
      default: "hide",
    },
    timer: {
      type: String,
      default: "hide",
    },
  },
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
  beforeDestroy() {
    this.clearJokes();
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
