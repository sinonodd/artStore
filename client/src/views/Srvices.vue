<template>
<div class="container-fluid">
  <section class="services">
    <div><img src="../assets/serivces.jpg" class="servHero" alt="services"></div>
    <div class="d-flex justify-content-center row">
      <div class="mx-1 my-3 col-3 shadow">
        <h2 class="p-3 text-muted border-bottom border-info">112px ART</h2>
        <p class="h4 p-3 text-left text-muted">
          112px art will cover all image sizes up to 112x112 pixels.
        </p>
        <p class="h4 p-3 text-left text-muted">
          This includes popular items like emotes and badges.
          You can also get a small image for other uses.
        </p>
        <p class="h4 p-3 text-left text-muted">
          You can also get a small image for other uses.
        </p>
      </div>
      <div class="mx-1 my-3 col-3 shadow">
        <h2 class="p-3 text-muted border-bottom border-info">512px ART</h2>
        <p class="h4 p-3 text-left text-muted">
          512px art will cover all image sizes up to 512x512 pixels.
        </p>
        <p class="h4 p-3 text-left text-muted">
          This size is optimal for profile pictures,
        </p>
        <p class="h4 p-3 text-left text-muted">
          overlay elements and small banners (eg. Twitch panels).
        </p>
      </div>
      <div class="mx-1 my-3 shadow col-3">
        <h2 class="p-3 text-muted border-bottom border-info">1920px ART</h2>
        <p class="h4 p-3 text-left text-muted">
          1920px art will cover all image sizes up to 1920x1080 pixels.
        </p>
        <p class="h4 p-3 text-left text-muted">
          This size is optimal for overlays and large banners (eg. profile covers).
        </p>
      </div>
    </div>
  </section>
  <Navbar></Navbar>
  <Footer></Footer>
</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
.services {
  background: #f2f3f2;
}
.servHero {
  margin-top: 83px;
}
</style>
