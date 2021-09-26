import * as React from 'react';
import { useState, useEffect } from 'react';

import { DrinksApiService } from 'services/DrinksApiService';
import { Drink } from 'models/Drink.model';
import DrinkCard from 'components/DrinkCard/DrinkCard';

const DrinkCards = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        DrinksApiService.getDrinks()
            .then((drinks: Drink[]) => setDrinks(drinks))
            .catch(error => console.error(error));
    });

    return (
        <div>
            {drinks.length ? (
                drinks.map((drink, i) => (
                    <DrinkCard key={i} name={drink.strDrink} img={drink.strDrinkThumb}></DrinkCard>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default DrinkCards;
