<template>
  <section class="text-left">
  <h4 class="text-muted categories pb-1 my-4 border-bottom">Categories</h4>
  <div v-for="product in categories" :key="product.category" class="btn-block btn-group-vertical">
    <div class="form-check">
      <input
        @change="filter(product.category)"
        class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          {{product.category}}
        </label>
    </div>
  </div>
  </section>
</template>
<script>
export default {
  props: ['categories'],
  data: () => ({
    filterd: [],
  }),
  methods: {
    filter(cat) {
      this.$emit('updatedFilter', cat);
    },
  },
};
</script>
<style>
.categories {
  color: #454541;
}
.categories-container {
}
</style>
