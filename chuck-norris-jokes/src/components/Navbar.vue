<template>
  <div class="d-flex justify-content-sm-center justify-content-md-end navbar">
    <button
      v-if="moreJokesBtn === 'show'"
      class="btn btn-sm btn-light mx-5"
      type="button"
      @click="moreJokes()"
    >
      More jokes
    </button>
    <div v-if="timer === 'show'">
      <button
        @click="toggleTimer()"
        :class="[isActive ? 'btn-success' : 'btn-danger']"
        class="btn btn-sm mx-5"
        type="button"
      >
        {{ isActive ? "Timer ON" : "Timer OFF" }}
      </button>
    </div>
    <button
      class="btn btn-sm btn-secondary mx-2"
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
import { mapGetters, mapActions } from "vuex";

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
  computed: {
    ...mapGetters(["isActive"]),
  },
  methods: {
    ...mapActions({
      uploadTenJokes: "uploadTenJokes",
      clearJokes: "clearJokes",
      toggleTimer: "toggleTimer",
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
  width: 17px;
  margin: 0 10px 0 0;
}
.btn {
  width: 120px;
}
</style>
