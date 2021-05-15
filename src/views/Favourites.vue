<template>
  <div class="h-100">
    <Navbar timer="show" />
    <div
      class="d-flex flex-wrap justify-content-center align-content-start mt-4 py-3 scrollbar"
      id="style-2"
    >
      <div
        class="card my-2 mx-3"
        v-for="(item, index) in favJokes"
        :key="index"
      >
        <div class="d-flex flex-column justify-content-between card-body px-4">
          <p class="card-text">
            {{ item }}
          </p>
          <button
            @click="removeFavourite(item, index)"
            class="btn btn-sm btn-outline-secondary"
          >
            Remove
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
    }),
  },
};
</script>
<style scoped>
.card {
  width: 35%;
  opacity: 0.6;
}
img {
  width: 17px;
  margin-right: 7px;
  padding-bottom: 5px;
}
button {
  width: 80px;
}
</style>
