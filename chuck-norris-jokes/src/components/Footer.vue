<template>
  <div class="d-flex justify-content-end footer position-fixed w-100">
    <p class="p-padding">
      Application created by
      <a
        rel="noopener noreferrer"
        href="https://monikaswidzinska.netlify.app/"
        target="_blank"
        class="text-white text-decoration-underline extra-margin"
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
.extra-margin {
  margin-right: 10px;
}
.p-padding {
  padding-top: 2px;
}
a:hover {
  color: #ffffff;
}
</style>