import * as React from 'react';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import DrinkCard from 'components/DrinkCard/DrinkCard';
import { Drink } from 'models/Drink.model';
import { DrinksApiService } from 'services/DrinksApiService';
import { Cards } from 'views/Cards/Cards';

const DrinkCards = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        DrinksApiService.getDrinks()
            .then((drinks: Drink[]) => setDrinks(drinks))
            .catch(error => console.error(error));
    });

    return (
        <Cards>
            {drinks.length ? (
                drinks.map((drink, i) => (
                    <DrinkCard key={i} name={drink.strDrink} img={drink.strDrinkThumb}></DrinkCard>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </Cards>
    );
};

export default DrinkCards;
