<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/shekel.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <form @submit.prevent="increment(currentCurrency, Number(currentAmount))">
      <input v-model="currentCurrency" placeholder="currency">
      <input type="number" v-model="currentAmount" >
      <input type="submit" />
      <p>Add to: {{ currentCurrency }}</p>
      <p>Amount to add: {{ currentAmount }}</p>
    </form>
    <ul>
      <li v-for="(currency,key) in this.$store.state.balances" :key="currency.key">
        {{ key }}: {{ currency.balance }}
      </li>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return { 
      currentCurrency: '', 
      currentAmount: 0 
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    increment(currency, amount) {
      this.$store.commit('increment', [currency, amount])
    }
  }
}
</script>

<style>
  input {
    display: block;
    margin: 10px auto;
  }
</style>
