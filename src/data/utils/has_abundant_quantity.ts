import { FFCard } from "../structures/ff_card";
import { Rarity } from "../structures/rarity";
import { getTotalQuantity } from "./get_total_quantity";

export const hasAbundantQuantity: (card: FFCard) => boolean = card => {
    return card.rarity === Rarity.COMMON || card.rarity === Rarity.RARE || getTotalQuantity(card) === 0;
};
