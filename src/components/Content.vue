<template>
    <div class="content">
        <Content__Menu />
        <Content__Main />
    </div>
</template>
  


<script>
import Content__Menu from '@/components/Content__Menu.vue'
import Content__Main from '@/components/Content__Main.vue'

export default {
    name: 'ContentSection',
    data() {
        return {
           
        }
     },
  components: {
    Content__Menu,
    Content__Main,
  }
  }
</script>


  
<style scoped>
.content {
    display: flex;
    flex-direction: row;
    max-width: 1500px;
    margin: auto;
}


</style>



<!-- <div class="content__main">
            <div class="content__aadvertise">
                
            </div>
            <div class="content__items">

            </div>
        </div> -->