<template>
    <div class="flex space-x-5 justify-center w-[80%] border rounded-lg">
        <!--<div
            v-for="(typeIcon, index) in allRestaurantTypes"
            :key="index"
            class="h-14 w-14 rounded-full border flex justify-center items-center my-2"
        >
            {{ typeIcon }}
        </div>-->
        <div
            v-for="(country, index) in countriesDB"
            :key="index"
            class="h-14 w-14 rounded-full border flex justify-center items-center my-2 overflow-hidden"
        >
            <img
                :src="country.countryFlag"
                :alt="country.countryName"
                :title="country.countryName"
                class="object-cover h-14"
            />
        </div>
    </div>
</template>

<script>
import countriesDB from "../countriesDb.js";
export default {
    name: "RestaurantTypeBar",
    components: {},
    props: {
        allRestaurantTypes: Array,
    },
    setup(props) {
        // console.log("allRestaurantTypes: ", props.allRestaurantTypes);
        // console.log("countriesDB: ", countriesDB);
        for (const type in props.allRestaurantTypes) {
            console.log(type);
        }

        return {
            countriesDB,
        };
    },
};
</script>

<style lang="scss" scoped></style>
