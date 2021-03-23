<template>
  <div class="home row">
    <div v-for="product in products" :key="product._id" class="col-md-4 playlist">
        <img :src="product.image" class="img-thumbnail">
        <h4>{{product.name}}</h4>
        <span class="text-muted">{{product.price}}$</span>
    </div>
      </div>
</template>

<script>

const API_URL = 'http://localhost:5000/';
export default {
  data: () => ({
    id: '',
    products: [],
  }),
  async mounted() {
    const res = await fetch(API_URL);
    const result = await res.json();
    this.products = result;
  },
};
</script>
