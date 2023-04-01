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
  data () {
    return {
      items: [
        {id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple', price: 549},
        {id: 2, title: 'iPhone X', description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD di…lay with OLED technology A12 Bionic chip with ...', price: 899},
        {id: 3, title: 'Samsung Universe 9', description: "Samsung's new variant which goes beyond Galaxy to the Universe", price: 1249}
      ]
    }
  },
  components: {
    Header,
    Content
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
