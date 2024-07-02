import {Field, ObjectType, ID} from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Restaurant } from "./Restaurant";



@ObjectType()
@Entity()
export class Country extends BaseEntity{
    @Field( () => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    countryName: string;

    @Field()
    @Column()
    countryFlag: string;

    @Field()
    @Column()
    countryBg: string;

    @Field()
    @Column()
    countryTypeName: string;

    @Field(() => [Restaurant])
    @OneToMany(() => Restaurant, (restaurant) => restaurant.restaurantFoodType)
    restaurants: Restaurant[];
}
