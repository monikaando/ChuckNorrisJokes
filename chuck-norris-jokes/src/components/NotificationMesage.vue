<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show d-flex pb-0 border-bottom-0"
    role="alert"
  >
    <img
      v-if="this.notification.type === 'success'"
      src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_110/v1621093840/ChuckNorrisJokes/Chuck-Norris-success.png"
      alt="alert"
      class="mr-5"
    />
    <img
      v-else
      src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_100/v1621093931/ChuckNorrisJokes/Chuck-Norris-warning.png"
      alt="alert"
    />
    <p class="ms-4">{{ notification.message }}</p>

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