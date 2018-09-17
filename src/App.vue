<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/adminlogin">Admin login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .wrapper {
    animation: fadein 2s;
  }
  @keyframes fadein {
    from { opacity: 0}
    to   { opacity: 1}
  }
  a {
    
  }
</style>
