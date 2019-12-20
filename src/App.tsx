import React from "react";
import { PageSelectPageComponent } from "./components/pages/page_select_page/page_select_page_component";
import { TradeableCardsPageComponent } from "./components/pages/tradeable_cards_page/tradeable_cards_page_component";
import { WantedCardsPageComponent } from "./components/pages/wanted_cards_page/wanted_cards_page_component";
import { useCards } from "./hooks/use_cards";
import { PageId, useRouter } from "./hooks/use_router";
import { useScrollShadowClassName } from "./design_system/hooks/use_scroll_shadow_class_name";

const App: React.FC = () => {
    const cards = useCards();

    const routerAPI = useRouter();

    const htmlRef = React.useRef(document.documentElement);
    const scrollShadowClassName = useScrollShadowClassName(htmlRef);
    htmlRef.current.className = scrollShadowClassName;

    switch (routerAPI.getCurrentPageId()) {
        case PageId.TRADEABLE_CARDS:
            return <TradeableCardsPageComponent cards={cards} routerAPI={routerAPI} />;
        case PageId.WANTED_CARDS:
            return <WantedCardsPageComponent cards={cards} routerAPI={routerAPI} />;
        case PageId.PAGE_SELECT:
            return <PageSelectPageComponent routerAPI={routerAPI} />;
        default:
            routerAPI.fallback();
            return <div />;
    }
};

export default App;
