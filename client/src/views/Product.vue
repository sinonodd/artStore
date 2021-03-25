<template>
    <div class="home row">
      <div class="col-md-4 playlist">
        <img width="400" :src="product.image" alt="">
          <h4>{{product.name}}</h4>
          <span class="text-muted d-block">{{product.price}}$</span>
          <button @click="addToCart(product)" class="btn btn-dark">Add to cart</button>
      </div>
    </div>
</template>
<script>
const API_URL = 'http://localhost:5000/api/v1/product/';

export default {
  data: () => ({
    product: {},
  }),
  async mounted() {
    const { id } = this.$route.params;
    const res = await fetch(`${API_URL}${id}`);
    const products = await res.json();
    const [product] = products;
    this.product = product;
  },
};
</script>
