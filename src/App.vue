<template>
  <div id="app">
    <Header />
    <Content 
      v-bind:items="items"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
export default {
  name: 'App',
  components: {
    Header,
    Content
  },
  async mounted() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
#app {
  font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;
    background-color: #F5F5F5;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

* {
    box-sizing: border-box;
}

[v-cloak] {
    display: none;
  }
</style>
