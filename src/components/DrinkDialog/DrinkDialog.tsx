import { FC } from 'react';

import { Typography, DialogTitle, DialogContent, Dialog } from '@mui/material';
import styled from 'styled-components';

import { DrinkDetails, DrinkDialogProps } from 'models';
import { CardDetails, CardDetailsFeature, CardDetailsFeatureTitle, CardPhoto } from 'views';

export const DialogBody = styled(DialogContent)`
    display: flex;

    justify-content: space-between;
    align-items: center;
`;

export const DialogDrink: FC<DrinkDialogProps> = ({
    showDialog,
    handleClose,
    selectedDrink,
}: DrinkDialogProps) => {
    return (
        <Dialog onClose={handleClose} open={showDialog}>
            <DialogTitle>{selectedDrink.strDrink}</DialogTitle>
            <DialogBody>
                <CardPhoto src={selectedDrink.strDrinkThumb} width="50%" height="50%"></CardPhoto>
                <CardDetails>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Glass kind: </CardDetailsFeatureTitle>
                        <span>{selectedDrink.strGlass}</span>
                    </CardDetailsFeature>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Is alcoholic: </CardDetailsFeatureTitle>
                        <span>{selectedDrink.strAlcoholic}</span>
                    </CardDetailsFeature>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Ingredients: </CardDetailsFeatureTitle>
                        <ul>
                            {selectedDrink.ingredients.map((ingredient: string, i: number) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    </CardDetailsFeature>
                    <CardDetailsFeature>
                        <CardDetailsFeatureTitle>Recipie: </CardDetailsFeatureTitle>
                        <p>{selectedDrink.strInstructions}</p>
                    </CardDetailsFeature>
                </CardDetails>
            </DialogBody>
        </Dialog>
    );
};
