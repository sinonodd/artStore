<template>
  <div class="text-right d-block">
    <button @click="show()" class="btn btn-success">Cart
      <span class="badge badge-light badge-pill">{{cart.length}}</span>
    </button>
    <div v-if="active" class="mb-4">
      <div class="row mb-2" v-for="item in cart" :key="item._id">
        <img  width="90" :src="item.image" alt="itemImage">
        <h6 class="m-auto text-secondary">{{item.name}}</h6>
        <h6 class="m-auto text-danger">{{item.price}} MAD</h6>
        <h6 class="m-auto">{{item.category}}</h6>
        <button @click="removeItem(item)" class="btn btn-danger my-auto">Remove</button>
      </div>
      <h1>{{total()}}</h1>
      <button v-if="!empty" @click="checkout()" class="btn btn-warning">Checkout</button>
      <Paypal :cart="cart"></Paypal>
    </div>
  </div>
</template>
<script>
import Paypal from '@/components/Paypal.vue';

export default {
  components: {
    Paypal,
  },
  props: ['products', 'cart', 'empty'],
  data: () => ({
    active: false,
    prices: [],
  }),
  methods: {
    total() {
      const result = this.cart.reduce((acc, item) => acc + parseInt(item.price, 10), 0);
      return result;
    },
    show() {
      this.active = !this.active;
    },
    checkout() {
      console.log('/checkout');
    },
    removeItem(item) {
      this.cart.splice(this.cart.indexOf(item), 1);
      if (this.cart.length === 0) {
        window.location.reload();
      }
    },
  },
};
</script>
