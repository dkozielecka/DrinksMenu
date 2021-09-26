import axios from 'axios';

import { Drink } from 'models/Drink.model';

const url: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;

export const DrinksApiService = {
    getDrinks: (): Promise<Drink[]> => axios.get(url).then(({ data }) => data.drinks),
};
