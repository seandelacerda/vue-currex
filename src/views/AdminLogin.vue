<template>
  <div class="adminlogin wrapper">
    <h1>Admin login</h1>
    <form @submit.prevent="login">
      <label for="username">username
        <input v-validate="'required'" v-model="username" name="username" type="text">
      </label>
      <label for="username">password
        <input v-validate="'required'" v-model="password" name="password" type="password">
      </label>
      <input type="submit" />
    </form>
    <span>{{ errors.first('myinput') }}</span>
  </div>
</template>

<script>
  export default {
    name: 'AdminLogin',
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      login() {
        if(this.username === this.$store.state.administration.username && 
        this.password === this.$store.state.administration.password) {
          this.$router.replace({ name: "admindash" });
        }
      }
    }
  }
</script>

<style>
  
</style>

