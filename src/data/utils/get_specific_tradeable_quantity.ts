import { CardQuantityInfo } from "../structures/ff_card";
import { A_LOT } from "../structures/a_lot";

export function getSpecificTradeableQuantity(info: CardQuantityInfo): number {
    if (info.quantity >= A_LOT) {
        return A_LOT;
    } else {
        return Math.max(0, info.quantity - info.minimalQuantityWanted);
    }
}
