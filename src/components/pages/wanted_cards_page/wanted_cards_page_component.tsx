import * as React from "react";
import { FFCard } from "../../../data/structures/ff_card";
import { WantedCardComponent } from "../../wanted_card/wanted_card_component";
import { PageProps } from "../page_props";
import { FilterBarComponent } from "../../filter_bar/filter_bar_component";
import { wantedCardsPageStyle } from "./wanted_cards_page.style";

export interface WantedCardsPageProps extends PageProps {
    cards: FFCard[];
}

export const WantedCardsPageComponent: React.FC<WantedCardsPageProps> = (props: WantedCardsPageProps) => {
    const { cards } = props;
    const [filteredCards, setFilteredCards] = React.useState(cards);

    return (
        <div className={`${wantedCardsPageStyle}`}>
            <FilterBarComponent
                cards={cards}
                onFilter={cards => setFilteredCards(cards)}
                showTradeableVersionFilter={false}
            />
            <div className={`cards`}>
                {filteredCards.map(c => (
                    <WantedCardComponent card={c} key={c.serial} />
                ))}
            </div>
        </div>
    );
};
