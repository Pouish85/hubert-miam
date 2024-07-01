<template>
    <div class="flex space-x-5 justify-center w-[80%] d">
        <RouterLink
            v-for="(country, index) in countriesDB"
            :key="index"
            :to="{
                name: 'RestaurantType',
                params: {
                    countryName: country.countryName,
                },
            }"
            class="h-14 w-14 rounded-full border flex justify-center items-center my-2 overflow-hidden"
        >
            <img
                :src="country.countryFlag"
                :alt="country.countryName"
                :title="country.countryName"
                class="object-cover h-14"
            />
        </RouterLink>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import countriesDB from "../countriesDb.js";
export default {
    name: "RestaurantTypeBar",
    components: { RouterLink },
    props: {
        allRestaurantTypes: Array,
        restaurantData: Array,
    },
    setup() {
        return {
            countriesDB,
        };
    },
};
</script>

<style lang="scss" scoped></style>
