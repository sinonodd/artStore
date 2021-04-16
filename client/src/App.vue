<template>
  <div class="conatiner" id="app">
    <router-view class=""/>
  </div>
</template>
<style>
#app {
  font-family: Fantasy, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing:Fantasy, antialiased;
  -moz-osx-font-smoothing:Fantasy, grayscale;
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
