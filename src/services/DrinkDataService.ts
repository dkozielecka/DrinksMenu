export const DrinkDataService = {
    prepareIngredientsArray: (drink: Object): string[] => {
        return Object.values(
            Object.fromEntries(
                Object.entries(drink).filter(([key, value]) => key.includes('Ingredient'))
            )
        ).filter(ingredient => ingredient);
    },
};
