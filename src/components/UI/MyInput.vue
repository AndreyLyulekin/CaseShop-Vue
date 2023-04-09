<template>
  <form v-on:submit.prevent>
    <input type="text" placeholder="some user input" v-model="user_input">
    <button @click="sendToStoreSearchQuery">Send data</button>
  </form>
  </template>
  
  <script>
  export default {
    name: 'my-input',
    data() {
    return {
      user_input: null
    }
  },
  methods: {
    sendToStoreSearchQuery () {
      this.$store.state.searchQuery = this.user_input
    }
  }
}
  
  </script>
  
  <style scoped>
  .input {
    width: 300px;
    border: 1px solid teal;
    padding: 20px 15px;
    margin-top: 15px;
    margin-left: 60px;
  }
  </style>