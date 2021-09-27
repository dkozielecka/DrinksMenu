import React, { useState, useEffect, ReactElement, FC } from 'react';

import styled from 'styled-components';

import { Drink, DrinkDetails } from 'models';
import { Cards, Search, Searchbar } from 'views';
import { DrinksApiService, DrinksDataService } from 'services';
import { DialogDrink, DrinkCard } from 'components';

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DrinkCards: FC<{}> = (): ReactElement => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    const [selectedDrink, selectDrink] = useState<DrinkDetails>();
    useEffect(() => {
        if (selectedDrink) {
            setShowDialog(true);
        }
    }, [selectedDrink]);

    const [showDialog, setShowDialog] = useState<boolean>(false);
    const handleClose = () => setShowDialog(false);
    const handleOpen = (drinkId: string) =>
        DrinksApiService.getDrinkDetails(drinkId).then((drink: DrinkDetails) => selectDrink(drink));

    useEffect(() => {
        DrinksApiService.getDrinks()
            .then((drinks: Drink[]) => setDrinks(drinks))
            .catch(error => console.error(error));
    }, []);

    const [query, setQuery] = useState('');

    return (
        <Wrapper>
            <Searchbar>
                <Search
                    placeholder="Enter Drink Name"
                    onChange={event => setQuery(event.target.value)}
                />
            </Searchbar>
            {selectedDrink && (
                <DialogDrink
                    selectedDrink={selectedDrink}
                    showDialog={showDialog}
                    handleClose={handleClose}
                ></DialogDrink>
            )}
            <Cards>
                {drinks.length ? (
                    DrinksDataService.filterDrinks(drinks, query).map((drink: Drink, i: number) => (
                        <DrinkCard
                            key={i}
                            name={drink.strDrink}
                            img={drink.strDrinkThumb}
                            id={drink.idDrink}
                            openCard={drinkId => handleOpen(drinkId)}
                        ></DrinkCard>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </Cards>
        </Wrapper>
    );
};
