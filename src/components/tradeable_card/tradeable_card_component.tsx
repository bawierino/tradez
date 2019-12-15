import * as React from "react";
import { FFCard, CardQuantityInfo } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { getTotalQuantity } from "../../data/transformations/get_total_quantity";

export interface TradeableCardsProps {
    card: FFCard;
}

const A_LOT = 1337;

export const TradeableCardComponent: React.FC<TradeableCardsProps> = props => {
    const { card } = props;

    const hasAbundantQuantity =
        card.rarity === Rarity.COMMON || card.rarity === Rarity.RARE || getTotalQuantity(card) === 0;
    const totalQuantity = getTotalQuantity(card);

    const tradeableQuantity = hasAbundantQuantity
        ? A_LOT
        : Math.max(totalQuantity - card.minimalWantedQuantity, 0);
    const canTrade = !!tradeableQuantity || hasAbundantQuantity;

    const tradeableNormalQuantity = hasAbundantQuantity ? A_LOT : getSpecificTradeableQuantity(card.normal);
    const tradeableFoilQuantity = getSpecificTradeableQuantity(card.foil);
    const tradeableAlternateArtQuantity = getSpecificTradeableQuantity(card.alternateArt);
    const tradeableAlternateArtFoilQuantity = getSpecificTradeableQuantity(card.alternateArtFoil);
    const tradeableFullArtQuantity = getSpecificTradeableQuantity(card.fullArt);
    const tradeableFoilArtQuantity = getSpecificTradeableQuantity(card.foilArt);

    if (canTrade) {
        const tradeInfo = `${
            tradeableQuantity >= A_LOT
                ? `Pick from the following selection`
                : `Pick up to ${tradeableQuantity} from the following`
        }: ${
            !!tradeableNormalQuantity
                ? `normal(${tradeableNormalQuantity >= A_LOT ? "a lot" : tradeableNormalQuantity}) `
                : ""
        }${!!tradeableFoilQuantity ? `foil(${tradeableFoilQuantity}) ` : ""}${
            !!tradeableAlternateArtQuantity ? `alternate art(${tradeableAlternateArtQuantity}) ` : ""
        }${
            !!tradeableAlternateArtFoilQuantity
                ? `alternate art foil(${tradeableAlternateArtFoilQuantity}) `
                : ""
        }${!!tradeableFullArtQuantity ? `full art(${tradeableFullArtQuantity}) ` : ""}${
            !!tradeableFoilArtQuantity ? `foil art(${tradeableFoilArtQuantity}) ` : ""
        }`;

        return (
            <div>
                {card.name} {card.serial} {card.rarity} {tradeInfo}
            </div>
        );
    } else {
        return null;
    }
};

function getSpecificTradeableQuantity(info: CardQuantityInfo): number {
    return Math.max(0, info.quantity - info.minimalQuantityWanted);
}
