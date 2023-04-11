<template>
  <form v-on:submit.prevent>
    <input type="text" placeholder="Найти..." v-model="userInput">
    <button @click="sendToStoreSearchQuery">Поиск</button>
  </form>
</template>
  
  <script>
  export default {
    name: 'SearchInput',
    data() {
    return {
      userInput: null
    }
  },
  methods: {
    sendToStoreSearchQuery () {
      this.$store.dispatch('findProducts', this.userInput)
    }
  }
}
  
  </script>
  
  <style scoped>
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  input {
   width: 80%;
   padding: 0 20px;
   margin-bottom: 10px;
   background: #E9EFF6;
   line-height: 40px;
   border-width: 0;
   border-radius: 20px;
  }
  button {
   width: 80%;
   padding: 0 20px;
   margin-bottom: 10px;
   background: #E9EFF6;
   line-height: 40px;
   border-width: 0;
   border-radius: 20px;

  }
  </style>