<template>
    <div class="content__main">
        <!-- <div>
            <img src="../../public/advertise.jpg">
        </div> -->
        <div class="items_list">
            <div class="item">
                <h2>{{ items }}</h2>
            </div>
        </div>
    </div>
</template>
  


<script>
  
export default {
    name: 'Content__Main',
    props: {
        items: {
            type: Object
        }
    },
    data() {
        return {
           
        }
     }, 
//     mounted () {fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log);
//   }
}
</script>


  
<style scoped>
    .content__main {
    display: flex;
    flex-direction: column;
    }
    img {
    max-width: 1270px;
    }
</style>
