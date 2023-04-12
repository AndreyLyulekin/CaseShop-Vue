<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content,
  },
  async mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style></style>
