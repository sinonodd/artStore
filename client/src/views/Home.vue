<template>
  <div class="product-card">

    <img :src="background" width="100%" alt="hero">

    <ShoppingCart :empty="empty" :products="products" :cart="cart"></ShoppingCart>

    <div class="featured-products row ml-auto mr-auto container">
      <Categories
      @updatedFilter="filter($event)"
      :products="products" class="categories col-md-2"></Categories>
      <AllProducts v-if="noFilter" :products="products" :cart="cart"></AllProducts>
      <FilterdProducts v-if="!noFilter" :filterd="filterd"></FilterdProducts>
    </div>

  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue';
import Categories from '@/components/Categories.vue';
import AllProducts from '@/components/AllProducts.vue';
import FilterdProducts from '@/components/FilterdProducts.vue';

const API_URL = 'http://localhost:5000/';
export default {
  components: {
    ShoppingCart,
    Categories,
    AllProducts,
    FilterdProducts,
  },
  data: () => ({
    /* eslint-disable-next-line global-require */
    background: require('../assets/hand-painted.jpg'),
    empty: true,
    products: [],
    cart: [],
    filterd: [],
    noFilter: true,
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
    filter(value) {
      if (this.filterd.length === 0) { this.noFilter = true; }
      this.noFilter = false;
      this.products.forEach((el) => {
        if (el.category === value) {
          this.filterd.push(el);
        }
      });
      console.log(this.filterd);
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
