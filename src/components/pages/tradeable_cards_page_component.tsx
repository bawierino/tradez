import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { getTotalQuantity } from "../../data/transformations/get_total_quantity";
import { PageProps } from "./page_props";

export interface TradeableCardsPageProps extends PageProps {
    cards: FFCard[];
}

export const TradeableCardsPageComponent: React.FC<TradeableCardsPageProps> = props => {
    const { cards } = props;
    return (
        <div>
            {cards
                .filter(
                    c =>
                        (c.rarity === Rarity.LEGEND || c.rarity === Rarity.HERO) &&
                        getTotalQuantity(c) > c.minimalWantedQuantity
                )
                .map(c => (
                    <div key={c.serial}>
                        we have {getTotalQuantity(c) - c.minimalWantedQuantity} {c.name} {c.serial} to trade
                    </div>
                ))}
        </div>
    );
};
