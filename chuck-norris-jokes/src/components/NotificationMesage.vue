<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show d-flex"
    role="alert"
  >
    <img
      src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_100/v1621088962/ChuckNorrisJokes/Chuck-Norris-warning.png"
      alt="alert"
    />
    <!-- <img
      src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,h_116/v1621089519/ChuckNorrisJokes/Chuck-Norris-success.png"
      alt="alert"
    /> -->

    {{ notification.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },
  methods: mapActions(["removeNotification"]),
};
</script>

<style>
</style>