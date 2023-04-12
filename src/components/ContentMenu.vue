<template>
  <div class="content__menu">
    <h3>Каталог</h3>
    <ul>
      <li>
        <button @click.prevent="getProductsFromCategorie('/')">Все товары</button>
      </li>
      <li v-for="categorie in $store.state.categoryProducts" :key="categorie" :value="categorie">
          <button @click.prevent="getProductsFromCategorie(categorie)">{{ categorie }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryProductsView',
  data () {
    return {
      currentCategory: null,
      categories: []
    }
  },
  methods: {
    getProductsFromCategorie (categorie) {
      if (categorie === '/'){
      this.$store.dispatch('getProductsFromCategorie', categorie);
      } else {
        categorie = '/category/' + categorie
      }
      this.$store.dispatch('getProductsFromCategorie', categorie);
    },
    
  },
};
</script>


<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
}
li {
  height: 25px;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  font-size: 20px;
}
h3 {
  font-size: 30px;
}
button {
  cursor: pointer;
    background: transparent;
    border: none;
    text-decoration: none;
}
.content__menu {
  margin-right: 80px;
  min-width: 250px;
}
@media only screen and (max-width: 1550px) {
  .content__menu {
  margin-right: 30px;
  }
}

@media only screen and (max-width: 1200px) {
  .content__menu {
  margin-right: 20px;
  min-width: 220px;
  }
}
@media only screen and (max-width: 770px) {
  .content__menu {
    margin-right: 10px;
    min-width: 180px;
  }
}
@media only screen and (max-width: 650px) {
  .content__menu {
    display: none;
  }
}
</style>
