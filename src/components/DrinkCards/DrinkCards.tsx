import * as React from 'react';
import { useState, useEffect, ReactElement, FC } from 'react';

import { InputBase, TextField } from '@mui/material';

import styled from 'styled-components';

import DrinkCard from 'components/DrinkCard/DrinkCard';
import { Drink } from 'models/Drink.model';
import { DrinksApiService } from 'services/DrinksApiService';
import { Cards } from 'views/Cards/Cards';
import { DrinkDetails } from 'models/DrinkDetails.model';
import { CardDetails, CardPhoto } from 'views/Cards/Card';
import { DialogDrink } from 'components/DrinkDialog/DrinkDialog';
import { Search, Searchbar } from 'views/Searchbar/Searchbar';

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DrinkCards: FC<{}> = (): ReactElement => {
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
    });

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
                    drinks
                        .filter(drink => {
                            if (query === '') {
                                return drink;
                            } else if (drink.strDrink.toLowerCase().includes(query.toLowerCase())) {
                                return drink;
                            }
                        })
                        .map((drink: Drink, i: number) => (
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

export default DrinkCards;
