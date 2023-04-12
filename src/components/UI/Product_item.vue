<template>
  <li
    class="item"
    v-for="product in $store.state.products"
    :key="product.id"
    @click="openPopupDetail(product.id)"
    v-on:submit.prevent
  >
    <div class="card">
      <div class="card__top">
        <a href="#" class="card__image">
          <img :src="product.thumbnail" :alt="product.title" />
        </a>
      </div>
      <div class="card__bottom">
        <div class="card__prices">
          <p>Стоимость:</p>
          <div class="card__price card__price--common">{{ product.price }}</div>
        </div>
        <a href="#" class="card__title"
          >{{ product.title }} <br />
          {{ product.description }}</a
        >
        <button class="card__add">В корзину</button>
      </div>
    </div>
  </li>
  <PopupDetail v-show="isPopupOpen" @closePopup="closePopup" />
</template>

<script>
import PopupDetail from '@/components/UI/PopupDetail.vue';
export default {
  name: 'Product_item',
  data() {
    return {
      isPopupOpen: false,
    };
  },
  components: {
    PopupDetail,
  },
  methods: {
    openPopupDetail(id) {
      this.isPopupOpen = true;
      this.$store.dispatch('findOneProduct', id);
    },
    closePopup() {
      this.isPopupOpen = false;
    },
  },
};
</script>

<style scoped>
.item {
  list-style: none;
}
.card {
  width: 215px;
  min-height: 350px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  transition: 0.2s;
  position: relative;
}

.card:hover {
  box-shadow: 4px 8px 16px rgba(48, 44, 42, 0.2);
}

.card__top {
  flex: 0 0 220px;
  position: relative;
  overflow: hidden;
}

.card__image {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card__image > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;
}

.card__image:hover > img {
  transform: scale(1.1);
}

.card__bottom {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 10px;
}

.card__prices {
  display: flex;
  margin-bottom: 10px;
  flex: 0 0 50%;
  align-items: center;
  justify-content: space-between;
}

.card__price::after {
  content: '₽';
  margin-left: 4px;
  position: relative;
}

.card__price--common {
  font-weight: 400;
  font-size: 17px;
  color: #606060;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
}

.card__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 17px;
  line-height: 150%;
  color: #414141;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 100px;
  text-decoration: none;
}

.card__title:hover {
  color: #ff6633;
}

.card__add {
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #70c05b;
  padding: 10px;
  text-align: center;
  border: 1px solid #70c05b;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: auto;
}

.card__add:hover {
  border: 1px solid #ff6633;
  background-color: #ff6633;
  color: #fff;
}
</style>
