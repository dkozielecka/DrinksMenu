import * as React from 'react';
import { FC } from 'react';

import { DrinkCardProps } from 'models/DrinkCardProps.model';
import { Card, CardHeader, CardPhoto, CardTitle } from 'views/Cards/Card';

const DrinkCard: FC<DrinkCardProps> = (props: DrinkCardProps) => {
    return (
        <Card onClick={() => props.openCard(props.id)}>
            <CardHeader>
                <CardTitle>{props.name}</CardTitle>
            </CardHeader>
            <CardPhoto src={props.img} alt={props.name} />
        </Card>
    );
};

export default DrinkCard;
