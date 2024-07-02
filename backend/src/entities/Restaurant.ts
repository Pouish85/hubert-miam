import { Field, ID, ObjectType } from 'type-graphql';
import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Country } from './Country';


@ObjectType()
@Entity()
export class Restaurant extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    restaurantName: string;

    @Field()
    @Column()
    restaurantImage: string;

    @Field()
    @Column()
    restaurantNote: number;

    @Field()
    @Column()
    deliveryTimeMin: number
    ;

    @Field()
    @Column()
    deliveryTimeMax: number;

    @Field()
    @Column()
    priceRate: number;

    @Field(() => Country, { nullable: true })
    @ManyToOne(() => Country, (country) => country.restaurants)
    restaurantFoodType: Country;
}
