<template>
    <div class="popup-overlay" @click="closePopup" ref="overlay">
        <div class="popup">
            <h2 class="popup__header">{{ $store.state.product.title }}</h2>
            <div class="middle_card">
                <img :src=$store.state.product.thumbnail :alt=$store.state.product.title>
                <div class="card__description">
                    <p class="popup__description">{{$store.state.product.description}}</p>
                    <p class="popup__description"> Рейтинг: {{$store.state.product.rating}}</p>
                </div>
            </div>
            <div>
                <p class="popup__description"> Цена: {{$store.state.product.price}} руб. 00 коп.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'PopupDetail',
    methods: {
    closePopup (evt) {
        if (evt.target === this.$refs.overlay)
        this.$emit('closePopup')
    }
  }
        
    }
</script>

<style scoped>
    .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .popup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
    }
    
    @media only screen and (max-width: 1200px) {
    .popup {
    max-width: 320px;
        }
    }
    .popup__header {
        font-size: 40px;
    }
    .middle_card {
        display: flex;
    }
    
    @media only screen and (max-width: 1200px) {
    .middle_card {
    flex-direction: column;
    max-width: 320px;
        }
    }
    .popup__description {
        padding: 20px;
        font-size: 25px;
        max-width: 500px;
    }
</style>