import { CardQuantityInfo } from "../structures/ff_card";

export function getSpecificTradeableQuantity(info: CardQuantityInfo): number {
    return Math.max(0, info.quantity - info.minimalQuantityWanted);
}
