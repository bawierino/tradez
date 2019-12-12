import React from "react";
import { allFFDecksCards } from "./data/all_ffdecks_cards";
import { mapFFDecksCards } from "./data/transformations/map_ff_decks_cards";
import { Rarity } from "./data/structures/rarity";
import { getTotalQuantity } from "./data/transformations/get_total_quanity";

const App: React.FC = () => {
    return (
        <div>
            {mapFFDecksCards(allFFDecksCards)
                .filter(
                    c =>
                        c.rarity === Rarity.LEGEND &&
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

export default App;
