import {Resolver, Query, Mutation, Arg} from 'type-graphql';
import { Restaurant } from '../entities/Restaurant';
import { Country} from '../entities/Country';
import DataSource from '../db';

@Resolver(Restaurant)
export default class RestaurantResolver {
    private restaurantRepository = DataSource.getRepository(Restaurant);
    // All restaurants Query
    @Query( () => [Restaurant])
    async restaurants() {
        return await this.restaurantRepository.find({
            relations: { restaurantFoodType: true },
        });
    }

    // New restaurant Mutation
    @Mutation( () => Restaurant)
    async createRestaurant(
        @Arg("restaurantName") restaurantName: string,
        @Arg("restaurantImage") restaurantImage: string,
        @Arg("restaurantNote") restaurantNote: number,
        @Arg("deliveryTimeMin") deliveryTimeMin: number,
        @Arg("deliveryTimeMax") deliveryTimeMax: number,
        @Arg("priceRate") priceRate: number,
        @Arg("restaurantFoodType") restaurantFoodTypeId: number
    ){
        const restaurantFoodType = await Country.findOne({ where: { id: restaurantFoodTypeId} });
        if (!restaurantFoodType) {
            throw new Error("Restaurant food type not found");
        }
        const restaurant = Restaurant.create({
            restaurantName,
            restaurantImage,
            restaurantNote,
            deliveryTimeMin,
            deliveryTimeMax,
            priceRate,
            restaurantFoodType
        });
        return this.restaurantRepository.save(restaurant);
        }

    // Update restaurant Mutation
    @Mutation(() => Restaurant)
    async updateRestaurant(
        @Arg("id") id: number,
        @Arg("restaurantName") restaurantName: string,
        @Arg("restaurantImage") restaurantImage: string,
        @Arg("restaurantNote") restaurantNote: number,
        @Arg("deliveryTimeMin") deliveryTimeMin: number,
        @Arg("deliveryTimeMax") deliveryTimeMax: number,
        @Arg("priceRate") priceRate: number,
        @Arg("restaurantFoodType") restaurantFoodTypeId: number
    ) {
        const restaurant = await Restaurant.findOne({ where: { id } });
        if (!restaurant) {
            throw new Error("Restaurant not found!");
        }
        const restaurantFoodType = await Country.findOne({ where: { id: restaurantFoodTypeId } });
        if (!restaurantFoodType) {
            throw new Error("Restaurant food type not found");
        }
        restaurant.restaurantName = restaurantName;
        restaurant.restaurantImage = restaurantImage;
        restaurant.restaurantNote = restaurantNote;
        restaurant.deliveryTimeMin = deliveryTimeMin;
        restaurant.deliveryTimeMax = deliveryTimeMax;
        restaurant.priceRate = priceRate;
        restaurant.restaurantFoodType = restaurantFoodType;
        return this.restaurantRepository.save(restaurant);
    }

    // Delete restaurant Mutation
    @Mutation(() => Boolean)
    async deleteRestaurant(@Arg("id") id: number) {
        const restaurant = await Restaurant.findOne({ where: { id } });
        if (!restaurant) {
            throw new Error("Restaurant not found");
        }
        await this.restaurantRepository.remove(restaurant);
        return true;
    }
}
