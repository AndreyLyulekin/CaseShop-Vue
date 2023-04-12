<template>
  <div class="content__main">
    <p class="fetchFailed" v-if="!$store.state.products.length && !$store.state.isLoading">
      Нет подходящих запросу поиска товаров
    </p>
    <div>
      <PaginationButtons v-if="!!$store.state.products.length" />
    </div>
    <ul class="items_list" v-if="!!$store.state.products.length">
      <Product_item />
    </ul>
  </div>
</template>

<script>
import Product_item from '@/components/UI/Product_item.vue';
import PaginationButtons from '@/components/UI/PaginationButtons.vue';

export default {
  name: 'ContentMain',
  components: {
    Product_item,
    PaginationButtons,
  },
};
</script>

<style scoped>
.fetchFailed {
  font-size: 30px;
  position: absolute;
  top: 40%;
  left: 38%;
}
.items_list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1250px;
  justify-content: center;
  justify-items: center;
  column-gap: 3%;
  row-gap: 15px;
  margin: 0 auto;
  padding: 15px;
}
.content__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 1550px) {
  .items_list {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media only screen and (max-width: 1480px) {
  .items_list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 1100px) {
  .items_list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 920px) {
  .items_list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
