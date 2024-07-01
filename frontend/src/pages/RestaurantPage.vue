<template>
    <div class="restaurantPage flex flex-col w-full items-center">
        <Header :showInput="false" :typeBar="false" />
        <div class="w-full h-full flex flex-col justify-center items-center">
            <div
                class="top flex w-[80%] h-[15vh] relative items-center justify-center"
            >
                <h1 class="text-4xl py-4">{{ restaurant.restaurantName }}</h1>
                <h1 class="absolute right-5">
                    {{ restaurant.restaurantNote }}
                </h1>
            </div>
            <img
                :src="restaurant.restaurantImage"
                :alt="restaurant.restaurantName"
                class="w-[80%] h-[40vh] overflow-hidden object-cover"
            />
            <div class="deliveryInfo flex w-[80%] justify-end pt-4">
                <p>
                    Chez vous dans {{ restaurant.deliveryTimeMin }} à
                    {{ restaurant.deliveryTimeMax }} min
                </p>
            </div>
            <div class="pt-4">
                <h1 class="text-4xl">Les menus arrivent bientot</h1>
            </div>
        </div>
    </div>
</template>

<script>
import bdd from "../bdd.js";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
export default {
    name: "RestaurantPage",
    components: {
        Header,
    },
    setup() {
        const route = useRoute();
        const restaurant = bdd.find(
            (restaurant) =>
                restaurant.restaurantName === route.params.restaurantName
        );
        return {
            restaurant,
        };
    },
};
</script>

<style></style>
