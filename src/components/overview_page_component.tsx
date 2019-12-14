import * as React from "react";
import { FFCard } from "../data/structures/ff_card";
import { TradeableCardsPageComponent } from "./tradeable_cards_page_component";
import { WantedCardsPageComponent } from "./wanted_cards_page_component";

export interface OverviewPageProps {
    cards: FFCard[];
}

enum CurrentPage {
    PAGE_SELECT = "PAGE_SELECT",
    TRADEABLE_CARDS = "TRADEABLE_CARDS",
    WANTED_CARDS = "WANTED_CARDS"
}

export const OverviewPageComponent: React.FC<OverviewPageProps> = props => {
    const { cards } = props;
    const [currentPage, setCurrentPage] = React.useState(CurrentPage.PAGE_SELECT);

    switch (currentPage) {
        case CurrentPage.PAGE_SELECT:
            return renderPageSelect();
        case CurrentPage.TRADEABLE_CARDS:
            return <TradeableCardsPageComponent cards={cards} />;
        case CurrentPage.WANTED_CARDS:
            return <WantedCardsPageComponent cards={cards} />;
    }

    function renderPageSelect(): JSX.Element {
        return (
            <div>
                <div
                    onClick={() => {
                        setCurrentPage(CurrentPage.TRADEABLE_CARDS);
                    }}
                >
                    see tradeable cards
                </div>
                <div
                    onClick={() => {
                        setCurrentPage(CurrentPage.WANTED_CARDS);
                    }}
                >
                    see wanted cards
                </div>
            </div>
        );
    }
};
