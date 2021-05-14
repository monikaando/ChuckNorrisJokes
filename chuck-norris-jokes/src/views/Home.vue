<template>
  <div>
    <Navbar moreJokesBtn="show" />
    <div
      class="d-flex flex-wrap justify-content-center mt-4 py-3 scrollbar"
      id="style-2"
    >
      <div
        class="card my-2 mx-3"
        v-for="(item, index) in tenJokes"
        :key="index"
      >
        <div class="card-body px-4">
          <p class="card-text">
            {{ item }}
          </p>
          <button
            @click="addFavourite(item)"
            class="btn btn-sm btn-blue text-white"
          >
            Add to favourites
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
  name: "Home",
  components: {
    Navbar,
  },

  created() {
    this.uploadTenJokes();
  },
  computed: {
    ...mapGetters(["tenJokes"]),
  },
  methods: {
    ...mapActions({
      uploadTenJokes: "uploadTenJokes",
      addFavourite: "addFavourite",
    }),
  },
};
</script>
<style scoped>
.card {
  width: 35%;
  opacity: 0.6;
}
@media only screen and (max-width: 576px) {
  .card {
    width: 100%;
  }
}
.btn-blue {
  background-color: rgb(0, 40, 197);
}
</style>