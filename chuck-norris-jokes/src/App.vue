<template>
  <div class="App d-flex flex-column align-items-start">
    <!-- Navbar -->
    <router-view
      class="d-flex flex-column justify-content-start scrollbar m-5 p-4"
      id="style-2"
    />
    <!-- Footer -->
  </div>
</template>

<style>
.App {
  background-image: url(https://res.cloudinary.com/mokaweb/image/upload/v1620856337/ChuckNorrisJokes/ChuckNorris.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.scrollbar {
  width: 40%;
  height: 72vh;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow-y: scroll;
}
@media screen and (min-width: 300px) and (max-width: 900px) {
  .scrollbar {
    width: 95%;
    margin-left: 2px;
  }
}

#style-2::-webkit-scrollbar-track {
  border-radius: 10px;
}
#style-2::-webkit-scrollbar {
  width: 12px;
}
#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ffb700ec;
}
</style>