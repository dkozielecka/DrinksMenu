import { Drink, DrinkDetails } from 'models';

export interface DrinksApiServiceModel {
    getDrinks: () => Promise<Drink[]>;
    getDrinkDetails: (drinkId: string) => Promise<DrinkDetails>;
}
