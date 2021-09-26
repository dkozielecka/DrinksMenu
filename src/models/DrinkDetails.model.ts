import _ from 'lodash';

import { Drink } from './Drink.model';

export class DrinkDetails implements Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
    strGlass: string;
    strAlcoholic: string;
    strInstructions: string;
    ingredients: string[];

    constructor(init: Partial<DrinkDetails>) {
        _.defaultsDeep(this, init);
    }
}
