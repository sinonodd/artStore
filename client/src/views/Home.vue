<template>
  <div class="product-card">
    <img :src="background" width="100%" alt="hero">
    <ShoppingCart :empty="empty" :products="products" :cart="cart"></ShoppingCart>
    <div class="featured-products row ml-auto mr-auto container">
      <Categories :products="products" class="categories col-md-2"></Categories>

      <section class="ml-auto row col-md-10">
        <div v-for="product in products" :key="product._id" class="mt-4 col-md-4 mx-auto">
          <div class="card bg-light shadow-sm rounded">
            <router-link :to="{name: 'Product', params: {id: product._id}}" class="m-0">
              <img :src="product.image" width="100%">
            </router-link>
              <div class="d-flex justify-content-between">
                <div class="my-1 ml-1 d-flex flex-column">
                  <h5 class="text-muted text-left ml-1">{{product.name}}</h5>
                  <h6 class="text-muted text-left ml-1">{{product.category}}</h6>
                  <span class="text-info d-block text-left ml-1">{{product.price}}$</span>
                </div>
                <div class="">
                  <button @click="addToCart(product)" class="btn inline">
                    <!-- eslint-disable -->
                    <svg class="add mr-1" fill="#454541" width="18" enable-background="new 0 0 455 455" version="1.1" viewBox="0 0 455 455" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                      <path d="m0 0v455h455v-455h-455zm358.86 242.64h-116.5v116.5h-30v-116.5h-116.5v-30h116.5v-116.5h30v116.5h116.5v30z"/>
                    </svg>
                    <!-- eslint-enable -->
                  </button>
                </div>
              </div>
          </div>
        </div>
      </section>

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
    background: require('../assets/hand-painted.jpg'),
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
    if (localStorage.items) {
      this.cart = JSON.parse(localStorage.items);
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      localStorage.items = JSON.stringify(this.cart);
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
<style>
.featured-products {
  background: #f2f3f2;
}
.card {
  transform: .2s;
}
.card:hover {
  transform: scale(1);
}
.add:hover {
  fill: black;
}
</style>
