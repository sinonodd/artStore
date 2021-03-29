<template>
  <div class="">
    <img :src="background" width="100%" alt="">
    <h1 class="display-5">Hello, Zynep!</h1>
    <button @click="logout()" class=" mt-3 btn btn-danger btn-lg">Log out</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    /* eslint-disable global-require */
    background: require('../../public/bg0.jpg'),
    /* eslint-enable global-require */
  }),
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>
