<template>
    <div
        class="header h-24 w-[80%] flex justify-center items-center space-x-6 relative"
    >
        <RouterLink
            to="/"
            class="text-4xl text-left text-green-800 text-shadow-lg shadow-green-800 max-w-4/12 absolute left-4"
            >Hubert-Miam</RouterLink
        >
        <div
            v-if="showInput"
            class="wrapper--input relative w-6/12 flex flex-col"
        >
            <input
                v-model="user_search"
                type="text"
                name=""
                id=""
                class="w-full rounded-lg bg-gray-100 pl-2 text-sm h-8"
                placeholder="Rechercher un restaurant"
            />
            <div
                class="searchResultPopup absolute w-full bg-gray-200 opacity-90 top-full border border-gray-100 rounded-lg"
            >
                <RouterLink
                    v-for="(restaurant, i) in searchResult"
                    :key="i"
                    :to="{
                        name: 'Restaurant',
                        params: { restaurantName: restaurant.restaurantName },
                    }"
                >
                    <div
                        class="resultContainer flex p-2 items-center hover:bg-slate-400"
                    >
                        <div class="resultContainerImage">
                            <img
                                :src="restaurant.restaurantImage"
                                :alt="restaurant.restaurantName"
                                class="rounded-full h-10 w-10"
                            />
                        </div>
                        <div class="resultContainerName pl-4">
                            <p>{{ restaurant.restaurantName }}</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
        <button
            class="bg-green-800 text-white rounded-lg p-2 w-2/12 absolute right-4 shadow-green-800 hover:shadow-lg"
        >
            Login
        </button>
    </div>
    <RestaurantTypeBar :allRestaurantTypes="allRestaurantTypes" />
</template>

<script>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import RestaurantTypeBar from "./RestaurantTypeBar.vue";
export default {
    name: "HeaderSection",
    components: {
        RestaurantTypeBar,
        RouterLink,
    },
    props: {
        allRestaurants: Array,
        showInput: {
            type: Boolean,
            default: true,
        },
        allRestaurantTypes: Array,
    },
    setup(props) {
        let user_search = ref("");
        let searchResult = ref([]);
        watch(user_search, (newValue) => {
            console.log("newValue", newValue);
            if (newValue.length >= 3) {
                let regex = new RegExp(newValue.toLowerCase());
                let search = props.allRestaurants.filter((restaurant) =>
                    regex.test(restaurant.restaurantName.toLowerCase())
                );
                searchResult.value = search;
            } else {
                searchResult.value = [];
            }
        });

        return {
            user_search,
            searchResult,
        };
    },
    watch: {
        user_search: function (val) {
            this.$emit("search", val);
        },
    },
};
</script>

<style lang="scss" scoped></style>
