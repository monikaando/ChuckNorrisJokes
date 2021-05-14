<template>
  <div class="h-100">
    <Navbar timer="show" />
    <div
      class="d-flex flex-wrap justify-content-center mt-4 py-3 scrollbar"
      id="style-2"
    >
      <div
        class="card my-2 mx-3"
        v-for="(item, index) in favJokes"
        :key="index"
      >
        <div class="card-body px-4">
          <p class="card-text">
            {{ item }}
          </p>
          <button
            @click="removeFavourite(item, index)"
            class="btn btn-sm btn-blue text-white"
          >
            Remove from favourites
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/components/Navbar";

export default {
  name: "Favourites",
  components: {
    Navbar,
  },
  created() {
    this.loadFavourite();
  },
  computed: {
    ...mapGetters(["favJokes"]),
  },
  methods: {
    ...mapActions({
      removeFavourite: "removeFavourite",
      loadFavourite: "loadFavourite",
      saveFavourite: "saveFavourite:",
    }),
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
