<template>
  <div class="col-md-6">
    <h3 class="text-left">Add new product</h3>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>
      <div v-if="sending" class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <form v-if="!sending" @submit.prevent="addProduct()">
        <div class="form-group text-left">
          <input
            v-model="product.name"
            type="product"
            class="form-control"
            id="exampleInputName"
            placeholder="Product name">
        </div>
        <div class="form-group text-left">
          <input
            v-model="product.price"
            type="price"
            class="form-control"
            id="exampleInputPrice"
            placeholder="Price">
        </div>
        <div class="form-group text-left">
          <input
            v-model="product.category"
            type="category"
            class="form-control"
            id="exampleInputCategory"
            placeholder="Category">
        </div>
        <div class="form-group text-left">
          <input
            v-model="product.image"
            type="url"
            class="form-control"
            id="exampleInputEmage"
            placeholder="Image url">
        </div>
        <button type="submit" class="btn btn-block btn-lg btn-outline-success">Add product
        </button>
      </form>
    </div>
</template>
<script>
import Joi from 'joi';

const API_URL_PRODUCTS = 'http://localhost:5000/api/v1/products';
const schema = Joi.object({
  name: Joi.string().trim().required(),
  price: Joi.number().required(),
  category: Joi.string().trim().required(),
  image: Joi.string().uri({
    scheme: [
      /https/,
    ],
  }),
});

export default {
  data: () => ({
    sending: false,
    errorMessage: '',
    user: null,
    product: {
      name: '',
      price: '',
      category: '',
      image: '',
    },
  }),
  methods: {
    addProduct() {
      this.sending = true;
      this.errorMessage = '';
      if (this.validProduct()) {
        const body = {
          name: this.product.name,
          price: this.product.price,
          category: this.product.category,
          image: this.product.image,
        };
        fetch(API_URL_PRODUCTS, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response.json();
            return window.location.reload();
          }
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }).catch((error) => {
          this.errorMessage = 'Something went wrong.';
          console.log(error);
        });
      }
    },
    validProduct() {
      const result = schema.validate(this.product);
      if (result.error === undefined) {
        return true;
      }
      this.errorMessage = 'Not a valid product.';
      return false;
    },
  },
};
</script>
