<template>
    <div class="home">
        <RestaurantRowVue />

    </div>
</template>

<script>
    import bdd from '../bdd.js';
    import RestaurantRowVue from '@/components/RestaurantRow.vue';
    export default {
        name: 'HomePage',
        components: {
            RestaurantRowVue
        },
        setup() {
            console.log(bdd);
            class Restaurant {
                constructor(restaurantName, restaurantImage, restaurantNote, deliveryTimeMin, deliveryTimeMax, priceRate) {
                    this.restaurantName = restaurantName;
                    this.restaurantImage = restaurantImage;
                    this.restaurantNote = restaurantNote;
                    this.deliveryTimeMin = deliveryTimeMin;
                    this.deliveryTimeMax = deliveryTimeMax;
                    this.priceRate = priceRate;
                }
            }
            var resto = new Restaurant('McDonalds', 'https://www.mcdonalds.fr/sites/default/files/2020-06/BigMac_0.png', 4.5, 20, 30, 1);
            console.log(resto);
        }
    }
</script>

<style lang="scss" scoped>

</style>