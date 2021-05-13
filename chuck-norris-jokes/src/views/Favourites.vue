<template>
  <div>
    <Navbar timer="show" />
    <div class="d-flex flex-wrap justify-content-center mt-3 pt-5">
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
  computed: {
    ...mapGetters(["favJokes"]),
  },
  methods: {
    ...mapActions({
      removeFavourite: "removeFavourite",
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
