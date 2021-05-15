<template>
  <div class="navbar d-flex justify-content-between">
    <button
      @click="toggleBackground()"
      class="btn btn-sm p-0 change-background-button ms-4"
      type="button"
    >
      <img
        src="/images/change_background.png"
        alt="change-background"
        class="change-background-icon mb-1"
      />
    </button>
    <div class="d-flex justify-content-sm-center justify-content-md-end">
      <button
        v-if="moreJokesBtn === 'show'"
        class="btn btn-sm btn-light me-2 me-md-5 btn-static"
        type="button"
        @click="moreJokes()"
      >
        More jokes
      </button>
      <div v-if="timer === 'show'">
        <button
          @click="toggleTimer()"
          :class="[isActive ? 'btn-success' : 'btn-danger']"
          class="btn btn-sm mx-5 btn-static"
          type="button"
        >
          {{ isActive ? "Timer ON" : "Timer OFF" }}
        </button>
      </div>
      <button
        class="btn btn-sm btn-secondary d-flex justify-content-center mx-2 text-center btn-width"
        type="button"
        @click="$router.push({ name: 'Home' })"
      >
        <img src="/images/home.svg" alt="home" class="img-icons" />
        <span class="d-none d-sm-block ms-2">Home</span>
      </button>
      <button
        class="btn btn-sm btn-secondary d-flex mx-2 btn-width"
        type="button"
        @click="$router.push({ name: 'Favourites' })"
      >
        <img src="/images/favourite.png" alt="home" class="mb-1 img-icons" />
        <span class="d-none d-sm-block ms-2">Favourites</span>
      </button>
    </div>
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
      toggleBackground: "toggleBackground",
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
.change-background-icon,
.change-background-button {
  width: 27px;
}
.img-icons {
  width: 17px;
  padding-top: 2px;
}
.btn-width,
.btn-static {
  width: 120px;
}

@media only screen and (max-width: 576px) {
  .btn-width {
    width: 35px;
  }
}
.btn:focus {
  box-shadow: none;
}
</style>
