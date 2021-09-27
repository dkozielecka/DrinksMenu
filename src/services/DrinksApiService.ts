import axios from 'axios';

import { DrinksDataService } from 'services';
import { Drink, DrinkDetails, DrinksApiServiceModel } from 'models';

const url: string = `https://www.thecocktaildb.com/api/json/v1/1/`;

export const DrinksApiService: DrinksApiServiceModel = {
    getDrinks: (): Promise<Drink[]> =>
        axios.get(`${url}filter.php?c=Cocktail`).then(({ data }) => data.drinks),

    getDrinkDetails: (drinkId: string): Promise<DrinkDetails> =>
        axios.get(`${url}lookup.php?i=${drinkId}`).then(
            ({ data }) =>
                new DrinkDetails({
                    ...data.drinks[0],
                    ingredients: DrinksDataService.prepareIngredientsArray(data.drinks[0]),
                })
        ),
};
