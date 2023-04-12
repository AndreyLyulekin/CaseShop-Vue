import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    categoryProducts: [],
    searchQuery: null,
    isLoading: false,
    product: [],
    pages: null,
  },
  actions: {
    async fetchProducts(ctx, payload = {}) {
      const { limit = 10, skip = 0 } = payload;

      await ctx.commit('setIsLoading', true);
      await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((res) => res.json())
        .then((products) => {
          ctx.commit('updateProducts', products);
          ctx.commit('setTotalProductsCount', products.total);
        })
        .catch((err) => console.log(err))
        .finally(() => ctx.commit('setIsLoading', false));
    },
    async findProducts(ctx, searchQuery) {
      await ctx.commit('setIsLoading', true);
      await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then((products) => ctx.commit('updateProducts', products))
        .catch((err) => console.log(err))
        .finally(() => ctx.commit('setIsLoading', false));
    },
    async findOneProduct(ctx, id) {
      await ctx.commit('setIsLoading', true);
      await fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((product) => ctx.commit('getOneProduct', product))
        .catch((err) => console.log(err))
        .finally(() => ctx.commit('setIsLoading', false));
    },
    async getCategoryProducts(ctx) {
      await ctx.commit('setIsLoading', true);
      await fetch(`https://dummyjson.com/products/categories`)
        .then((res) => res.json())
        .then((categories) => ctx.commit('updateCategoryProducts', categories))
        .catch((err) => console.log(err))
        .finally(() => ctx.commit('setIsLoading', false));
    },
    async getProductsFromCategorie(ctx, categorie) {
      await ctx.commit('setIsLoading', true);
      await fetch(`https://dummyjson.com/products${categorie}`)
        .then((res) => res.json())
        .then((products) => {
          ctx.commit('updateProducts', products);
          ctx.commit('setTotalProductsCount', products.total);
        })
        .catch((err) => console.log(err))
        .finally(() => ctx.commit('setIsLoading', false));
    }
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products.products;
    },
    getOneProduct(state, product) {
      state.product = product;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setTotalProductsCount(state, totalProducts) {
      state.pages = totalProducts;
    },
    updateCategoryProducts(state, categories) {
      let result = categories.map((value) => value[0].toUpperCase() + value.substr(1))
      state.categoryProducts = result;
    }
  },
});

export default store;
