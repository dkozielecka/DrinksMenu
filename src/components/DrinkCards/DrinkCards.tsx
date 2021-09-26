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

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Topbar = styled.div`
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: center;

    background-color: #f2f2f2;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px,
        rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

const Search = styled.input`
    width: 80%;
    margin: 0.5rem;

    outline: none;
    background: none;

    border: none;
    border-bottom: 1px solid gray;
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
            <Topbar>
                <Search
                    placeholder="Enter Drink Name"
                    onChange={event => setQuery(event.target.value)}
                />
            </Topbar>
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
