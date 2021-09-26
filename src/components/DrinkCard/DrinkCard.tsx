import * as React from 'react';

import { DrinkCardProps } from 'models/DrinkCard.model';

const DrinkCard = (props: DrinkCardProps) => {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.img} />
        </div>
    );
};

export default DrinkCard;
