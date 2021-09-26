import { DrinkDetails } from './DrinkDetails.model';

export interface DrinkDialogProps {
    selectedDrink: DrinkDetails;
    showDialog: boolean;
    handleClose: () => void;
}
