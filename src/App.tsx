import React from "react";
import { PageSelectPageComponent } from "./components/pages/page_select_page_component";
import { TradeableCardsPageComponent } from "./components/pages/tradeable_cards_page_component";
import { WantedCardsPageComponent } from "./components/pages/wanted_cards_page_component";
import { useCards } from "./hooks/use_cards";
import { PageId, useRouter } from "./hooks/use_router";

const App: React.FC = () => {
    const cards = useCards();
    const routerAPI = useRouter();

    switch (routerAPI.getCurrentPageId()) {
        case PageId.TRADEABLE_CARDS:
            return <TradeableCardsPageComponent cards={cards} routerAPI={routerAPI} />;
        case PageId.WANTED_CARDS:
            return <WantedCardsPageComponent cards={cards} routerAPI={routerAPI} />;
        case PageId.PAGE_SELECT:
        default:
            return <PageSelectPageComponent routerAPI={routerAPI} />;
    }
};

export default App;
