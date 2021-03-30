<template>
  <div class="conatiner" id="app">
    <div class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <router-link to="/">Z-store</router-link>
      <button class="ml-auto" @click="Do()" to="/">{{button}}</button>
    </div>
    <router-view class=""/>
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
      this.button = 'Sign up';
      this.$router.push('/login');
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
  background: #eee;
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
  text-decoration: none;
}
</style>
