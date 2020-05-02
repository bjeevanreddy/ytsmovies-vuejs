<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <p>Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in</p>
          <p>excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.</p>
        </div>
      </div>
    </div>
    <show />
    <div class="row">
      <div class="col-6 text-right">
      <router-link to="/movies" class="btn btn-outline-primary">Search Movies</router-link>
    </div>
    <div class="col-6 text-left">
      <router-link to="/series" class="btn btn-outline-primary">Search Series</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import Show from "../components/Show.vue";
export default {
  components: {
    Show
  }
};
</script>

<style scoped>
.jumbotron {
  background-image: url(https://img.yts.mx/assets/images/movies/extraction_2020/background.jpg)
    no-repeat center center;
  background-size: cover;
}
</style>