import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { getRarityMessage } from "../../data/transformations/get_rarity_message";
import { getSpecificTradeableQuantity } from "../../data/utils/get_specific_tradeable_quantity";
import { getTotalQuantity } from "../../data/utils/get_total_quantity";
import { hasAbundantQuantity } from "../../data/utils/has_abundant_quantity";
import { CardComponent } from "../../design_system/components/card/card_component";
import { tradeableCardStyle } from "./tradeable_card.style";

export interface TradeableCardsProps {
    card: FFCard;
}

const A_LOT = 1337;

export const TradeableCardComponent: React.FC<TradeableCardsProps> = props => {
    const { card } = props;

    const aLotAvailable = hasAbundantQuantity(card);
    const totalQuantity = getTotalQuantity(card);

    const tradeableQuantity = aLotAvailable ? A_LOT : Math.max(totalQuantity - card.minimalWantedQuantity, 0);
    const canTrade = !!tradeableQuantity || aLotAvailable;

    const tradeableNormalQuantity = aLotAvailable ? A_LOT : getSpecificTradeableQuantity(card.normal);
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
            <CardComponent>
                <div className={tradeableCardStyle}>
                    <div className="name">{card.name}</div>
                    <div className="trade-info">{tradeInfo}</div>
                    <div className="bottom-line">
                        <div className="rarity">{getRarityMessage(card.rarity)}</div>
                        <div className="serial">{card.serial}</div>
                    </div>
                </div>
            </CardComponent>
        );
    } else {
        return null;
    }
};
