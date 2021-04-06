<template>
  <section class="text-left">
  <h4 class="text-muted categories pb-1 my-4 border-bottom">Categories</h4>
  <div v-for="product in products" :key="product.category" class="btn-block btn-group-vertical">
    <router-link
      class="text-muted mb-3 pb-1 border-bottom" to="#">{{product.category}}</router-link>
  </div>
  </section>
</template>
<script>
export default {
  props: ['products'],
  date: () => ({
    categories: [],
  }),
};
</script>
<style>
.categories {
  color: #454541;
}
.categories-container {
}
</style>
