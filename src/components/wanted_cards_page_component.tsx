import * as React from "react";
import { FFCard } from "../data/structures/ff_card";
import { Rarity } from "../data/structures/rarity";
import { getTotalQuantity } from "../data/transformations/get_total_quantity";

export interface WantedCardsPageProps {
    cards: FFCard[];
}

export const WantedCardsPageComponent: React.FC<WantedCardsPageProps> = (props: WantedCardsPageProps) => {
    const { cards } = props;
    return (
        <div>
            {cards
                .filter(
                    c =>
                        (c.rarity === Rarity.LEGEND || c.rarity === Rarity.HERO) &&
                        getTotalQuantity(c) < c.minimalWantedQuantity &&
                        getTotalQuantity(c) > 0
                )
                .map(c => (
                    <div key={c.serial}>
                        {c.name} {c.serial} we want at least {c.minimalWantedQuantity} but we have only{" "}
                        {getTotalQuantity(c)}
                    </div>
                ))}
        </div>
    );
};
