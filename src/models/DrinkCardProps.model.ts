export interface DrinkCardProps {
    name: string;
    img: string;
    id: string;
    openCard: (drinkId: string) => void;
}
