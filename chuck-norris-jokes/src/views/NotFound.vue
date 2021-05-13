<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-5 bg-white"
  >
    <h1 class="display-1">Chuck Norris found page 404</h1>
    <img
      src="https://res.cloudinary.com/mokaweb/image/upload/v1620765925/ChuckNorrisJokes/Error_Page.webp"
      alt="error-page"
    />
    <button
      class="btn btn-lg btn-primary"
      type="button"
      @click="$router.push('/')"
    >
      Go back to the Home page
    </button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
.App {
  background-image: none;
}
img {
  width: 40%;
}
</style>