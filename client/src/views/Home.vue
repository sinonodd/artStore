<template>
  <div>
    <ShoppingCart :empty="empty" :products="products" :cart="cart"></ShoppingCart>
    <div class="home row">
      <div v-for="product in products" :key="product._id" class="col-md-4 playlist">
        <router-link :to="{name: 'Product', params: {id: product._id}}" class="btn">
          <img :src="product.image" class="img-thumbnail">
        </router-link>
          <h4>{{product.name}}</h4>
          <span class="text-muted d-block">{{product.price}}$</span>
          <button @click="addToCart(product)" class="btn btn-dark">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue';

const API_URL = 'http://localhost:5000/';
export default {
  components: {
    ShoppingCart,
  },
  data: () => ({
    empty: true,
    id: '',
    products: [],
    cart: [],
  }),
  async mounted() {
    const res = await fetch(API_URL);
    const result = await res.json();
    this.products = result;
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      this.empty = false;
    },
    async showProduct(id) {
      const res = await fetch(`API_URL${id}`);
      const product = await res.json();
      console.log(product);
      this.$router.push();
    },
  },
};
</script>
