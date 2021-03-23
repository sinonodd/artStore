<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <button @click="Do()" to="/">{{button}}</button>
    </div>
    <router-view class="container"/>
  </div>
</template>
<script>
export default {
  data: () => ({
    button: '',
  }),
  mounted() {
    if (localStorage.token) {
      console.log(localStorage.token);
      this.button = 'Log out';
    } else {
      this.button = 'Sign up';
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
      this.button = 'Sign up';
    },
    signup() {
      this.$router.push('/signup');
    },
    Do() {
      if (this.button === 'Log out') {
        this.logout();
      } else {
        this.signup();
      }
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
