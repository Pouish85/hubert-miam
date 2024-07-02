import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Country } from '../entities/Country';

@Resolver(Country)

export default class CountryResolver {
    constructor() {}
    // All countries Query
    @Query( () => [Country])
    async countries() {
        return await Country.find({
            relations: { restaurants: true },
        });
    }

    // New country Mutation
    @Mutation( () => Country)
   async createCountry(
      @Arg("countryTypeName") countryTypeName: string,
      @Arg("countryBg") countryBg: string,
      @Arg("countryFlag") countryFlag: string,
      @Arg("countryName") countryName: string
    ) {
      const country = Country.create({
        countryName,
        countryFlag,
        countryBg,
        countryTypeName
      });
      return Country.save(country);
    }

    // Update country Mutation
    @Mutation(() => Country)
    async updateCountry(
        @Arg("id") id: number,
        @Arg("countryName") countryName: string,
        @Arg("countryFlag") countryFlag: string,
        @Arg("countryBg") countryBg: string,
        @Arg("countryTypeName") countryTypeName: string
    ) {
        const country = await Country.findOne({ where: { id } });
        if (!country) {
            throw new Error("Country not found!");
        }
        country.countryName = countryName;
        country.countryFlag = countryFlag;
        country.countryBg = countryBg;
        country.countryTypeName = countryTypeName;
        return Country.save(country);
    }

    // Delete country Mutation
    @Mutation(() => Boolean)
    async deleteCountry(@Arg("id") id: number) {
        const country = await Country.findOne({ where: { id } });
        if (!country) {
            throw new Error("Country not found");
        }
        await Country.remove(country);
        return true;
    }
}

