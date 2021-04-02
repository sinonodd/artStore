<template>
  <div>
    <img :src="background" width="100%" alt="hero">
    <ShoppingCart :empty="empty" :products="products" :cart="cart"></ShoppingCart>
    <div class="ml-auto mr-auto container row">
      <Categories class="m-0 col-md-2"></Categories>
      <div class="home ml-auto row col-md-10">
        <div v-for="product in products" :key="product._id" class="mt-3 col-md-3 mx-auto">
          <div class="card bg-light shadow rounded">
            <router-link :to="{name: 'Product', params: {id: product._id}}" class="m-0">
              <img :src="product.image" width="100%">
            </router-link>
              <h4 class="text-dark">{{product.name}}</h4>
              <span class="text-muted d-block">{{product.price}}$</span>
              <button @click="addToCart(product)" class="btn inline btn-dark">
                <!-- eslint-disable -->
                <svg v-if="!added" class="mr-1" fill="white" width="24" enable-background="new 0 0 455 455" version="1.1" viewBox="0 0 455 455" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	                <path d="m0 0v455h455v-455h-455zm358.86 242.64h-116.5v116.5h-30v-116.5h-116.5v-30h116.5v-116.5h30v116.5h116.5v30z"/>
                </svg>
                <svg v-if="added" class="mr-1" fill="firebrick" width="24" enable-background="new 0 0 455 455" version="1.1" viewBox="0 0 455 455" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	                <path d="M0,0v455h455V0H0z M358.865,242.5h-263v-30h263V242.5z"/>
                </svg>
                <!-- eslint-disable -->
                Add to cart
              </button>
          </div>
        </div>
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
    background: require('../assets/hero.jpg'),
    /* eslint-enable global-require */
    empty: true,
    added: false,
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
      this.added = !this.added;
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
<style>
.card {
  transform: .2s;
}
.card:hover {
  transform: scale(1.1);
}
</style>
