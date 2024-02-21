<template>
    <div class="home">
        <RestaurantRow v-for="(row, index) in restaurantData" :key="index" :threeRestaurants="row"/>
    </div>
</template>

<script>
    import bdd from '../bdd.js';
    import { onMounted, ref } from 'vue';
    import RestaurantRow from '@/components/RestaurantRow.vue';
    export default {
        name: 'HomePage',
        components: {
            RestaurantRow
        },
        setup() {
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
            let restaurantData = ref([]);

            const makeRestaurant = () => {

                let threeRestaurants = [];
                for (const restaurant of bdd) {
                    const newRestaurant = new Restaurant(restaurant.restaurantName, restaurant.restaurantImage, restaurant.restaurantNote, restaurant.deliveryTimeMin, restaurant.deliveryTimeMax, restaurant.priceRate);

                    if (threeRestaurants.length === 2) {
                        threeRestaurants.push(newRestaurant);
                        restaurantData.value.push(threeRestaurants);
                        threeRestaurants = [];
                    } else {
                        threeRestaurants.push(newRestaurant);
                    }
                }
            }
            onMounted(makeRestaurant)
            
            return {
                restaurantData
            }
        }
    }
</script>

<style>

</style>