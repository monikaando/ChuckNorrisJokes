<template>
  <div class="d-flex flex-wrap justify-content-center mt-3 pt-5">
    <div class="card my-2 mx-3" v-for="(item, index) in tenJokes" :key="index">
      <div class="card-body px-4">
        <p class="card-text">
          {{ item }}
        </p>
        <a href="#" class="btn btn-sm btn-blue text-white">Add to favourites</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  created() {
    this.uploadTenJokes();
  },
  computed: {
    ...mapGetters(["tenJokes"]),
  },
  methods: {
    ...mapActions({
      uploadTenJokes: "uploadTenJokes",
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