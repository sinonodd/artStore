<template>
  <div>
    <img :src="background" width="80%" alt="hero">
    <ShoppingCart :empty="empty" :products="products" :cart="cart"></ShoppingCart>
    <h1 class="ml-2 text-left">Featured products</h1>
    <div class="home row">
      <Categories class="col-md-3"></Categories>
      <div v-for="product in products" :key="product._id" class="col-md-3 mx-auto">
        <router-link :to="{name: 'Product', params: {id: product._id}}" class="btn">
          <img :src="product.image" width="80%">
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
import Categories from '@/components/Categories.vue';

const API_URL = 'http://localhost:5000/';
export default {
  components: {
    ShoppingCart,
    Categories,
  },
  data: () => ({
    /* eslint-disable global-require */
    background: require('../../public/bg0.jpg'),
    /* eslint-enable global-require */
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
