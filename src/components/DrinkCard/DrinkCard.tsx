import * as React from 'react';
import { FC } from 'react';

import { DrinkCardProps } from 'models';
import { Card, CardHeader, CardPhoto, CardTitle } from 'views';

export const DrinkCard: FC<DrinkCardProps> = (props: DrinkCardProps) => {
    return (
        <Card onClick={() => props.openCard(props.id)}>
            <CardHeader>
                <CardTitle>{props.name}</CardTitle>
            </CardHeader>
            <CardPhoto src={props.img} alt={props.name} />
        </Card>
    );
};
