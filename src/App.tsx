import React from "react";
import { allFFDecksCards } from "./data/all_ff_decks_cards";
import { FFCard } from "./data/structures/ff_card";
import { mapFFDecksCards } from "./data/transformations/map_ff_decks_cards";
import { OverviewPageComponent } from "./components/overview_page_component";

const App: React.FC = () => {
    const allCards: FFCard[] = mapFFDecksCards(allFFDecksCards);

    return <OverviewPageComponent cards={allCards} />;
};

export default App;
