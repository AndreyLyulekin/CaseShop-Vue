<template>
    <div class="content__menu">
        <h3>Каталог</h3>
            <ul>
                <li><a href="">iPhone</a></li>
                <li><a href="">Apple Watch</a></li>
                <li><a href="">iPad</a></li>
                <li><a href="">MacBook</a></li>
                <li><a href="">Dyson</a></li>
                <li><a href="">Наушники и колонки</a></li>
                <li><a href="">Аксессуары</a></li>
                <li><a href="">Красота и здоровье</a></li>
                <li><a href="">Квадрокоптеры</a></li>
            </ul>
    </div>
</template>
  


<script>
  
export default {
    name: 'ContentMenu',
    data() {
        return {
           
        }
     }
  }
</script>


  
<style scoped>
    ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    }
    li {
    height: 35px;
    margin-bottom: 12px;
    }
    a {
    text-decoration: none;
    font-size: 20px;
    }
    h3 {
    font-size: 30px;
    }
    .content__menu {
    margin-right: 30px;
    min-width: 220px;
    }
    @media only screen and (max-width: 1530px) {
    .content__menu {
    display: none;
        }
    }
</style>