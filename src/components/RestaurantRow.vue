<template>
    <div class="restaurant--row flex flex-col w-full items-center">
        <h2 class="title w-[80%] text-left text-xl font-bold text-shadow shadow-gray-400 p-3">
            Nos restaurants
        </h2>
        <div class="wrapper flex w-[80%] justify-center space-x-2">
            <RestaurantCard v-for="(card, index) in 3" :key="index"/>
        </div>
    </div>
</template>

<script>
    import RestaurantCard from './RestaurantCard.vue';
    export default {
        name: 'RestaurantRow',
        components: {
            RestaurantCard
        }
        
    }   

</script>

<style lang="scss" scoped>

</style>