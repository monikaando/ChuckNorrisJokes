<template>
  <div class="d-flex justify-content-end footer position-fixed w-100">
    <p class="pt-1">
      Application created by
      <a
        rel="noopener noreferrer"
        href="https://monikaswidzinska.netlify.app/"
        target="_blank"
        class="text-white text-decoration-underline me-2"
        >Monika Swidzinska</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  bottom: 0;
  height: 2.5vh;
  background-color: #00000040;
  color: #ffffff;
  font-size: 10px;
}
a:hover {
  color: #ffffff;
}
</style>