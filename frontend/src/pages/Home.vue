<template>
    <div class="home flex flex-col w-full items-center">
        <Header
            :restaurantData="restaurantData"
            :allRestaurantTypes="allRestaurantTypes"
            :allRestaurants="allRestaurants"
        />
        <RestaurantRow
            v-for="(row, index) in restaurantData"
            :key="index"
            :threeRestaurants="row"
            :index="index"
        />
    </div>
</template>

<script>
import bdd from "../bdd.js";
import { onMounted, ref } from "vue";
import RestaurantRow from "../components/RestaurantRow.vue";
import Header from "../components/Header.vue";
export default {
    name: "HomePage",
    components: {
        RestaurantRow,
        Header,
    },
    setup() {
        class Restaurant {
            constructor(
                restaurantName,
                restaurantImage,
                restaurantNote,
                deliveryTimeMin,
                deliveryTimeMax,
                priceRate,
                restaurantFoodType
            ) {
                this.restaurantName = restaurantName;
                this.restaurantImage = restaurantImage;
                this.restaurantNote = restaurantNote;
                this.deliveryTimeMin = deliveryTimeMin;
                this.deliveryTimeMax = deliveryTimeMax;
                this.priceRate = priceRate;
                this.restaurantAddressName = restaurantName
                    .replaceAll(" ", "")
                    .toLowerCase();
                this.restaurantFoodType = restaurantFoodType;
            }
        }
        let restaurantData = ref([]);
        let allRestaurants = [];
        let allRestaurantTypes = [];
        const makeRestaurant = () => {
            let threeRestaurants = [];
            for (const restaurant of bdd) {
                const newRestaurant = new Restaurant(
                    restaurant.restaurantName,
                    restaurant.restaurantImage,
                    restaurant.restaurantNote,
                    restaurant.deliveryTimeMin,
                    restaurant.deliveryTimeMax,
                    restaurant.priceRate,
                    restaurant.restaurantFoodType
                );

                allRestaurants.push(newRestaurant);
                if (threeRestaurants.length === 2) {
                    threeRestaurants.push(newRestaurant);
                    restaurantData.value.push(threeRestaurants);
                    threeRestaurants = [];
                } else {
                    threeRestaurants.push(newRestaurant);
                }

                if (
                    !allRestaurantTypes.includes(restaurant.restaurantFoodType)
                ) {
                    allRestaurantTypes.push(restaurant.restaurantFoodType);
                }
            }
            restaurantData.value.push(threeRestaurants);
        };

        onMounted(makeRestaurant);

        return {
            restaurantData,
            allRestaurants,
            allRestaurantTypes,
        };
    },
};
</script>

<style></style>
