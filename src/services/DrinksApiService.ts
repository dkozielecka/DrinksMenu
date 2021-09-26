import axios from 'axios';

import { Drink } from 'models/Drink.model';
import { DrinkDetails } from 'models/DrinkDetails.model';

const url: string = `https://www.thecocktaildb.com/api/json/v1/1/`;

export const DrinksApiService = {
    getDrinks: (): Promise<Drink[]> =>
        axios.get(`${url}filter.php?c=Cocktail`).then(({ data }) => data.drinks),

    getDrinkDetails: (drinkId: string): Promise<DrinkDetails> =>
        axios.get(`${url}lookup.php?i=${drinkId}`).then(
            ({ data }) =>
                new DrinkDetails({
                    ...data.drinks[0],
                    ingredients: Object.values(
                        Object.fromEntries(
                            Object.entries(data.drinks[0]).filter(([key, value]) =>
                                key.includes('Ingredient')
                            )
                        )
                    ).filter(ingredient => ingredient),
                })
        ),
};
