import { createStore } from "vuex"


const store = createStore({
    state: {
        products: []
      }
    ,
    actions: {
      async fetchProducts(ctx) {
        const res = await fetch(
          'https://dummyjson.com/products'
          );
          const products = await res.json();

          ctx.commit('updateProducts', products)
        }
      },
      mutations: {
        updateProducts(state, products) {
          state.products = products.products
        }
      }
    })

  export default store;