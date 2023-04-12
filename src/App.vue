<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  background-color: #f5f5f5;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

* {
  box-sizing: border-box;
}

[v-cloak] {
  display: none;
}
</style>
