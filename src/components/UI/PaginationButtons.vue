<template>

<div class="main">
    <select v-model="selectedLimit">
    <option type="submit" 
        v-for='currentLimit in this.limits'
        :key="currentLimit" 
        :value="currentLimit"
        >{{currentLimit}}
    </option>
    </select>

    <button 
    v-for='currentPage in this.skip'
    :key="currentPage" 
    @click="setPage(currentPage)"
    >{{currentPage}}
    </button>
</div>


</template>

<script>
    export default {
    name: 'PaginationButtons',
    data () {
        return {
        selectedLimit: 10,
        limits: [10, 25],
        skip: 10,
        selectedPage: 10,
        }
    },
    methods: {
        setPage(currentPage) {
            this.selectedPage = currentPage * 10 - 10
            console.log(currentPage * 10 - 10)
            this.$store.dispatch('fetchProducts', this.selectedLimit, currentPage * 10 - 10)
            // пробовал сразу посылать запрос, тоже не работает
        }
    },
    watch: {
        selectedLimit (value) {
            this.$store.dispatch('fetchProducts', value)
            this.skip = this.$store.state.pages / this.selectedLimit
        },
        selectedPage (value) {
            this.$store.dispatch('fetchProducts', this.selectedLimit, value)
            // https://dummyjson.com/products?limit=10&skip=0 - тут скип всегда нуль
        }
    }
}
</script>

<style scoped>
    .main {
        display: flex;
        align-items: center;
        margin: 10px auto;
        gap: 5px;
    }
</style>