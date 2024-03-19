<template>
    <div class="restaurant--row flex flex-col w-full items-center">
        <h2
            v-if="typePage !== ''"
            class="title w-[80%] text-left text-xl font-bold text-shadow shadow-gray-400 p-3"
        >
            Nos restaurants {{ typePage }}
        </h2>
        <h2
            v-else
            class="title w-[80%] text-left text-xl font-bold text-shadow shadow-gray-400 p-3"
        >
            Nos restaurants
        </h2>
        <div class="wrapper flex w-[80%] justify-center space-x-2">
            <RouterLink
                v-for="(card, index) in threeRestaurants"
                :key="index"
                :to="{
                    name: 'Restaurant',
                    params: { restaurantName: card.restaurantName },
                }"
                class="w-[32%]"
            >
                <RestaurantCard :restaurantInfo="card" />
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import RestaurantCard from "./RestaurantCard.vue";
export default {
    name: "RestaurantRow",
    components: {
        RestaurantCard,
        RouterLink,
    },
    props: {
        threeRestaurants: Array,
        typePage: {
            type: String,
            default: "",
        },
    },
};
</script>

<style></style>
