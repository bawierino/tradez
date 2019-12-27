import * as React from "react";
import { FFCard } from "../../../data/structures/ff_card";
import { FilterBarComponent } from "../../filter_bar/filter_bar_component";
import { TradeableCardComponent } from "../../tradeable_card/tradeable_card_component";
import { PageProps } from "../page_props";
import { tradeableCardsPageStyle } from "./tradeable_cards_page.style";
import { useScrollShadowClassName } from "../../../design_system/hooks/use_scroll_shadow_class_name";

export interface TradeableCardsPageProps extends PageProps {
    cards: FFCard[];
}

export const TradeableCardsPageComponent: React.FC<TradeableCardsPageProps> = props => {
    const { cards } = props;
    const [filteredCards, setFilteredCards] = React.useState(cards);
    const cardsRef = React.useRef(undefined);
    const scrollShadowClassName = useScrollShadowClassName(cardsRef);

    return (
        <div className={tradeableCardsPageStyle}>
            <FilterBarComponent
                cards={cards}
                onFilter={cards => setFilteredCards(cards)}
                showTradeableVersionFilter={true}
            />
            <div className={`cards ${scrollShadowClassName}`} ref={cardsRef}>
                {filteredCards.map(c => (
                    <TradeableCardComponent key={c.serial} card={c} />
                ))}
            </div>
        </div>
    );
};
