<template>
  <div class="jumbotron">
    <h1 class="display-5">Hello, Zynep!</h1>
    <button @click="logout()" class=" mt-3 btn btn-danger btn-lg">Log out</button>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>
