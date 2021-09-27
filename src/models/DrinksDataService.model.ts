import { Drink } from 'models';

export interface DrinksDataServiceModel {
    prepareIngredientsArray: (drink: Object) => string[];
    filterDrinks: (drinks: Drink[], query: string) => Drink[];
}
