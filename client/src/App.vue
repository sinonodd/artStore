<template>
  <div class="conatiner" id="app">
    <div class="navbar navbar-expand-lg fixed-top" id="nav">
      <router-link class="lead" to="/">Z-store</router-link>
      <button class="nav-button btn btn-info ml-auto" @click="Do()" to="/">{{button}}</button>
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
  background-image: url('./assets/3040791.jpg')
}
.navbar {
  background: #454541;
}
.nav-button {
  background: #f4ba7c;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fb7dae;
  text-decoration: none;
}
</style>
