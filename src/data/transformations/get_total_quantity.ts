import { FFCard } from "../structures/ff_card";

export function getTotalQuantity(card: FFCard): number {
    return (
        card.foilArt.quantity +
        card.alternateArt.quantity +
        card.fullArt.quantity +
        card.foil.quantity +
        card.normal.quantity +
        card.alternateArtFoil.quantity
    );
}
