<template>
    <div class="home flex flex-col w-full items-center">
        <div class="header h-24 w-[80%] flex justify-center items-center space-x-6 relative">
            <h1 class="text-4xl text-left text-green-800 text-shadow-lg shadow-green-800 max-w-4/12 absolute left-4">Hubert-Miam</h1>
            <input type="text" name="" id="" class="w-6/12 rounded-lg bg-gray-100 pl-2 text-sm h-8" placeholder="Rechercher un restaurant">
            <button class="bg-green-800 text-white rounded-lg p-2 w-2/12 absolute right-4 shadow-green-800 hover:shadow-lg">Login</button>
        </div>
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