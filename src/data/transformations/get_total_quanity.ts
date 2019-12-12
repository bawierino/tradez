import { FFCard } from "../structures/ff_card";

export function getTotalQuantity(card: FFCard): number {
    return (
        card.foilArtQuanity +
        card.alternateArtQuantity +
        card.fullArtQuantity +
        card.foilQuantity +
        card.normalQuantity +
        card.alternateArtFoilQuantity
    );
}
