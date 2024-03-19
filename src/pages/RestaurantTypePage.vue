<template>
    <div class="restaurantTypePage flex flex-col w-full items-center">
        <Header :typeBar="false" />
        <div class="restaurantPage flex flex-col w-full items-center">
            <img
                :src="restaurantFoodType.countryBg"
                :alt="restaurantFoodType.countryName"
                class="h-32 w-full object-cover overflow-hidden"
            />
            <RestaurantRow
                v-for="(row, index) in foodTypedRestaurantData"
                :key="index"
                :threeRestaurants="row"
                :typePage="restaurantFoodType.countryTypeName"
                :index="index"
            />
        </div>
    </div>
</template>

<script>
import countriesDb from "../countriesDb";
import { useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import RestaurantRow from "@/components/RestaurantRow.vue";
import bdd from "../bdd.js";
import { onMounted, ref } from "vue";
export default {
    name: "RestaurantTypePage",
    components: {
        Header,
        RestaurantRow,
    },
    props: {
        allRestaurantTypes: Array,
    },
    setup() {
        const route = useRoute();

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

        let foodTypedRestaurantData = ref([]);
        let allRestaurants = [];
        const makeRestaurant = () => {
            let threeRestaurants = [];
            let allRestaurantTypes = [];
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
                if (
                    restaurant.restaurantFoodType === route.params.countryName
                ) {
                    if (threeRestaurants.length === 2) {
                        threeRestaurants.push(newRestaurant);
                        foodTypedRestaurantData.value.push(threeRestaurants);
                        threeRestaurants = [];
                    } else {
                        threeRestaurants.push(newRestaurant);
                    }

                    if (
                        !allRestaurantTypes.includes(
                            restaurant.restaurantFoodType
                        )
                    ) {
                        allRestaurantTypes.push(restaurant.restaurantFoodType);
                    }
                }
            }
            foodTypedRestaurantData.value.push(threeRestaurants);
        };

        const restaurantFoodType = countriesDb.find(
            (restaurantFoodType) =>
                restaurantFoodType.countryName === route.params.countryName
        );

        onMounted(makeRestaurant);
        return {
            restaurantFoodType,
            foodTypedRestaurantData,
        };
    },
};
</script>

<style></style>
