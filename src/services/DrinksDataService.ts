import { Drink, DrinksDataServiceModel } from 'models';

export const DrinksDataService: DrinksDataServiceModel = {
    prepareIngredientsArray: (drink: Object): string[] => {
        return Object.values(
            Object.fromEntries(
                Object.entries(drink).filter(([key, value]) => key.includes('Ingredient'))
            )
        ).filter(ingredient => ingredient);
    },

    filterDrinks: (drinks: Drink[], query: string): Drink[] => {
        return drinks.filter(drink => {
            if (query === '') {
                return drink;
            } else if (drink.strDrink.toLowerCase().includes(query.toLowerCase())) {
                return drink;
            }
        });
    },
};
