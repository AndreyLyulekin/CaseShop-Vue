<template>
    <div class="content">
        <ContentMenu />
        <ContentMain />
        <WhileLoading v-if="$store.state.isLoading"/>
    </div>
</template>
  


<script>
import ContentMenu from '@/components/ContentMenu.vue'
import ContentMain from '@/components/ContentMain.vue'
import WhileLoading from '@/components/UI/WhileLoading.vue'

export default {
    name: 'ContentSection',
    components: {
    ContentMenu,
    ContentMain,
    WhileLoading,
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
@media only screen and (max-width: 1530px) {
  .content {
    max-width: 80%;
  }
}
</style>