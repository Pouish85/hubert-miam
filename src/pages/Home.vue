<template>
    <div class="home flex flex-col w-full items-center">
        <Header
            :allRestaurants="allRestaurants"
            :allRestaurantTypes="allRestaurantTypes"
        />
        <RestaurantRow
            v-for="(row, index) in restaurantData"
            :key="index"
            :threeRestaurants="row"
        />
    </div>
</template>

<script>
import bdd from "../bdd.js";
import { onMounted, ref } from "vue";
import RestaurantRow from "@/components/RestaurantRow.vue";
import Header from "@/components/Header.vue";
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
                restaurantType
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
                this.restaurantType = restaurantType;
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
                    restaurant.restaurantType
                );

                allRestaurants.push(newRestaurant);
                if (threeRestaurants.length === 2) {
                    threeRestaurants.push(newRestaurant);
                    restaurantData.value.push(threeRestaurants);
                    threeRestaurants = [];
                } else {
                    threeRestaurants.push(newRestaurant);
                }

                if (!allRestaurantTypes.includes(restaurant.restaurantType)) {
                    allRestaurantTypes.push(restaurant.restaurantType);
                }
            }
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
