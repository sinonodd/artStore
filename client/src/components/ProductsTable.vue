<template>
  <div class="col-md-6">
    <h3 class="text-left">My products</h3>
    <table v-if="!deleting" class="table-responsive table table-hover">
      <thead>
        <tr>
          <th scope="col">Product name</th>
          <th scope="col">id</th>
          <th scope="col">Price</th>
          <th scope="col">category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id" class="table-secondary">
          <th scope="row">{{product.name}}</th>
          <td>{{product._id}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>
            <button @click="deleteItem(product._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="deleting" class="spinner-border text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script>
const API_URL_PRODUCTS = 'http://localhost:5000/api/v1/products/';

export default {
  data: () => ({
    deleting: false,
    products: [],
  }),
  async mounted() {
    const response = await fetch(API_URL_PRODUCTS, {
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    const products = await response.json();
    this.products = products;
  },
  methods: {
    async deleteItem(id) {
      this.deleting = true;
      const response = await fetch(`${API_URL_PRODUCTS}${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.token}`,
        },
      });
      window.location.reload();
      console.log(response);
    },
  },
};
</script>
