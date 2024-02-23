<template>
    <div class="home flex flex-col w-full items-center">
        <div class="header h-24 w-[80%] flex justify-center items-center space-x-6 relative">
            <h1 class="text-4xl text-left text-green-800 text-shadow-lg shadow-green-800 max-w-4/12 absolute left-4">Hubert-Miam</h1>
            <div class="wrapper--input relative w-6/12 flex flex-col">
                <input v-model="user_search" type="text" name="" id="" class="w-full rounded-lg bg-gray-100 pl-2 text-sm h-8" placeholder="Rechercher un restaurant">
                <div class="searchResultPopup absolute w-full bg-gray-200 opacity-90 top-full border border-gray-100 rounded-lg ">
                    <div v-for="(restaurant, i) in searchResult" :key="i" class="resultContainer flex p-2 items-center hover:bg-slate-400">
                        <div class="resultContainerImage">
                            <img :src="restaurant.restaurantImage" :alt="restaurant.restaurantName" class="rounded-full h-10 w-10">
                        </div>
                        <div class="resultContainerName pl-4">
                            <p>{{ restaurant.restaurantName }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="bg-green-800 text-white rounded-lg p-2 w-2/12 absolute right-4 shadow-green-800 hover:shadow-lg">Login</button>
        </div>
        <RestaurantRow v-for="(row, index) in restaurantData" :key="index" :threeRestaurants="row"/>
    </div>
</template>

<script>
    import bdd from '../bdd.js';
    import { onMounted, ref, watch } from 'vue';
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
                console.log("allRestaurants: ", allRestaurants);
            }

            let user_search = ref('');
            let searchResult = ref([]);
            watch(user_search, newValue => {
                if (newValue.length >= 3) {
                    let regex = new RegExp(newValue.toLowerCase());
                    let search = allRestaurants.filter(restaurant => regex.test(restaurant.restaurantName.toLowerCase()));
                    searchResult.value = search;
                } else {
                    searchResult.value = [];
                }
            })
           

            onMounted(makeRestaurant)
            
            return {
                restaurantData,
                user_search,
                searchResult
            }
        }
    }
</script>

<style>

</style>