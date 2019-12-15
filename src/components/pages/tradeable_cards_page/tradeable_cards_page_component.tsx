import * as React from "react";
import { FFCard } from "../../../data/structures/ff_card";
import { TradeableCardComponent } from "../../tradeable_card/tradeable_card_component";
import { PageProps } from "../page_props";

export interface TradeableCardsPageProps extends PageProps {
    cards: FFCard[];
}

export const TradeableCardsPageComponent: React.FC<TradeableCardsPageProps> = props => {
    const { cards } = props;
    return (
        <div>
            {cards.map(c => (
                <TradeableCardComponent key={c.serial} card={c} />
            ))}
        </div>
    );
};
