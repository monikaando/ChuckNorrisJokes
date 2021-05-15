<template>
  <div class="d-flex flex-column text-center align-items-center mt-5 bg-white">
    <h1 class="display-1">Chuck Norris found page 404</h1>
    <img
      src="https://res.cloudinary.com/mokaweb/image/upload/v1620765925/ChuckNorrisJokes/Error_Page.webp"
      alt="error-page"
    />
    <button
      class="btn btn-lg btn-primary mt-5"
      type="button"
      @click="$router.push({ name: 'Home' })"
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
@media only screen and (max-width: 576px) {
  img {
    width: 100%;
  }
}
</style>