<template>
    <div
        class="restaurant--card h-[30vh] border rounded-xl flex flex-col items-center justify-center shadow-gray-400 shadow-md hover:shadow-blue-400 transition duration-500 hover:border-blue-200"
    >
        <div
            class="restaurant--image flex h-[70%] w-full bg-cover bg-center rounded-t-xl shadow-gray-500 shadow-md"
            :style="changeBackground"
        ></div>
        <div class="restaurant--info h-1/3 w-full p-2">
            <div class="info-top flex w-full">
                <p class="name flex-1 text-shadow shadow-gray-400">
                    {{ restaurantInfo.restaurantName }}
                </p>
                <p
                    class="note min-w-[8%] bg-green-700 rounded-full text-center shadow-md shadow-green-700 text-gray-300"
                >
                    {{ restaurantInfo.restaurantNote }}
                </p>
            </div>
            <div class="info-bottom flex w-full pt-2 space-x-4 text-sm">
                <p class="delivery-time text-shadow shadow-gray-400 text-xs">
                    <font-awesome-icon icon="bicycle" /><span
                        class="text-sm pl-1"
                        >{{ restaurantInfo.deliveryTimeMin }} -
                        {{ restaurantInfo.deliveryTimeMax }} min</span
                    >
                </p>
                <p
                    class="restaurant-price-tag text-yellow-500 text-shadow-sm shadow-yellow-500"
                >
                    {{ "€".repeat(restaurantInfo.priceRate) }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
export default {
    name: "RestaurantCard",
    props: {
        restaurantInfo: Object,
    },
    setup(props) {
        const changeBackground = computed(() => {
            return {
                backgroundImage: `url(${props.restaurantInfo.restaurantImage})`,
            };
        });
        return {
            changeBackground,
        };
    },
};
</script>

<style></style>
