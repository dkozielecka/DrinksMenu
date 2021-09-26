import { FC } from 'react';

import { Typography, DialogTitle, DialogContent, Dialog } from '@mui/material';
import styled from 'styled-components';

import { DrinkDialogProps } from 'models/DrinkDialogProps.model';
import { CardDetails, CardDetailsFeature, CardDetailsFeatureTitle, CardPhoto } from 'views/Cards/Card';

export const DialogBody = styled(DialogContent)`
    display: flex;

    justify-content: space-between;
    align-items: center;
`;

export const DialogDrink: FC<DrinkDialogProps> = (props: DrinkDialogProps) => {
    return (
        <Dialog onClose={props.handleClose} open={props.showDialog}>
            <DialogTitle>{props.selectedDrink.strDrink}</DialogTitle>
            <DialogBody>
                <CardPhoto
                    src={props.selectedDrink.strDrinkThumb}
                    width="50%"
                    height="50%"
                ></CardPhoto>
                <CardDetails>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Glass kind: </CardDetailsFeatureTitle>
                        <span>{props.selectedDrink.strGlass}</span>
                    </CardDetailsFeature>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Is alcoholik: </CardDetailsFeatureTitle>
                        <span>{props.selectedDrink.strAlcoholic}</span>
                    </CardDetailsFeature>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Ingredients: </CardDetailsFeatureTitle>
                        <ul>
                            {props.selectedDrink.ingredients.map(
                                (ingredient: string, i: number) => (
                                    <li key={i}>{ingredient}</li>
                                )
                            )}
                        </ul>
                    </CardDetailsFeature>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Recipie: </CardDetailsFeatureTitle>
                        <p>{props.selectedDrink.strInstructions}</p>
                    </CardDetailsFeature>
                </CardDetails>
            </DialogBody>
        </Dialog>
    );
};
