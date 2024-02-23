<template>
    <div class="home flex flex-col w-full items-center">
        <Header :allRestaurants="allRestaurants"/>
        <RestaurantRow v-for="(row, index) in restaurantData" :key="index" :threeRestaurants="row"/>
    </div>
</template>

<script>
    import bdd from '../bdd.js';
    import { onMounted, ref } from 'vue';
    import RestaurantRow from '@/components/RestaurantRow.vue';
    import Header from '@/components/Header.vue';
    export default {
        name: 'HomePage',
        components: {
            RestaurantRow,
            Header
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
                    this.restaurantAddressName = restaurantName.replaceAll(' ', '').toLowerCase();
                }
            }
            let restaurantData = ref([]);
            let allRestaurants = [];
            const makeRestaurant = () => {

                let threeRestaurants = [];
                for (const restaurant of bdd) {
                    const newRestaurant = new Restaurant(restaurant.restaurantName, restaurant.restaurantImage, restaurant.restaurantNote, restaurant.deliveryTimeMin, restaurant.deliveryTimeMax, restaurant.priceRate);

                    allRestaurants.push(newRestaurant);
                    if (threeRestaurants.length === 2) {
                        threeRestaurants.push(newRestaurant);
                        restaurantData.value.push(threeRestaurants);
                        threeRestaurants = [];
                    } else {
                        threeRestaurants.push(newRestaurant);
                    }
                }
            }

            // let user_search = ref('');
            // let searchResult = ref([]);
            // watch(user_search, newValue => {
            //     if (newValue.length >= 3) {
            //         let regex = new RegExp(newValue.toLowerCase());
            //         let search = allRestaurants.filter(restaurant => regex.test(restaurant.restaurantName.toLowerCase()));
            //         searchResult.value = search;
            //     } else {
            //         searchResult.value = [];
            //     }
            // })
           

            onMounted(makeRestaurant)
            
            return {
                restaurantData,
                // user_search,
                // searchResult,
                allRestaurants
            }
        }
    }
</script>

<style>

</style>