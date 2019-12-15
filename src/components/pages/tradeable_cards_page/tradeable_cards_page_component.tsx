import * as React from "react";
import { FFCard } from "../../../data/structures/ff_card";
import { TradeableCardComponent } from "../../tradeable_card/tradeable_card_component";
import { PageProps } from "../page_props";
import { FilterBarComponent } from "../../filter_bar/filter_bar_component";

export interface TradeableCardsPageProps extends PageProps {
    cards: FFCard[];
}

export const TradeableCardsPageComponent: React.FC<TradeableCardsPageProps> = props => {
    const { cards } = props;
    const [filteredCards, setFilteredCards] = React.useState(cards);

    return (
        <div>
            <FilterBarComponent cards={cards} onFilter={cards => setFilteredCards(cards)} />
            {filteredCards.map(c => (
                <TradeableCardComponent key={c.serial} card={c} />
            ))}
        </div>
    );
};
