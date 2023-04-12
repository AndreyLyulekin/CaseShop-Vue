<template>
  <div class="main">
    <select v-model="selectedLimit">
      <option type="submit" v-for="currentLimit in this.limits" :key="currentLimit" :value="currentLimit">
        {{ currentLimit }}
      </option>
    </select>

    <button v-for="currentPage in this.skip" :key="currentPage" @click="setPage(currentPage)">{{ currentPage }}</button>
  </div>
</template>

<script>
export default {
  name: 'PaginationButtons',
  data() {
    return {
      selectedLimit: 10,
      limits: [10, 25],
      skip: 10,
      selectedPage: 10,
    };
  },
  methods: {
    setPage(currentPage) {
      const skipPagesCount = currentPage * this.selectedLimit - this.selectedLimit;
      this.$store.dispatch('fetchProducts', { limit: this.selectedLimit, skip: skipPagesCount });
    },
  },
  watch: {
    selectedLimit(value) {
      this.$store.dispatch('fetchProducts', { limit: value });
      this.skip = this.$store.state.pages / this.selectedLimit;
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  margin: 10px auto;
  gap: 5px;
}
@media only screen and (max-width: 430px) {
  .main {
    display: none;
  }
}
</style>
