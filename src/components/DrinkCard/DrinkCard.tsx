import * as React from 'react';

import { DrinkCardProps } from 'models/DrinkCard.model';
import { Card, CardHeader, CardPhoto, CardTitle } from 'views/Cards/Card';

const DrinkCard = (props: DrinkCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.name}</CardTitle>
            </CardHeader>
            <CardPhoto src={props.img} alt={props.name} />
        </Card>
    );
};

export default DrinkCard;
