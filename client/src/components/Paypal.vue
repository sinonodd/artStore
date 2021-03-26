/* eslint-disable */
<template>
  <div>
    <div v-if="!paidFor">
      <h1>Buy this Lamp - ${{ product.price }} OBO</h1>

      <p>{{ product.description }}</p>

      <img width="400" src="https://images-na.ssl-images-amazon.com/images/I/61yZD4-mKjL._SX425_.jpg" />
    </div>

    <div v-if="paidFor">
      <h1>Noice, you bought a beautiful lamp!</h1>

      <img src="https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif">
    </div>

    <div ref="paypal"></div>
  </div>
</template>
<script>
// import image from "../assets/lamp.png"
export default {
  name: 'Home',
  data: () => ({
    loaded: false,
    paidFor: false,
    product: {
      price: 777.77,
      description: 'leg lamp from that one movie',
      img: '../assets/logo.png',
    },
  }),
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AQym1YVQJZfUSXxhq_WEQwg09povPkGmVstwK3FDXvlS5v9blcvdcqdlQqCHG3rcVR-WkVrjlqrfTYPj';
    script.addEventListener('load', this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price,
                },
              },
            ],
          }),
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(this.data);
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
</script>
/* eslint-enable */
