<template>
  <div>
    <div v-if="paidFor">
      <strong>Thanks for comming ^^</strong>
    </div>
    <div ref="paypal"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['sum'],
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=ARNRNvgJTH0oaRUrQUC-p-MgCXzIOl5T6um6YqdW7U9mkwzV-ZkfCtp9c0QH6dRWArJY85Yh3rLCT5Vu';
    script.addEventListener('load', this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded() {
      this.loaded = true;
      console.log(this.sum);
      window.paypal
        .Buttons({
          createOrder: (data, actions) => actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: this.sum,
                },
              },
            ],
          }),
          onApprove: async (data, actions) => {
            await actions.order.capture();
            this.paidFor = true;
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
