<template>
    <div class="content__main">
        <ul class="items_list">
            <li class="item" v-for="product in $store.state.products" :key="product.id">
                <div class="card">
                    <div class="card__top">
                        <a href="#" class="card__image">
                            <img :src=product.thumbnail :alt=product.title>
                        </a>
                    </div>
                    <div class="card__bottom">
                        <div class="card__prices">
                            <div class="card__price card__price--discount">135 000</div>
                            <div class="card__price card__price--common">{{ product.price }}</div>
                        </div>
                        <a href="#" class="card__title">{{ product.description }}</a>
                        <button class="card__add">В корзину</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
  


<script>
export default {
    name: 'Content__Main'
}
</script>


  
<style scoped>

.items_list{
    display: grid;
    grid-template-columns: repeat(auto-fill, 225px);
  width: 100%;
  max-width: 1285px;
  justify-content: center;
  justify-items: center;
  column-gap: 30px;
  row-gap: 40px;
  margin: 0 auto;

}
.item {
    list-style: none;
}
.card {
  width: 225px;
  min-height: 350px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  transition: 0.2s;
  position: relative;
}

.card:hover {
  box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
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
}

.card__price::after {
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.card__price--discount {
  font-weight: 700;
  font-size: 19px;
  color: #414141;
  display: flex;
  flex-wrap: wrap-reverse;
}

.card__price--discount::before {
  content: "Со скидкой";
  font-weight: 400;
  font-size: 13px;
  color: #bfbfbf;
}

.card__price--common {
  font-weight: 400;
  font-size: 17px;
  color: #606060;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
}

.card__price--common::before {
  content: "Обычная";
  font-weight: 400;
  font-size: 13px;
  color: #bfbfbf;
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
